import { ApplicationConfiguration } from "../definitions/ApplicationConfiguration";

export const ProductionConfiguration: ApplicationConfiguration = {
  service: {
    host: "parking-tickets.rpi.edu",
    secure: true
  },
  storage: {
    superKey: "@RENSSELAER_PARKING_TICKET_APPEALS"
  }
};