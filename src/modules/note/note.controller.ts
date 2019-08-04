import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, UsePipes } from '@nestjs/common';

import { DeleteNoteDto } from '../../dto/note/delete-note.dto';
import { NoteDto } from '../../dto/note/note.dto';
import { ValidationPipe } from '../../pipes/validation/validation.pipe';
import { Note } from './entity/note.entity';
import { NoteService } from './service/note/note.service';

@Controller('note')
export class NoteController {
  constructor(private noteService: NoteService) {
  }

  @Get()
  public async findAll(): Promise<Note[]> {
    return await this.noteService.findAll();
  }

  @Get(':id')
  public async getById(@Param() params): Promise<Note> {
    const note = await this.noteService.getById(params.id);

    if (!note) {
      throw new NotFoundException();
    }

    return note;
  }

  @Post()
  @UsePipes(ValidationPipe)
  public async create(@Body() noteDto: NoteDto): Promise<Note> {
    return await this.noteService.create(noteDto);
  }

  @Put()
  @UsePipes(ValidationPipe)
  public async update(@Body() noteDto: NoteDto): Promise<Note> {
    return await this.noteService.update(noteDto);
  }

  @Delete(':id')
  public async delete(@Param() params): Promise<Note> {
    return await this.noteService.delete(params.id);
  }
}
