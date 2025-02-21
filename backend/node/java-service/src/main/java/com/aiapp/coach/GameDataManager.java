package com.aiapp.coach;

import org.springframework.stereotype.Service;

@Service
public class GameDataManager {
    public String analyzeGameData(String game) {
        return "Game Data Analyzed for: " + game;
    }

    public String optimizeSettings(String userSpecs) {
        return "Optimized settings for user specs: " + userSpecs;
    }
}
