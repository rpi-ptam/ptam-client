import { StateRegistry } from "../registries/StateRegistry";
import { ControllerRegistry } from "../registries/ControllerRegistry";
import { CacheRegistry } from "../registries/CacheRegistry";

export type PageDependencies = {
  controllerRegistry: ControllerRegistry,
  stateRegistry: StateRegistry,
  cacheRegistry: CacheRegistry
}