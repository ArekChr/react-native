/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#pragma once

#include <react/renderer/core/ConcreteComponentDescriptor.h>
#include <react/renderer/core/LayoutConstraints.h>
#include <react/utils/ContextContainer.h>

namespace facebook::react {

class AndroidSwitchMeasurementsManager {
 public:
  AndroidSwitchMeasurementsManager(
      const std::shared_ptr<const ContextContainer>& contextContainer)
      : contextContainer_(contextContainer) {}

  Size measure(SurfaceId surfaceId, LayoutConstraints layoutConstraints) const;

 private:
  const std::shared_ptr<const ContextContainer> contextContainer_;
};

} // namespace facebook::react
