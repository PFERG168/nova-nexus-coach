package com.aiapp.coach;

import org.springframework.stereotype.Service;

@Service
public class DebugService {
    public String runDiagnostics() {
        return "Java service diagnostics passed.";
    }
}
