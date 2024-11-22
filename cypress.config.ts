import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000", // 애플리케이션의 로컬 서버 URL
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
