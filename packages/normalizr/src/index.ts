import { denormalize } from './denormalize';
import { normalize } from './normalize';
import * as schema from './schema';
export type { EntitySchema } from './entities/Entity';
import Entity, { isEntity } from './entities/Entity';
import SimpleRecord from './entities/SimpleRecord';
export { default as FlatEntity } from './entities/FlatEntity';

export type {
  AbstractInstanceType,
  Schema,
  Normalize,
  NormalizeNullable,
  NormalizedIndex,
  NormalizeReturnType,
  NormalizedSchema,
  Denormalize,
  DenormalizeNullable,
  DenormalizeReturnType,
} from './types';

export { denormalize, schema, normalize, SimpleRecord, Entity, isEntity };
