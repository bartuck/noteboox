import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, UsePipes } from '@nestjs/common';

import { DeleteNotebookDto } from '../../dto/notebook/delete.notebook.dto';
import { ValidationPipe } from '../../pipes/validation/validation.pipe';
import { NotebookService } from './service/notebook/notebook.service';
import { Notebook } from './entity/notebook.entity';
import { NotebookDto } from '../../dto/notebook/notebook.dto';

@Controller('notebook')
export class NotebookController {
  constructor(private notebookService: NotebookService) {
  }

  @Get()
  public async findAll(): Promise<Notebook[]> {
    return await this.notebookService.findAll();
  }

  @Get(':id')
  public async getById(@Param() params): Promise<Notebook> {
    const notebook = await this.notebookService.getById(params.id);

    if (!notebook) {
      throw new NotFoundException();
    }

    return notebook;
  }

  @Post()
  @UsePipes(ValidationPipe)
  public async create(@Body() notebookDto: NotebookDto): Promise<Notebook> {
    return await this.notebookService.create(notebookDto);
  }

  @Put()
  @UsePipes(ValidationPipe)
  public async update(@Body() notebookDto: NotebookDto): Promise<Notebook> {
    return await this.notebookService.update(notebookDto);
  }

  @Delete(':id')
  public async delete(@Param() params): Promise<DeleteNotebookDto> {
    return await this.notebookService.delete(params.id);
  }
}
