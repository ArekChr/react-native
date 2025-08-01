/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict
 * @format
 */

/* eslint sort-keys: 'error' */

import type {FeatureFlagDefinitions} from './types';

/**
 * This is the source of truth for React Native feature flags.
 *
 * If you modify this file, you need to update all the generated files
 * running the following script from the repo root:
 *   yarn featureflags --update
 */

// These flags are only used in tests for the feature flags system
const testDefinitions: FeatureFlagDefinitions = {
  common: {
    commonTestFlag: {
      defaultValue: false,
      metadata: {
        description: 'Common flag for testing. Do NOT modify.',
        expectedReleaseValue: true,
        purpose: 'operational',
      },
      ossReleaseStage: 'none',
    },
    commonTestFlagWithoutNativeImplementation: {
      defaultValue: false,
      metadata: {
        description:
          'Common flag for testing (without native implementation). Do NOT modify.',
        expectedReleaseValue: true,
        purpose: 'operational',
      },
      ossReleaseStage: 'none',
      skipNativeAPI: true,
    },
  },
  jsOnly: {
    jsOnlyTestFlag: {
      defaultValue: false,
      metadata: {
        description: 'JS-only flag for testing. Do NOT modify.',
        expectedReleaseValue: true,
        purpose: 'operational',
      },
      ossReleaseStage: 'none',
    },
  },
};

const definitions: FeatureFlagDefinitions = {
  common: {
    ...testDefinitions.common,
    cdpInteractionMetricsEnabled: {
      defaultValue: false,
      metadata: {
        dateAdded: '2025-07-16',
        description:
          'Enable emitting of InteractionEntry live metrics to the debugger. Requires `enableBridgelessArchitecture`.',
        expectedReleaseValue: true,
        purpose: 'experimentation',
      },
      ossReleaseStage: 'none',
    },
    cxxNativeAnimatedEnabled: {
      defaultValue: false,
      metadata: {
        dateAdded: '2025-03-14',
        description:
          'Use a C++ implementation of Native Animated instead of the platform implementation.',
        expectedReleaseValue: true,
        purpose: 'experimentation',
      },
      ossReleaseStage: 'none',
    },
    cxxNativeAnimatedRemoveJsSync: {
      defaultValue: false,
      metadata: {
        dateAdded: '2025-06-16',
        description: 'Removes JS sync at end of native animation',
        expectedReleaseValue: true,
        purpose: 'experimentation',
      },
      ossReleaseStage: 'none',
    },
    disableFabricCommitInCXXAnimated: {
      defaultValue: false,
      metadata: {
        dateAdded: '2024-10-26',
        description:
          'Prevents use of Fabric commit in C++ Animated implementation',
        expectedReleaseValue: false,
        purpose: 'experimentation',
      },
      ossReleaseStage: 'none',
    },
    disableMountItemReorderingAndroid: {
      defaultValue: false,
      metadata: {
        dateAdded: '2024-10-26',
        description:
          'Prevent FabricMountingManager from reordering mountItems, which may lead to invalid state on the UI thread',
        expectedReleaseValue: true,
        purpose: 'experimentation',
      },
      ossReleaseStage: 'none',
    },
    disableOldAndroidAttachmentMetricsWorkarounds: {
      defaultValue: true,
      metadata: {
        dateAdded: '2025-07-02',
        description:
          'Disable some workarounds for old Android versions in TextLayoutManager logic for retrieving attachment metrics',
        expectedReleaseValue: true,
        purpose: 'experimentation',
      },
      ossReleaseStage: 'none',
    },
    disableTextLayoutManagerCacheAndroid: {
      defaultValue: false,
      metadata: {
        dateAdded: '2025-05-28',
        description:
          'Turns off the global measurement cache used by TextLayoutManager on Android.',
        expectedReleaseValue: false,
        purpose: 'experimentation',
      },
      ossReleaseStage: 'none',
    },
    enableAccessibilityOrder: {
      defaultValue: false,
      metadata: {
        dateAdded: '2025-4-3',
        description:
          'When enabled, the accessibilityOrder prop will propagate to native platforms and define the accessibility order.',
        expectedReleaseValue: true,
        purpose: 'experimentation',
      },
      ossReleaseStage: 'none',
    },
    enableAccumulatedUpdatesInRawPropsAndroid: {
      defaultValue: false,
      metadata: {
        dateAdded: '2024-12-10',
        description:
          'When enabled, Android will accumulate updates in rawProps to reduce the number of mounting instructions for cascading re-renders.',
        expectedReleaseValue: true,
        purpose: 'experimentation',
      },
      ossReleaseStage: 'none',
    },
    enableAndroidTextMeasurementOptimizations: {
      defaultValue: false,
      metadata: {
        dateAdded: '2025-07-01',
        description:
          'Enables various optimizations throughout the path of measuring text on Android.',
        expectedReleaseValue: true,
        purpose: 'experimentation',
      },
      ossReleaseStage: 'none',
    },
    enableBridgelessArchitecture: {
      defaultValue: false,
      metadata: {
        description:
          'Feature flag to enable the new bridgeless architecture. Note: Enabling this will force enable the following flags: `useTurboModules` & `enableFabricRenderer`.',
        expectedReleaseValue: true,
        purpose: 'release',
      },
      ossReleaseStage: 'canary',
    },
    enableCppPropsIteratorSetter: {
      defaultValue: false,
      metadata: {
        dateAdded: '2024-09-13',
        description:
          'Enable prop iterator setter-style construction of Props in C++ (this flag is not used in Java).',
        expectedReleaseValue: true,
        purpose: 'experimentation',
      },
      ossReleaseStage: 'none',
    },
    enableCustomFocusSearchOnClippedElementsAndroid: {
      defaultValue: true,
      metadata: {
        description:
          'This enables the fabric implementation of focus search so that we can focus clipped elements',
        expectedReleaseValue: true,
        purpose: 'operational',
      },
      ossReleaseStage: 'none',
    },
    enableDestroyShadowTreeRevisionAsync: {
      defaultValue: false,
      metadata: {
        dateAdded: '2025-04-29',
        description:
          'Enables destructor calls for ShadowTreeRevision in the background to reduce UI thread work.',
        expectedReleaseValue: true,
        purpose: 'experimentation',
      },
      ossReleaseStage: 'none',
    },
    enableDoubleMeasurementFixAndroid: {
      defaultValue: false,
      metadata: {
        description:
          'When enabled a subset of components will avoid double measurement on Android.',
        expectedReleaseValue: true,
        purpose: 'operational',
      },
      ossReleaseStage: 'none',
    },
    enableEagerMainQueueModulesOnIOS: {
      defaultValue: false,
      metadata: {
        description:
          'This infra allows native modules to initialize on the main thread, during React Native init.',
        expectedReleaseValue: true,
        purpose: 'release',
      },
      ossReleaseStage: 'none',
    },
    enableEagerRootViewAttachment: {
      defaultValue: false,
      metadata: {
        dateAdded: '2024-07-28',
        description:
          'Feature flag to configure eager attachment of the root view/initialisation of the JS code.',
        expectedReleaseValue: true,
        purpose: 'experimentation',
      },
      ossReleaseStage: 'none',
    },
    enableFabricLogs: {
      defaultValue: false,
      metadata: {
        description: 'This feature flag enables logs for Fabric.',
        expectedReleaseValue: true,
        purpose: 'operational',
      },
      ossReleaseStage: 'none',
    },
    enableFabricRenderer: {
      defaultValue: false,
      metadata: {
        description: 'Enables the use of the Fabric renderer in the whole app.',
        expectedReleaseValue: true,
        purpose: 'release',
      },
      ossReleaseStage: 'canary',
    },
    enableFixForParentTagDuringReparenting: {
      defaultValue: false,
      metadata: {
        dateAdded: '2025-04-22',
        description:
          'This feature flag enables a fix for reparenting fix in differentiator',
        expectedReleaseValue: true,
        purpose: 'experimentation',
      },
      ossReleaseStage: 'none',
    },
    enableFontScaleChangesUpdatingLayout: {
      defaultValue: false,
      metadata: {
        dateAdded: '2025-04-07',
        description:
          'Enables font scale changes updating layout for measurable nodes.',
        expectedReleaseValue: true,
        purpose: 'experimentation',
      },
      ossReleaseStage: 'none',
    },
    enableIOSTextBaselineOffsetPerLine: {
      defaultValue: false,
      metadata: {
        dateAdded: '2025-05-21',
        description:
          'Applies base offset for each line of text separately on iOS.',
        expectedReleaseValue: true,
        purpose: 'experimentation',
      },
      ossReleaseStage: 'none',
    },
    enableIOSViewClipToPaddingBox: {
      defaultValue: false,
      metadata: {
        dateAdded: '2024-08-30',
        description: 'iOS Views will clip to their padding box vs border box',
        expectedReleaseValue: true,
        purpose: 'experimentation',
      },
      ossReleaseStage: 'none',
    },
    enableImagePrefetchingAndroid: {
      defaultValue: false,
      metadata: {
        dateAdded: '2025-06-21',
        description:
          'When enabled, Android will build and initiate image prefetch requests on ImageShadowNode::layout',
        expectedReleaseValue: true,
        purpose: 'experimentation',
      },
      ossReleaseStage: 'none',
    },
    enableImmediateUpdateModeForContentOffsetChanges: {
      defaultValue: false,
      metadata: {
        dateAdded: '2025-07-15',
        description:
          'Dispatches state updates for content offset changes synchronously on the main thread.',
        expectedReleaseValue: true,
        purpose: 'experimentation',
      },
      ossReleaseStage: 'none',
    },
    enableInteropViewManagerClassLookUpOptimizationIOS: {
      defaultValue: false,
      metadata: {
        dateAdded: '2025-06-17',
        description:
          'This is to fix the issue with interop view manager where component descriptor lookup is causing ViewManager to preload.',
        expectedReleaseValue: true,
        purpose: 'experimentation',
      },
      ossReleaseStage: 'none',
    },
    enableLayoutAnimationsOnAndroid: {
      defaultValue: false,
      metadata: {
        description:
          'When enabled, LayoutAnimations API will animate state changes on Android.',
        expectedReleaseValue: true,
        purpose: 'release',
      },
      ossReleaseStage: 'none',
    },
    enableLayoutAnimationsOnIOS: {
      defaultValue: true,
      metadata: {
        description:
          'When enabled, LayoutAnimations API will animate state changes on iOS.',
        expectedReleaseValue: true,
        purpose: 'release',
      },
      ossReleaseStage: 'none',
    },
    enableMainQueueCoordinatorOnIOS: {
      defaultValue: false,
      metadata: {
        dateAdded: '2025-05-17',
        description:
          'Make RCTUnsafeExecuteOnMainQueueSync less likely to deadlock, when used in conjuction with sync rendering/events.',
        expectedReleaseValue: true,
        purpose: 'experimentation',
      },
      ossReleaseStage: 'none',
    },
    enableModuleArgumentNSNullConversionIOS: {
      defaultValue: false,
      metadata: {
        description:
          'Enable NSNull conversion when handling module arguments on iOS',
        expectedReleaseValue: true,
        purpose: 'release',
      },
      ossReleaseStage: 'none',
    },
    enableNativeCSSParsing: {
      defaultValue: false,
      metadata: {
        dateAdded: '2025-02-07',
        description:
          'Parse CSS strings using the Fabric CSS parser instead of ViewConfig processing',
        expectedReleaseValue: true,
        purpose: 'experimentation',
      },
      ossReleaseStage: 'none',
    },
    enableNetworkEventReporting: {
      defaultValue: false,
      metadata: {
        description:
          'Enable network event reporting hooks in each native platform through `NetworkReporter`. This flag should be combined with `enableResourceTimingAPI` and `fuseboxNetworkInspectionEnabled` to enable end-to-end reporting behaviour via the Web Performance API and CDP debugging respectively.',
        expectedReleaseValue: true,
        purpose: 'release',
      },
      ossReleaseStage: 'none',
    },
    enableNewBackgroundAndBorderDrawables: {
      defaultValue: true,
      metadata: {
        dateAdded: '2024-09-24',
        description:
          'Use BackgroundDrawable and BorderDrawable instead of CSSBackgroundDrawable',
        expectedReleaseValue: true,
        purpose: 'experimentation',
      },
      ossReleaseStage: 'none',
    },
    enablePreparedTextLayout: {
      defaultValue: false,
      metadata: {
        dateAdded: '2025-05-01',
        description: 'Enables caching text layout artifacts for later reuse',
        expectedReleaseValue: true,
        purpose: 'experimentation',
      },
      ossReleaseStage: 'none',
    },
    enablePropsUpdateReconciliationAndroid: {
      defaultValue: false,
      metadata: {
        dateAdded: '2024-07-12',
        description:
          'When enabled, Android will receive prop updates based on the differences between the last rendered shadow node and the last committed shadow node.',
        expectedReleaseValue: true,
        purpose: 'experimentation',
      },
      ossReleaseStage: 'none',
    },
    enableResourceTimingAPI: {
      defaultValue: false,
      metadata: {
        description:
          'Enables the reporting of network resource timings through `PerformanceObserver`.',
        expectedReleaseValue: true,
        purpose: 'release',
      },
      ossReleaseStage: 'none',
    },
    enableViewCulling: {
      defaultValue: false,
      metadata: {
        dateAdded: '2025-01-27',
        description:
          'Enables View Culling: as soon as a view goes off screen, it can be reused anywhere in the UI and pieced together with other items to create new UI elements.',
        expectedReleaseValue: true,
        purpose: 'experimentation',
      },
      ossReleaseStage: 'none',
    },
    enableViewRecycling: {
      defaultValue: false,
      metadata: {
        dateAdded: '2024-07-31',
        description:
          'Enables View Recycling. When enabled, individual ViewManagers must still opt-in.',
        expectedReleaseValue: true,
        purpose: 'experimentation',
      },
      ossReleaseStage: 'none',
    },
    enableViewRecyclingForText: {
      defaultValue: true,
      metadata: {
        dateAdded: '2025-02-05',
        description:
          'Enables View Recycling for <Text> via ReactTextView/ReactTextViewManager.',
        expectedReleaseValue: true,
        purpose: 'experimentation',
      },
      ossReleaseStage: 'none',
    },
    enableViewRecyclingForView: {
      defaultValue: true,
      metadata: {
        dateAdded: '2025-02-05',
        description:
          'Enables View Recycling for <View> via ReactViewGroup/ReactViewManager.',
        expectedReleaseValue: true,
        purpose: 'experimentation',
      },
      ossReleaseStage: 'none',
    },
    enableVirtualViewDebugFeatures: {
      defaultValue: false,
      metadata: {
        description:
          'Enables VirtualView debug features such as logging and overlays.',
        expectedReleaseValue: false,
        purpose: 'operational',
      },
      ossReleaseStage: 'none',
    },
    enableVirtualViewRenderState: {
      defaultValue: true,
      metadata: {
        dateAdded: '2025-06-25',
        description:
          'Enables reading render state when dispatching VirtualView events.',
        expectedReleaseValue: true,
        purpose: 'experimentation',
      },
      ossReleaseStage: 'none',
    },
    enableVirtualViewWindowFocusDetection: {
      defaultValue: false,
      metadata: {
        dateAdded: '2025-06-24',
        description:
          'Enables window focus detection for prioritizing VirtualView events.',
        expectedReleaseValue: true,
        purpose: 'experimentation',
      },
      ossReleaseStage: 'none',
    },
    fixMappingOfEventPrioritiesBetweenFabricAndReact: {
      defaultValue: false,
      metadata: {
        dateAdded: '2024-06-18',
        description:
          'Uses the default event priority instead of the discreet event priority by default when dispatching events from Fabric to React.',
        expectedReleaseValue: true,
        purpose: 'experimentation',
      },
      ossReleaseStage: 'none',
    },
    fuseboxEnabledRelease: {
      defaultValue: false,
      metadata: {
        description:
          'Flag determining if the React Native DevTools (Fusebox) CDP backend should be enabled in release builds. This flag is global and should not be changed across React Host lifetimes.',
        expectedReleaseValue: true,
        purpose: 'release',
      },
      ossReleaseStage: 'none',
    },
    fuseboxNetworkInspectionEnabled: {
      defaultValue: false,
      metadata: {
        dateAdded: '2024-01-31',
        description:
          'Enable network inspection support in the React Native DevTools CDP backend. Requires `enableBridgelessArchitecture`. This flag is global and should not be changed across React Host lifetimes.',
        expectedReleaseValue: true,
        purpose: 'experimentation',
      },
      ossReleaseStage: 'none',
    },
    hideOffscreenVirtualViewsOnIOS: {
      defaultValue: false,
      metadata: {
        dateAdded: '2025-06-30',
        description:
          'Hides offscreen VirtualViews on iOS by setting hidden = YES to avoid extra cost of views',
        expectedReleaseValue: true,
        purpose: 'experimentation',
      },
      ossReleaseStage: 'none',
    },
    perfMonitorV2Enabled: {
      defaultValue: false,
      metadata: {
        dateAdded: '2025-07-16',
        description:
          'Enable the V2 in-app Performance Monitor. This flag is global and should not be changed across React Host lifetimes.',
        expectedReleaseValue: true,
        purpose: 'experimentation',
      },
      ossReleaseStage: 'none',
    },
    preparedTextCacheSize: {
      defaultValue: 200,
      metadata: {
        dateAdded: '2025-06-25',
        description: 'Number cached PreparedLayouts in TextLayoutManager cache',
        expectedReleaseValue: 200,
        purpose: 'experimentation',
      },
      ossReleaseStage: 'none',
    },
    preventShadowTreeCommitExhaustion: {
      defaultValue: false,
      metadata: {
        dateAdded: '2025-07-23',
        description:
          'Enables a new mechanism in ShadowTree to prevent problems caused by multiple threads trying to commit concurrently. If a thread tries to commit a few times unsuccessfully, it will acquire a lock and try again.',
        expectedReleaseValue: true,
        purpose: 'experimentation',
      },
      ossReleaseStage: 'experimental',
    },
    releaseImageDataWhenConsumed: {
      defaultValue: false,
      metadata: {
        dateAdded: '2025-07-10',
        description:
          'Releases the cached image data when it is consumed by the observers.',
        expectedReleaseValue: true,
        purpose: 'experimentation',
      },
      ossReleaseStage: 'none',
    },
    shouldPressibilityUseW3CPointerEventsForHover: {
      defaultValue: false,
      metadata: {
        description:
          'Function used to enable / disable Pressibility from using W3C Pointer Events for its hover callbacks',
        expectedReleaseValue: true,
        purpose: 'release',
      },
      ossReleaseStage: 'none',
    },
    skipActivityIdentityAssertionOnHostPause: {
      defaultValue: false,
      metadata: {
        dateAdded: '2025-07-15',
        description:
          'Skip activity identity assertion in ReactHostImpl::onHostPause()',
        expectedReleaseValue: true,
        purpose: 'experimentation',
      },
      ossReleaseStage: 'none',
    },
    traceTurboModulePromiseRejectionsOnAndroid: {
      defaultValue: false,
      metadata: {
        description:
          'Enables storing js caller stack when creating promise in native module. This is useful in case of Promise rejection and tracing the cause.',
        expectedReleaseValue: true,
        purpose: 'operational',
      },
      ossReleaseStage: 'none',
    },
    updateRuntimeShadowNodeReferencesOnCommit: {
      defaultValue: false,
      metadata: {
        dateAdded: '2025-04-15',
        description:
          'When enabled, runtime shadow node references will be updated during the commit. This allows running RSNRU from any thread without corrupting the renderer state.',
        expectedReleaseValue: true,
        purpose: 'experimentation',
      },
      ossReleaseStage: 'none',
    },
    useAlwaysAvailableJSErrorHandling: {
      defaultValue: false,
      metadata: {
        description:
          'In Bridgeless mode, use the always available javascript error reporting pipeline.',
        expectedReleaseValue: true,
        purpose: 'release',
      },
      ossReleaseStage: 'none',
    },
    useFabricInterop: {
      defaultValue: true,
      metadata: {
        description:
          'Should this application enable the Fabric Interop Layer for Android? If yes, the application will behave so that it can accept non-Fabric components and render them on Fabric. This toggle is controlling extra logic such as custom event dispatching that are needed for the Fabric Interop Layer to work correctly.',
        expectedReleaseValue: false,
        purpose: 'release',
      },
      ossReleaseStage: 'none',
    },
    useNativeEqualsInNativeReadableArrayAndroid: {
      defaultValue: false,
      metadata: {
        dateAdded: '2025-07-15',
        description:
          'Use a native implementation of equals in NativeReadableArray.',
        expectedReleaseValue: true,
        purpose: 'experimentation',
      },
      ossReleaseStage: 'experimental',
    },
    useNativeTransformHelperAndroid: {
      defaultValue: false,
      metadata: {
        dateAdded: '2025-07-15',
        description: 'Use a native implementation of TransformHelper',
        expectedReleaseValue: true,
        purpose: 'experimentation',
      },
      ossReleaseStage: 'experimental',
    },
    useNativeViewConfigsInBridgelessMode: {
      defaultValue: false,
      metadata: {
        dateAdded: '2024-04-03',
        description:
          'When enabled, the native view configs are used in bridgeless mode.',
        expectedReleaseValue: true,
        purpose: 'experimentation',
      },
      ossReleaseStage: 'canary',
    },
    useOptimizedEventBatchingOnAndroid: {
      defaultValue: false,
      metadata: {
        dateAdded: '2024-08-29',
        description:
          'Uses an optimized mechanism for event batching on Android that does not need to wait for a Choreographer frame callback.',
        expectedReleaseValue: true,
        purpose: 'experimentation',
      },
      ossReleaseStage: 'none',
    },
    useRawPropsJsiValue: {
      defaultValue: false,
      metadata: {
        dateAdded: '2024-12-02',
        description:
          'Instead of using folly::dynamic as internal representation in RawProps and RawValue, use jsi::Value',
        expectedReleaseValue: true,
        purpose: 'experimentation',
      },
      ossReleaseStage: 'none',
    },
    useShadowNodeStateOnClone: {
      defaultValue: false,
      metadata: {
        dateAdded: '2025-04-16',
        description:
          'Use the state stored on the source shadow node when cloning it instead of reading in the most recent state on the shadow node family.',
        expectedReleaseValue: true,
        purpose: 'experimentation',
      },
      ossReleaseStage: 'none',
    },
    useTurboModuleInterop: {
      defaultValue: false,
      metadata: {
        dateAdded: '2024-07-28',
        description:
          'In Bridgeless mode, should legacy NativeModules use the TurboModule system?',
        expectedReleaseValue: true,
        purpose: 'experimentation',
      },
      ossReleaseStage: 'canary',
    },
    useTurboModules: {
      defaultValue: false,
      metadata: {
        description:
          'When enabled, NativeModules will be executed by using the TurboModule system',
        expectedReleaseValue: true,
        purpose: 'release',
      },
      ossReleaseStage: 'canary',
    },
    virtualViewPrerenderRatio: {
      defaultValue: 5,
      metadata: {
        dateAdded: '2025-05-30',
        description: 'Initial prerender ratio for VirtualView.',
        expectedReleaseValue: 5,
        purpose: 'experimentation',
      },
      ossReleaseStage: 'none',
    },
  },

  jsOnly: {
    ...testDefinitions.jsOnly,
    animatedShouldDebounceQueueFlush: {
      defaultValue: false,
      metadata: {
        dateAdded: '2024-02-05',
        description:
          'Enables an experimental flush-queue debouncing in Animated.js.',
        expectedReleaseValue: true,
        purpose: 'experimentation',
      },
      ossReleaseStage: 'none',
    },
    animatedShouldUseSingleOp: {
      defaultValue: false,
      metadata: {
        dateAdded: '2024-02-05',
        description:
          'Enables an experimental mega-operation for Animated.js that replaces many calls to native with a single call into native, to reduce JSI/JNI traffic.',
        expectedReleaseValue: true,
        purpose: 'experimentation',
      },
      ossReleaseStage: 'none',
    },
    deferFlatListFocusChangeRenderUpdate: {
      defaultValue: false,
      metadata: {
        dateAdded: '2025-07-02',
        description:
          'Use the deferred cell render update mechanism for focus change in FlatList.',
        expectedReleaseValue: true,
        purpose: 'experimentation',
      },
      ossReleaseStage: 'none',
    },
    enableAccessToHostTreeInFabric: {
      defaultValue: false,
      metadata: {
        description:
          'Enables access to the host tree in Fabric using DOM-compatible APIs.',
        expectedReleaseValue: true,
        purpose: 'release',
      },
      ossReleaseStage: 'none',
    },
    fixVirtualizeListCollapseWindowSize: {
      defaultValue: false,
      metadata: {
        dateAdded: '2024-11-22',
        description:
          'Fixing an edge case where the current window size is not properly calculated with fast scrolling. Window size collapsed to 1 element even if windowSize more than the current amount of elements',
        expectedReleaseValue: true,
        purpose: 'experimentation',
      },
      ossReleaseStage: 'none',
    },
    isLayoutAnimationEnabled: {
      defaultValue: true,
      metadata: {
        description:
          'Function used to enable / disabled Layout Animations in React Native.',
        expectedReleaseValue: true,
        purpose: 'release',
      },
      ossReleaseStage: 'none',
    },
    shouldUseAnimatedObjectForTransform: {
      defaultValue: false,
      metadata: {
        dateAdded: '2024-02-05',
        description:
          'Enables use of AnimatedObject for animating transform values.',
        expectedReleaseValue: true,
        purpose: 'experimentation',
      },
      ossReleaseStage: 'none',
    },
    shouldUseRemoveClippedSubviewsAsDefaultOnIOS: {
      defaultValue: false,
      metadata: {
        dateAdded: '2024-02-05',
        description:
          'removeClippedSubviews prop will be used as the default in FlatList on iOS to match Android',
        expectedReleaseValue: true,
        purpose: 'experimentation',
      },
      ossReleaseStage: 'none',
    },
    shouldUseSetNativePropsInFabric: {
      defaultValue: true,
      metadata: {
        dateAdded: '2024-03-05',
        description: 'Enables use of setNativeProps in JS driven animations.',
        expectedReleaseValue: true,
        purpose: 'experimentation',
      },
      ossReleaseStage: 'none',
    },
  },
};

// Keep it as a CommonJS module so we can easily import it from Node.js
module.exports = definitions;
