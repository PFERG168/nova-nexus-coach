#include <iostream>
#include <Windows.h>
#include "include/hardware_info.h"

int main() {
    SYSTEM_INFO sysInfo;
    GetSystemInfo(&sysInfo);

    std::cout << "Hardware Info Collector" << std::endl;
    std::cout << "Number of processors: " << sysInfo.dwNumberOfProcessors << std::endl;
    std::cout << "Mouse DPI: 800" << std::endl;
    std::cout << "Polling Rate: 1000 Hz" << std::endl;
    std::cout << "Surface: ARTISAN" << std::endl;

    return 0;
}
