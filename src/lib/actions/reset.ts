import { EntityActionType, generateActionObject } from '../internal';
import { EntityState } from '../entity-state';
import { Type } from '@angular/core';

export class Reset {
  /**
   * Resets the targeted store to the default state: no entities, loading is false, error is undefined, active is undefined.
   * @param target The targeted state class
   * @see defaultEntityState
   */
  constructor(target: Type<EntityState<any>>) {
    return generateActionObject(EntityActionType.reset, target);
  }
}
