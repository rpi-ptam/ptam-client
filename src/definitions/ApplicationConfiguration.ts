export type ApplicationConfiguration = {
  service: {
    host: string,
    port?: number,
    secure: boolean
  },
  storage: {
    superKey: string
  }
}