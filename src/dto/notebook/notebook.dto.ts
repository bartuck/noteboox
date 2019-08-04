import { Length } from 'class-validator';

import { VALIDATION } from '../../config/validation.const';

export class NotebookDto {
    readonly id: number;

  @Length(VALIDATION.NOTEBOOK.NAME.LENGTH.MIN, VALIDATION.NOTE.NAME.LENGTH.MAX)
    readonly name;
}
