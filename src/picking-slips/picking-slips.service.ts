import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PickingSlip } from './entity/picking-slip.entity';

@Injectable()
export class PickingSlipsService {
  constructor(
    @InjectRepository(PickingSlip)
    private pickingSlipsRepository: Repository<PickingSlip>,
  ) {}

  async findAll(status?: string, limit = 10): Promise<any[]> {
    let sql = `
    SELECT 
      ps.order_id, 
      ps.id AS picking_slip_id, 
      ps.created_at, 
      item.*, 
      dates.* 
    FROM 
      picking_slips ps
    LEFT JOIN 
      picking_slips_items item ON item.picking_slip_id = ps.id
    LEFT JOIN 
      picking_slip_dates dates ON dates.picking_slip_id = ps.id
  `;

    // Add status-based filtering
    if (status) {
      if (status === 'not printed') {
        sql += ` WHERE dates.printed_at IS NULL`;
      } else if (status === 'printed') {
        sql += ` WHERE dates.printed_at IS NOT NULL AND dates.inspected_at IS NULL `;
      } else if (status === 'held') {
        sql += ` WHERE dates.held_at IS NULL`;
      }
    }

    sql += ` ORDER BY ps.created_at DESC LIMIT ${limit}`;

    // Execute the query
    const results = await this.pickingSlipsRepository.query(sql);

    return results.map((slip) => ({
      order_id: slip.order_id,
      picking_slip_id: slip.picking_slip_id,
      picking_slip_status: this.getSlipStatus(slip),
      has_pre_order_item:
        slip.items &&
        slip.items.some((item: { is_pre_order: any }) => item.is_pre_order),
    }));
  }

  private getSlipStatus(slip: PickingSlip): string {
    const { dates } = slip;

    if (dates?.held_at) return 'held';
    if (dates?.printed_at && !dates?.inspected_at && !dates?.shipped_at)
      return 'printed';
    return 'not printed';
  }
}
