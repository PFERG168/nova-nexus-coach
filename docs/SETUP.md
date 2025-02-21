# Setup Instructions

1. **Project Structure Generation**:
   - Run the provided PowerShell script to generate the full project structure:
     ```powershell
     Set-ExecutionPolicy Bypass -Scope Process -Force
     .\create_project_structure.ps1
     ```

2. **Prerequisites**:
   - Node.js (latest LTS)
   - Java JDK (version 17+)
   - Maven
   - C++ Compiler (MSVC or equivalent)
   - MySQL Server
   - (Optional) Restart your PC if you added new environment variables.

3. **Database Setup**:
   - Import the `database/schema.sql` file into MySQL:
     ```sql
     SOURCE path/to/nova-nexus-coach/database/schema.sql;
     ```

4. **Building and Running Components**:
   - **Frontend**:
     ```bash
     cd nova-nexus-coach/frontend
     npm install
     npm start
     ```
     Access at [http://localhost:3000](http://localhost:3000)

   - **Node Backend**:
     ```bash
     cd nova-nexus-coach/backend/node
     npm install
     node server.js
     ```
     Endpoints available at [http://localhost:3000/api/...]

   - **Java Service**:
     ```bash
     cd nova-nexus-coach/backend/java-service
     mvn clean install
     mvn spring-boot:run
     ```
     Accessible at [http://localhost:8080/api/java-service/...]

   - **C++ Module**:
     ```powershell
     cd nova-nexus-coach/backend/cpp
     mkdir build
     cd build
     cmake ..
     cmake --build .
     .\hardware_info.exe
     ```
     This will output hardware data to the console.

5. **Debugging & Logs**:
   - Frontend debug utilities are in `frontend/src/debug/logger.js` and `DebugPanel.js`.
   - Node logs will be stored in `backend/node/logs/server.log` using `loggerUtil.js`.
   - Java service includes a `/debug` endpoint at `/api/java-service/debug`.

6. **Usage**:
   - Use the React frontend to interact with the application.
   - Test API endpoints with tools like Postman.
   - Monitor logs for debugging information.
   - If you get “package does not match the expected package,” ensure your `.java` files are in `...\java\com\aiapp\coach`.

---

## 2.2 Frontend (React)

### `frontend/package.json`

```json
{
  "name": "nova-nexus-coach-frontend",
  "version": "1.0.0",
  "description": "Frontend for NovaNexus Coach",
  "main": "index.js",
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "debug": "react-scripts start --debug"
  },
  "dependencies": {
    "axios": "^1.2.2",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1"
  }
}
