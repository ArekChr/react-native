/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<ecde28c685e74022e2dcee6dcec41d0b>>
 * @flow strict
 */

/**
 * IMPORTANT: Do NOT modify this file directly.
 *
 * To change the definition of the flags, edit
 *   packages/react-native/scripts/featureflags/ReactNativeFeatureFlags.config.js.
 *
 * To regenerate this code, run the following script from the repo root:
 *   yarn featureflags-update
 */

import type {TurboModule} from '../../../../Libraries/TurboModule/RCTExport';

import * as TurboModuleRegistry from '../../../../Libraries/TurboModule/TurboModuleRegistry';

export interface Spec extends TurboModule {
  +commonTestFlag?: () => boolean;
  +commonTestFlagWithoutNativeImplementation?: () => boolean;
  +allowRecursiveCommitsWithSynchronousMountOnAndroid?: () => boolean;
  +batchRenderingUpdatesInEventLoop?: () => boolean;
  +completeReactInstanceCreationOnBgThreadOnAndroid?: () => boolean;
  +disableEventLoopOnBridgeless?: () => boolean;
  +disableMountItemReorderingAndroid?: () => boolean;
  +enableAlignItemsBaselineOnFabricIOS?: () => boolean;
  +enableBridgelessArchitecture?: () => boolean;
  +enableCleanTextInputYogaNode?: () => boolean;
  +enableCppPropsIteratorSetter?: () => boolean;
  +enableDeletionOfUnmountedViews?: () => boolean;
  +enableEagerRootViewAttachment?: () => boolean;
  +enableEventEmitterRetentionDuringGesturesOnAndroid?: () => boolean;
  +enableFabricLogs?: () => boolean;
  +enableFabricRenderer?: () => boolean;
  +enableFabricRendererExclusively?: () => boolean;
  +enableGranularShadowTreeStateReconciliation?: () => boolean;
  +enableIOSViewClipToPaddingBox?: () => boolean;
  +enableLayoutAnimationsOnAndroid?: () => boolean;
  +enableLayoutAnimationsOnIOS?: () => boolean;
  +enableLineHeightCenteringOnAndroid?: () => boolean;
  +enableLineHeightCenteringOnIOS?: () => boolean;
  +enableLongTaskAPI?: () => boolean;
  +enableMicrotasks?: () => boolean;
  +enableNewBackgroundAndBorderDrawables?: () => boolean;
  +enablePreciseSchedulingForPremountItemsOnAndroid?: () => boolean;
  +enablePropsUpdateReconciliationAndroid?: () => boolean;
  +enableReportEventPaintTime?: () => boolean;
  +enableSynchronousStateUpdates?: () => boolean;
  +enableTextPreallocationOptimisation?: () => boolean;
  +enableUIConsistency?: () => boolean;
  +enableViewRecycling?: () => boolean;
  +excludeYogaFromRawProps?: () => boolean;
  +fixMappingOfEventPrioritiesBetweenFabricAndReact?: () => boolean;
  +fixMountingCoordinatorReportedPendingTransactionsOnAndroid?: () => boolean;
  +forceBatchingMountItemsOnAndroid?: () => boolean;
  +fuseboxEnabledDebug?: () => boolean;
  +fuseboxEnabledRelease?: () => boolean;
  +initEagerTurboModulesOnNativeModulesQueueAndroid?: () => boolean;
  +lazyAnimationCallbacks?: () => boolean;
  +loadVectorDrawablesOnImages?: () => boolean;
  +setAndroidLayoutDirection?: () => boolean;
  +traceTurboModulePromiseRejectionsOnAndroid?: () => boolean;
  +useFabricInterop?: () => boolean;
  +useImmediateExecutorInAndroidBridgeless?: () => boolean;
  +useModernRuntimeScheduler?: () => boolean;
  +useNativeViewConfigsInBridgelessMode?: () => boolean;
  +useOptimisedViewPreallocationOnAndroid?: () => boolean;
  +useOptimizedEventBatchingOnAndroid?: () => boolean;
  +useRuntimeShadowNodeReferenceUpdate?: () => boolean;
  +useTurboModuleInterop?: () => boolean;
  +useTurboModules?: () => boolean;
}

const NativeReactNativeFeatureFlags: ?Spec = TurboModuleRegistry.get<Spec>(
  'NativeReactNativeFeatureFlagsCxx',
);

export default NativeReactNativeFeatureFlags;
