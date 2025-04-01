/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 * @oncall react_native
 * @fantom_flags enableAccessToHostTreeInFabric:true
 * @fantom_flags enableUIConsistency:true
 * @fantom_flags enableSynchronousStateUpdates:true
 */

import 'react-native/Libraries/Core/InitializeCore';

import ensureInstance from '../../../__tests__/utilities/ensureInstance';
import * as Fantom from '@react-native/fantom';
import * as React from 'react';
import {useLayoutEffect} from 'react';
import {ScrollView, Text} from 'react-native';
import ReactNativeElement from 'react-native/src/private/webapis/dom/nodes/ReactNativeElement';

describe('UIConsistency', () => {
  it('should provide consistent data from the tree within the same synchronous function', () => {
    const root = Fantom.createRoot();

    let maybeScrollViewNode;

    Fantom.runTask(() => {
      root.render(
        <ScrollView
          ref={node => {
            maybeScrollViewNode = node;
          }}
          style={{height: 100}}
          contentContainerStyle={{height: 1000}}
        />,
      );
    });

    const scrollViewNode = ensureInstance(
      maybeScrollViewNode,
      ReactNativeElement,
    );

    Fantom.runTask(() => {
      expect(scrollViewNode.scrollTop).toBe(0);

      Fantom.runOnUIThread(() => {
        Fantom.enqueueScrollEvent(scrollViewNode, {x: 0, y: 100});
      });

      expect(scrollViewNode.scrollTop).toBe(0);
    });

    expect(scrollViewNode.scrollTop).toBe(100);
  });

  it('should provide up-to-date data in the first access to the tree', () => {
    const root = Fantom.createRoot();

    let maybeScrollViewNode;

    Fantom.runTask(() => {
      root.render(
        <ScrollView
          ref={node => {
            maybeScrollViewNode = node;
          }}
          style={{height: 100}}
          contentContainerStyle={{height: 1000}}
        />,
      );
    });

    const scrollViewNode = ensureInstance(
      maybeScrollViewNode,
      ReactNativeElement,
    );

    Fantom.runTask(() => {
      // We never accessed the tree before the state update

      Fantom.runOnUIThread(() => {
        Fantom.enqueueScrollEvent(scrollViewNode, {x: 0, y: 100});
      });

      // The value is up-to-date immediately
      expect(scrollViewNode.scrollTop).toBe(100);
    });
  });

  it('should provide up-to-date data after commit', () => {
    const root = Fantom.createRoot();

    let maybeScrollViewNode;

    function InnerComponent(props: {
      text: string,
      renderFn?: () => void,
      effectFn?: () => void,
    }): React.Node {
      const {text, renderFn, effectFn} = props;

      renderFn?.();

      useLayoutEffect(() => {
        effectFn?.();
      }, [text, effectFn]);

      return <Text>{text}</Text>;
    }

    Fantom.runTask(() => {
      root.render(
        <ScrollView
          ref={node => {
            maybeScrollViewNode = node;
          }}
          style={{height: 100}}
          contentContainerStyle={{height: 1000}}>
          <InnerComponent text="A" />
        </ScrollView>,
      );
    });

    const scrollViewNode = ensureInstance(
      maybeScrollViewNode,
      ReactNativeElement,
    );

    Fantom.runTask(() => {
      root.render(
        <ScrollView
          style={{height: 100}}
          contentContainerStyle={{height: 1000}}>
          <InnerComponent
            text="B"
            renderFn={() => {
              expect(scrollViewNode.scrollTop).toBe(0);

              Fantom.runOnUIThread(() => {
                Fantom.enqueueScrollEvent(scrollViewNode, {x: 0, y: 100});
              });

              expect(scrollViewNode.scrollTop).toBe(0);
            }}
            effectFn={() => {
              expect(scrollViewNode.scrollTop).toBe(100);
            }}
          />
        </ScrollView>,
      );
    });
  });
});
