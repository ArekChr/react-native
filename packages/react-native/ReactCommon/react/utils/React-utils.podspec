# Copyright (c) Meta Platforms, Inc. and affiliates.
#
# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.

require "json"

package = JSON.parse(File.read(File.join(__dir__, "..", "..", "..", "package.json")))
version = package['version']

source = { :git => 'https://github.com/facebook/react-native.git' }
if version == '1000.0.0'
  # This is an unpublished version, use the latest commit hash of the react-native repo, which we’re presumably in.
  source[:commit] = `git rev-parse HEAD`.strip if system("git rev-parse --git-dir > /dev/null 2>&1")
else
  source[:tag] = "v#{version}"
end

folly_config = get_folly_config()
folly_compiler_flags = folly_config[:compiler_flags]
folly_version = folly_config[:version]

header_search_paths = [
    "\"$(PODS_ROOT)/RCT-Folly\"",
    "\"$(PODS_TARGET_SRCROOT)\"",
    "\"$(PODS_TARGET_SRCROOT)/ReactCommon\"",
]

Pod::Spec.new do |s|
  s.name                   = "React-utils"
  s.version                = version
  s.summary                = "-"  # TODO
  s.homepage               = "https://reactnative.dev/"
  s.license                = package["license"]
  s.author                 = "Meta Platforms, Inc. and its affiliates"
  s.platforms              = min_supported_versions
  s.source                 = source
  s.source_files           = "**/*.{cpp,h,mm}"
  s.compiler_flags         = folly_compiler_flags
  s.header_dir             = "react/utils"
  s.exclude_files          = "tests"
  s.pod_target_xcconfig    = { "CLANG_CXX_LANGUAGE_STANDARD" => rct_cxx_language_standard(),
                               "HEADER_SEARCH_PATHS" => header_search_paths.join(' '),
                               "DEFINES_MODULE" => "YES" }

  if ENV['USE_FRAMEWORKS']
    s.module_name            = "React_utils"
    s.header_mappings_dir  = "../.."
  end

  s.dependency "RCT-Folly", folly_version
  s.dependency "React-jsi", version
  s.dependency "glog"

  depend_on_js_engine(s)

  add_dependency(s, "React-debug")
end
