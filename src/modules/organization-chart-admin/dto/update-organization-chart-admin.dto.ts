import { PartialType } from '@nestjs/swagger';
import { CreateOrganizationChartAdminDto } from './create-organization-chart-admin.dto';

export class UpdateOrganizationChartAdminDto extends PartialType(CreateOrganizationChartAdminDto) {}
