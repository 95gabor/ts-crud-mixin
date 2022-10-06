import { IsDateString, IsUUID } from 'class-validator';
import { decorate } from 'ts-mixer';

export class IdDTO {
  @decorate(IsUUID())
  id!: string;
}

export class UpdatedAtDTO {
  @decorate(IsDateString())
  updatedAt!: string;
}
