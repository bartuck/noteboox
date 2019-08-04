import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotebookModule } from './modules/notebook/notebook.module';
import { NoteModule } from './modules/note/note.module';


@Module({
  imports: [
    TypeOrmModule.forRoot(),
    NotebookModule,
    NoteModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
