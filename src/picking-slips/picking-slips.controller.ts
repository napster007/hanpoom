import { Controller, Get, Query } from '@nestjs/common';
import { PickingSlipsService } from './picking-slips.service';

@Controller('picking-slips')
export class PickingSlipsController {
  constructor(private readonly pickingSlipsService: PickingSlipsService) {}

  @Get()
  async getPickingSlips(
    @Query('status') status?: string,
    @Query('limit') limit = '10',
  ) {
    const parsedLimit = parseInt(limit, 10);
    return this.pickingSlipsService.findAll(status, parsedLimit);
  }
}
