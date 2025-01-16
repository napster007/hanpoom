import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('picking_slip_dates')
export class PickingSlipDates {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp', nullable: true })
  printed_at: Date;

  @Column({ type: 'timestamp', nullable: true })
  inspected_at: Date;

  @Column({ type: 'timestamp', nullable: true })
  shipped_at: Date;

  @Column({ type: 'timestamp', nullable: true })
  held_at: Date;
}
