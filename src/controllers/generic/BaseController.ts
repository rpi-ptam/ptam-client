import { StateRegistry } from "../../registries/StateRegistry";
import { ServiceRegistry } from "../../registries/ServiceRegistry";
import { StoreRegistry } from "../../registries/StoreRegistry";
import { CacheRegistry } from "../../registries/CacheRegistry";

export class BaseController {

  protected stateRegistry: StateRegistry;
  protected serviceRegistry: ServiceRegistry;
  protected storeRegistry: StoreRegistry;
  protected cacheRegistry: CacheRegistry;

  constructor(stateRegistry: StateRegistry, serviceRegistry: ServiceRegistry, storeRegistry: StoreRegistry, cacheRegistry: CacheRegistry) {
    this.stateRegistry = stateRegistry;
    this.serviceRegistry = serviceRegistry;
    this.storeRegistry = storeRegistry;
    this.cacheRegistry = cacheRegistry;
  }

}