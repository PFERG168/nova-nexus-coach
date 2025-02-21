cmake_minimum_required(VERSION 3.10)
project(hardware_info)

set(CMAKE_CXX_STANDARD 17)

add_executable(hardware_info hardware_info.cpp)
target_include_directories(hardware_info PUBLIC include)
