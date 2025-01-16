import { Test, TestingModule } from '@nestjs/testing';
import { PickingSlipsService } from './picking-slips.service';

describe('PickingSlipsService', () => {
  let service: PickingSlipsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PickingSlipsService],
    }).compile();

    service = module.get<PickingSlipsService>(PickingSlipsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
