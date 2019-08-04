import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotebookController } from './notebook.controller';
import { Notebook } from "./entity/notebook.entity";
import { NotebookService } from './service/notebook/notebook.service';


@Module({
  imports: [TypeOrmModule.forFeature([Notebook])],
  controllers: [NotebookController],
  providers: [NotebookService]
})
export class NotebookModule {}
