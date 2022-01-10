import { Module } from '@nestjs/common';
import { OrganizationChartAdminService } from './organization-chart-admin.service';
import { OrganizationChartAdminController } from './organization-chart-admin.controller';

@Module({
  controllers: [OrganizationChartAdminController],
  providers: [OrganizationChartAdminService]
})
export class OrganizationChartAdminModule {}
