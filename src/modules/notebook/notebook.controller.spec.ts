import { Test, TestingModule } from '@nestjs/testing';
import { NotebookController } from './notebook.controller';

describe('Notebook Controller', () => {
  let controller: NotebookController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NotebookController],
    }).compile();

    controller = module.get<NotebookController>(NotebookController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
