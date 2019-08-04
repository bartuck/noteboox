import { IsInt, IsNumberString, Length, Min, MinLength } from 'class-validator';

import { VALIDATION } from '../../config/validation.const';

export class NoteDto {
  readonly id: number;

  @Length(VALIDATION.NOTE.NAME.LENGTH.MIN, VALIDATION.NOTE.NAME.LENGTH.MAX)
  readonly name: string;

  @MinLength(VALIDATION.NOTE.NAME.LENGTH.MIN)
  readonly desc: string;

  @IsNumberString()
  readonly notebookId: number;
}
