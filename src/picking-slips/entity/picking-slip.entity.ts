import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,OneToMany
} from 'typeorm';
import { PickingSlipDates } from './picking-slips-dates.entity';
import { PickingSlipItem } from './picking-slip-item.entity';

@Entity('picking_slips')
export class PickingSlip {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  order_id: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @OneToOne(() => PickingSlipDates, { eager: true }) 
  @JoinColumn({ name: 'picked_slip_id' }) 
  dates: PickingSlipDates;

  @OneToMany(() => PickingSlipItem, (item) => item.pickingSlip)
  items: PickingSlipItem[];
}
