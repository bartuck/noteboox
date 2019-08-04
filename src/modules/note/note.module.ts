import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Notebook } from '../notebook/entity/notebook.entity';

import { Note } from './entity/note.entity';
import { NoteController } from './note.controller';
import { NoteService } from './service/note/note.service';

@Module({
  imports: [TypeOrmModule.forFeature([Note, Notebook])],
  controllers: [NoteController],
  providers: [NoteService]
})
export class NoteModule {
}
