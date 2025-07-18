/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

import type {ViewProps} from '../../../../Libraries/Components/View/ViewPropTypes';
import type {ColorValue} from '../../../../Libraries/StyleSheet/StyleSheet';
import type {
  BubblingEventHandler,
  Int32,
  WithDefault,
} from '../../../../Libraries/Types/CodegenTypes';
import type {HostComponent} from '../../types/HostComponent';

import codegenNativeCommands from '../../../../Libraries/Utilities/codegenNativeCommands';
import codegenNativeComponent from '../../../../Libraries/Utilities/codegenNativeComponent';
import * as React from 'react';

type SwitchChangeEvent = $ReadOnly<{
  value: boolean,
  target: Int32,
}>;

type SwitchNativeProps = $ReadOnly<{
  ...ViewProps,

  // Props
  disabled?: WithDefault<boolean, false>,
  value?: WithDefault<boolean, false>,
  tintColor?: ?ColorValue,
  onTintColor?: ?ColorValue,
  thumbTintColor?: ?ColorValue,

  // Deprecated props
  thumbColor?: ?ColorValue,
  trackColorForFalse?: ?ColorValue,
  trackColorForTrue?: ?ColorValue,

  // Events
  onChange?: ?BubblingEventHandler<SwitchChangeEvent>,
}>;

type ComponentType = HostComponent<SwitchNativeProps>;

interface NativeCommands {
  +setValue: (viewRef: React.ElementRef<ComponentType>, value: boolean) => void;
}

export const Commands: NativeCommands = codegenNativeCommands<NativeCommands>({
  supportedCommands: ['setValue'],
});

export default (codegenNativeComponent<SwitchNativeProps>('Switch', {
  paperComponentName: 'RCTSwitch',
  excludedPlatforms: ['android'],
}): ComponentType);
