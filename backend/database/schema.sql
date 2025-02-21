CREATE DATABASE IF NOT EXISTS game_coach_db;
USE game_coach_db;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    current_game VARCHAR(50),
    skill_level VARCHAR(50),
    last_training_date DATETIME,
    sensitivity_settings VARCHAR(255),
    hardware_specs TEXT
);

CREATE TABLE IF NOT EXISTS training_sessions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    session_date DATETIME,
    details TEXT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
