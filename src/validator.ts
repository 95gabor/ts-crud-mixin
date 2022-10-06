import { ValidatorOptions } from 'class-validator';

export const validationOptions: ValidatorOptions = { forbidUnknownValues: true };

export const validationErrorMessage = 'Validation Error';

export class ValidationError extends Error {
  constructor() {
    super(validationErrorMessage);
  }
}
