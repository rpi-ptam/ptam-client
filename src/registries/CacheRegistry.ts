import { ServiceRegistry } from "./ServiceRegistry";
import { LotsCache } from "../caches/LotsCache";
import { StatesCache } from "../caches/StatesCache";
import { VerdictsCache } from "../caches/VerdictsCache";
import { ViolationsTypesCache } from "../caches/ViolationsTypesCache";

export class CacheRegistry {

  public readonly lotsCache: LotsCache;
  public readonly statesCache: StatesCache;
  public readonly verdictsCache: VerdictsCache;
  public readonly violationTypesCache: ViolationsTypesCache;

  constructor(serviceRegistry: ServiceRegistry) {
    this.lotsCache = new LotsCache(serviceRegistry);
    this.statesCache = new StatesCache(serviceRegistry);
    this.verdictsCache = new VerdictsCache(serviceRegistry);
    this.violationTypesCache = new ViolationsTypesCache(serviceRegistry);
  }

}