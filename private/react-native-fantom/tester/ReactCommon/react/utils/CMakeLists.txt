# Copyright (c) Meta Platforms, Inc. and affiliates.
#
# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.

cmake_minimum_required(VERSION 3.13)
set(CMAKE_VERBOSE_MAKEFILE on)

include(${REACT_COMMON_DIR}/cmake-utils/react-native-flags.cmake)

file(GLOB react_utils_SRC CONFIGURE_DEPENDS ${react_utils_DIR}/*.cpp)
add_library(react_utils OBJECT ${react_utils_SRC})

target_include_directories(react_utils
        PUBLIC
          ${REACT_COMMON_DIR}
)

target_link_libraries(react_utils
        glog
        jsireact
        react_debug)
target_compile_reactnative_options(react_utils PRIVATE)
target_compile_options(react_utils PRIVATE -Wpedantic)
