import { ValueCache } from "../definitions/ValueCache";
import { ServiceRegistry } from "../registries/ServiceRegistry";

/**
 * Lots Cache
 * @author Aaron J. Shapiro <shapia4@rpi.edu>
 */
export class StatesCache extends ValueCache<string> {

  private readonly serviceRegistry: ServiceRegistry;

  constructor(serviceRegistry: ServiceRegistry) {
    super();
    this.serviceRegistry = serviceRegistry;
  }

  public async fill(): Promise<void> {
    const { statesService } = this.serviceRegistry;
    this.cache = await statesService.fetchStates();
  }

}