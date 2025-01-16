import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { PickingSlip } from './picking-slip.entity';

@Entity('picking_slips_items')
export class PickingSlipItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  is_pre_order: boolean;

  @ManyToOne(() => PickingSlip, (pickingSlip) => pickingSlip.items)
  pickingSlip: PickingSlip;
}
