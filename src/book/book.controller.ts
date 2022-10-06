import { validate } from 'class-validator';
import { BaseBookDTO, CreateBookDTO, GetBookDTO, UpdateBookDTO } from './book.dto';
import { ValidationError, validationOptions } from '../validator';

export class BookController {
  private async validate<BookDTO extends BaseBookDTO>(dto: BookDTO): Promise<void> {
    const errors = await validate(dto, validationOptions);

    if (errors.length > 0) {
      console.error(errors.flatMap(({ constraints }) => Object.values(constraints || {})).join('\n'));
      throw new ValidationError();
    }
  }

  async get(id: string): Promise<GetBookDTO> {
    console.log(id);

    return new GetBookDTO();
  }

  async getAll(): Promise<GetBookDTO[]> {
    return [new GetBookDTO()];
  }

  async create(createDTO: CreateBookDTO): Promise<GetBookDTO> {
    await this.validate(createDTO);

    console.log({ books: createDTO.books });

    return new GetBookDTO();
  }

  async update(updateDTO: UpdateBookDTO): Promise<GetBookDTO> {
    await this.validate(updateDTO);

    console.log({ id: updateDTO.id, books: updateDTO.books });

    return new GetBookDTO();
  }

  async delete(id: string): Promise<void> {
    console.log(id);

    return Promise.resolve();
  }
}
