import { v4 as uuid } from 'uuid';
import { BookController } from './book.controller';
import { ValidationError } from '../validator';

describe('BookController', () => {
  let bookController: BookController;
  beforeAll(() => {
    bookController = new BookController();
  });

  it('should fail when ID sent with the create request', () => {
    const createBookWithId = bookController.create({
      id: uuid(),
    } as any);

    expect(createBookWithId).rejects.toEqual(new ValidationError());
  });

  it('should fail when updatedAt sent with the create request', () => {
    const createBookWithId = bookController.create({
      updatedAt: new Date().toISOString(),
    } as any);

    expect(createBookWithId).rejects.toEqual(new ValidationError());
  });

  it('should fail when required attributes not sent with the create request', () => {
    const createBookWithId = bookController.create({} as any);

    expect(createBookWithId).rejects.toEqual(new ValidationError());
  });

  it('should pass when only base attributes sent with the create request', () => {
    const createBookWithId = bookController.create({
      books: [],
    } as any);

    expect(createBookWithId).rejects.toEqual(new ValidationError());
  });

  it('should fail when id attribute sent with the update request', () => {
    const createBookWithId = bookController.update({
      id: uuid(),
      books: [],
    } as any);

    expect(createBookWithId).rejects.toEqual(new ValidationError());
  });

  it('should fail when updatedAt attribute sent with the update request', () => {
    const createBookWithId = bookController.update({
      books: [],
      updatedAt: new Date().toISOString(),
    } as any);

    expect(createBookWithId).rejects.toEqual(new ValidationError());
  });

  it('should fail when required attributes not sent with the update request', () => {
    const createBookWithId = bookController.update({} as any);

    expect(createBookWithId).rejects.toEqual(new ValidationError());
  });

  it('should pass when only base attributes sent with the create request', () => {
    const createBookWithId = bookController.update({
      books: [],
    } as any);

    expect(createBookWithId).rejects.toEqual(new ValidationError());
  });
});
