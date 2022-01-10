import { Test, TestingModule } from '@nestjs/testing';
import { OrganizationChartAdminService } from './organization-chart-admin.service';

describe('OrganizationChartAdminService', () => {
  let service: OrganizationChartAdminService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrganizationChartAdminService],
    }).compile();

    service = module.get<OrganizationChartAdminService>(OrganizationChartAdminService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
