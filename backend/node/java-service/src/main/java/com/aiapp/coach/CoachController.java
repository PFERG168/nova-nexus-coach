package com.aiapp.coach;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/java-service")
public class CoachController {

    @Autowired private AiManager aiManager;
    @Autowired private HardwareAnalyzer hardwareAnalyzer;
    @Autowired private GameDataManager gameDataManager;
    @Autowired private DebugService debugService;

    @PostMapping("/train")
    public String trainAI(@RequestBody String gameData) {
        return aiManager.trainAIModel(gameData);
    }

    @PostMapping("/analyzeHardware")
    public String analyzeHardware(@RequestBody String hardwareData) {
        return hardwareAnalyzer.analyzeHardware(hardwareData);
    }

    @PostMapping("/analyzeGame")
    public String analyzeGame(@RequestBody String game) {
        return gameDataManager.analyzeGameData(game);
    }

    @GetMapping("/debug")
    public String debug() {
        return debugService.runDiagnostics();
    }
}
