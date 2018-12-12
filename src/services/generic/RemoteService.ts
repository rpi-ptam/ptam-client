import bind from "bind-decorator";
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

import { ApplicationConfiguration } from "../../definitions/ApplicationConfiguration";

import { BaseService } from "./BaseService";
import { StoreRegistry } from "../../registries/StoreRegistry";

export class RemoteService extends BaseService {

  protected readonly storeRegistry: StoreRegistry;
  private readonly axiosInstance: AxiosInstance;

  constructor(appConfig: ApplicationConfiguration, storeRegistry: StoreRegistry) {
    super(appConfig);
    this.storeRegistry = storeRegistry;
    this.axiosInstance = axios.create();
    this.axiosInstance.interceptors.response.use(this.handleAxiosFulfilled, this.handleAxiosError);
  }

  protected getBackendUrl(): string {
    const { host, port, secure } = this.appConfig.service;
    const protocol = secure ? "https" : "http";
    return `${protocol}://${host}${port && `:${port}`}`;
  }

  @bind
  private handleAxiosFulfilled(response: AxiosResponse): AxiosResponse {
    if (!response.data.success) throw Error(response.data.error || "Request Failed");
    return response;
  }

  @bind
  private handleAxiosError(error: any): void {
    if (error.response && error.response.status === 401) {
      this.storeRegistry.authenticationStore.removeUser();
      window.location.href = "/login";
      return;
    }
    throw error;
  }

  protected async get(path: string, config?: AxiosRequestConfig): Promise<any> {
    const url = `${this.getBackendUrl()}/${path}`;
    const response = await this.axiosInstance.get(url, { ...config, withCredentials: true });
    return response.data;
  }


  protected async post(path: string, payload: any, config?: AxiosRequestConfig): Promise<any> {
    const url = `${this.getBackendUrl()}/${path}`;
    const response = await this.axiosInstance.post(url, payload, { ...config, withCredentials: true });
    return response.data;
  }

  protected async put(path: string, payload: any, config?: AxiosRequestConfig): Promise<any> {
    const url = `${this.getBackendUrl()}/${path}`;
    const response = await this.axiosInstance.put(url, payload, { ...config, withCredentials: true });
    return response.data;
  }

}