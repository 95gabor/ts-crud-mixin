import { IsArray } from 'class-validator';
import { Mixin } from 'ts-mixer';
import { IdDTO, UpdatedAtDTO } from '../general.types';

export class BaseBookDTO {
  @IsArray()
  books!: any[];
}

export class GetBookDTO extends Mixin(BaseBookDTO, IdDTO, UpdatedAtDTO) {}
export class CreateBookDTO extends BaseBookDTO {}
export class UpdateBookDTO extends Mixin(BaseBookDTO, IdDTO) {}
