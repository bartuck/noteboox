import { NotebookDto } from "./notebook.dto";

export type DeleteNotebookDto = Exclude<NotebookDto, 'id'>;
