import { Test, TestingModule } from '@nestjs/testing';
import { OrganizationChartAdminController } from './organization-chart-admin.controller';
import { OrganizationChartAdminService } from './organization-chart-admin.service';

describe('OrganizationChartAdminController', () => {
  let controller: OrganizationChartAdminController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrganizationChartAdminController],
      providers: [OrganizationChartAdminService],
    }).compile();

    controller = module.get<OrganizationChartAdminController>(OrganizationChartAdminController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
