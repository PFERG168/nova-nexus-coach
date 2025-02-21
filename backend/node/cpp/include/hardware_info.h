#ifndef HARDWARE_INFO_H
#define HARDWARE_INFO_H

#include <string>

// Returns the number of processors (cores) in the system.
int getNumberOfProcessors();

// Returns detailed information about the CPU using WMI.
std::string getCPUInfo();

// Returns detailed information about the GPU.
std::string getGPUInfo();

// Returns information about the connected monitor(s).
std::string getMonitorInfo();

// Returns details about the mouse.
std::string getMouseInfo();

#endif // HARDWARE_INFO_H
