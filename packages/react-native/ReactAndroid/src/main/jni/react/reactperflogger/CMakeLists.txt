# Copyright (c) Meta Platforms, Inc. and affiliates.
#
# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.

cmake_minimum_required(VERSION 3.13)
set(CMAKE_VERBOSE_MAKEFILE on)

include(${REACT_COMMON_DIR}/cmake-utils/react-native-flags.cmake)

add_library(reactperfloggerjni INTERFACE)

target_include_directories(reactperfloggerjni
        INTERFACE
          ${CMAKE_CURRENT_SOURCE_DIR}
)

target_link_libraries(reactperfloggerjni
        INTERFACE
        fbjni
        android
        reactperflogger)

target_compile_reactnative_options(reactperfloggerjni INTERFACE)
