// Simple logger for frontend debugging
export const log = (message) => {
  console.debug(`[DEBUG] ${new Date().toISOString()}: ${message}`);
};
