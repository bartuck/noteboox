import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { NoteDto } from '../../../../dto/note/note.dto';
import { Notebook } from '../../../notebook/entity/notebook.entity';
import { Note } from '../../entity/note.entity';

@Injectable()
export class NoteService {
  constructor(@InjectRepository(Note)
              private readonly repository: Repository<Note>,
              @InjectRepository(Notebook)
              private readonly notebookRepository: Repository<Notebook>) {
  }

  public findAll(): Promise<Note[]> {
    return this.repository.find();
  }

  public async getById(id: number): Promise<Note> {
    return await this.repository.findOne(id);
  }

  public async create(payload: NoteDto): Promise<Note> {
    const note = new Note();
    const notebook = await this.notebookRepository.findOne(payload.notebookId);

    note.name = payload.name;
    note.desc = payload.desc;

    if (!notebook) {
      throw new NotFoundException({
        "statusCode": 404,
        "error": "Not Found",
        "message": `Notebook with id ${payload.notebookId} not found`
      });
    }

    note.notebook = notebook;

    return this.repository.save(note);
  }

  public async update(payload: NoteDto): Promise<Note> {
    const note = await this.repository.findOne(payload.id);
    const notebook = await this.notebookRepository.findOne(payload.notebookId);

    note.name = payload.name;
    note.desc = payload.desc;

    if (!notebook) {
      throw new NotFoundException({
        "statusCode": 404,
        "error": "Not Found",
        "message": `Notebook with id ${payload.notebookId} not found`
      });
    }

    note.notebook = notebook;

    return this.repository.save(note);
  }

  public async delete(id: number): Promise<Note> {
    const note = await this.repository.findOne(id);

    if (!note) {
      throw new NotFoundException();
    }

    return this.repository.remove(note);
  }
}
