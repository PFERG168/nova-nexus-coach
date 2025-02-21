package com.aiapp.coach;

import org.springframework.stereotype.Service;

@Service
public class AiManager {
    public String trainAIModel(String gameData) {
        return "AI model training complete for data: " + gameData;
    }

    public String generateTrainingPlan(String weaknesses) {
        return "Generated a personalized training plan to address: " + weaknesses;
    }
}
