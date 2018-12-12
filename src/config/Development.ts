import { ApplicationConfiguration } from "../definitions/ApplicationConfiguration";

export const DevelopmentConfig: ApplicationConfiguration = {
  service: {
    host: "localhost",
    port: 8080,
    secure: false
  },
  storage: {
    superKey: "@RPI_PTAM"
  }
};