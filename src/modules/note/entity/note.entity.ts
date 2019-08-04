import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { VALIDATION } from '../../../config/validation.const';
import { Notebook } from '../../notebook/entity/notebook.entity';

@Entity()
export class Note {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: VALIDATION.NOTE.NAME.LENGTH.MAX
  })
  name: string;

  @Column('text')
  desc: string;

  @ManyToOne(type => Notebook, notebook => notebook.notes)
  notebook: Notebook;
}
