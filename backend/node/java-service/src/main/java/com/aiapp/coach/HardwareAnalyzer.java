package com.aiapp.coach;

import org.springframework.stereotype.Service;

@Service
public class HardwareAnalyzer {
    public String analyzeHardware(String hardwareData) {
        return "Hardware analysis complete for: " + hardwareData;
    }
}
