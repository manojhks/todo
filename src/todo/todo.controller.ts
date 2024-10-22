import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './todo.entity';
@Controller('todo')
export class TodoController {
  constructor(private readonly TodoService: TodoService) {}

  @Post()
  async create(@Body() data: Partial<Todo>) {
    return await this.TodoService.create(data);
  }

  @Get()
  async findAll(): Promise<Todo[]> {
    return await this.TodoService.findAll();
  }
  @Get(':id')
  async getUserById(@Param('id') id: number): Promise<Todo> {
    return await this.TodoService.findOne(id);
  }
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateData: Partial<Todo>,
  ): Promise<Todo> {
    return await this.TodoService.update(id, updateData);
  }
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<Todo> {
    return await this.TodoService.delete(id);
  }
}
