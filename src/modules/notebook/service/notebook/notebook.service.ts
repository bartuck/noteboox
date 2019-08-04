import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Notebook } from '../../entity/notebook.entity';
import { NotebookDto } from '../../../../dto/notebook/notebook.dto';

@Injectable()
export class NotebookService {
  constructor(@InjectRepository(Notebook)
              private readonly repository: Repository<Notebook>) {

  }

  public findAll(): Promise<Notebook[]> {
    return this.repository.find();
  }

  public async getById(id: number): Promise<Notebook> {
    return await this.repository.findOne(id);
  }

  public create(payload: NotebookDto): Promise<Notebook> {
    const notebook = new Notebook();

    notebook.name = payload.name;

    return this.repository.save(notebook);
  }

  public async update(payload: NotebookDto): Promise<Notebook> {
    const notebook = await this.repository.findOne(payload.id);

    notebook.name = payload.name;

    return this.repository.save(notebook);
  }

  public async delete(id: number): Promise<Notebook> {
    const notebook = await this.repository.findOne(id);

    if (!notebook) {
      throw new NotFoundException();
    }

    return this.repository.remove(notebook);
  }
}
