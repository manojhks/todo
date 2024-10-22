import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo) private readonly todoRepository: Repository<Todo>,
  ) {}
  async findAll(): Promise<Todo[]> {
    return await this.todoRepository.find();
  }

  async findOne(id: number): Promise<Todo> {
    return await this.todoRepository.findOneBy({ id: id });
  }
  async create(data: Partial<Todo>): Promise<Todo> {
    const entity = this.todoRepository.create(data);
    return await this.todoRepository.save(entity);
  }
  async update(id: number, data: Partial<Todo>): Promise<Todo> {
    await this.todoRepository.update(data.id, data);
    return await this.todoRepository.findOneById(id);
  }
  async delete(id: number): Promise<Todo> {
    await this.todoRepository.delete(id);
    return await this.todoRepository.findOneById(id);
  }
}
