-- Create the database if it doesn't exist
IF NOT EXISTS (SELECT name FROM sys.databases WHERE name = N'game_coach_db')
BEGIN
    CREATE DATABASE game_coach_db;
END;
GO

USE game_coach_db;
GO

-- Create the 'users' table if it doesn't exist
IF NOT EXISTS (SELECT * FROM sys.tables WHERE name = 'users')
BEGIN
    CREATE TABLE users (
        id INT IDENTITY(1,1) PRIMARY KEY,
        username VARCHAR(50) NOT NULL,
        current_game VARCHAR(50),
        skill_level VARCHAR(50),
        last_training_date DATETIME,
        sensitivity_settings VARCHAR(255),
        hardware_specs VARCHAR(MAX)
    );
END;
GO

-- Create the 'training_sessions' table if it doesn't exist
IF NOT EXISTS (SELECT * FROM sys.tables WHERE name = 'training_sessions')
BEGIN
    CREATE TABLE training_sessions (
        id INT IDENTITY(1,1) PRIMARY KEY,
        user_id INT,
        session_date DATETIME,
        details VARCHAR(MAX),
        CONSTRAINT FK_training_sessions_users FOREIGN KEY (user_id) REFERENCES users(id)
    );
END;
GO
