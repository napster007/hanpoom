import { Module } from '@nestjs/common';
import { PickingSlipsService } from './picking-slips.service';
import { PickingSlipsController } from './picking-slips.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { PickingSlip } from './entity/picking-slip.entity';
import { PickingSlipDates } from './entity/picking-slips-dates.entity';
import { PickingSlipItem } from './/entity/picking-slip-item.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([PickingSlip, PickingSlipDates, PickingSlipItem]),
  ],
  providers: [PickingSlipsService],
  controllers: [PickingSlipsController],
})
export class PickingSlipsModule {}
