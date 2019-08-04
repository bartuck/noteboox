import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { VALIDATION } from '../../../config/validation.const';
import { Note } from '../../note/entity/note.entity';

@Entity()
export class Notebook {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: VALIDATION.NOTEBOOK.NAME.LENGTH.MAX
  })
  name: string;

  @OneToMany(type => Note, note => note.notebook)
  notes: Note[];
}
