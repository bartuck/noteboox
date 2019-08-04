import { NoteDto } from './note.dto';

export type DeleteNoteDto = Exclude<NoteDto, 'id'>;
