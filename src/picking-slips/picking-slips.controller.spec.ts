import { Test, TestingModule } from '@nestjs/testing';
import { PickingSlipsController } from './picking-slips.controller';

describe('PickingSlipsController', () => {
  let controller: PickingSlipsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PickingSlipsController],
    }).compile();

    controller = module.get<PickingSlipsController>(PickingSlipsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
