"use strict";

import {observable} from "mobx";

/**
 * Values are UQ
 * @author Aaron J. Shapiro <shapia4@rpi.edu>
 */
export abstract class ValueCache<V> {

  @observable
  protected cache: Array<V> | undefined;

  abstract fill(): Promise<void> | void;

  public get length(): number {
    return this.cache ? this.cache.length : 0;
  }

  public async values(): Promise<Array<V>> {
    if (!this.cache) await this.fill();
    if (!this.cache) throw Error("cache has not been filled");
    return this.cache;
  }

  public flush(): void {
    this.cache = undefined;
  }

}