import { ApiProperty, PartialType } from '@nestjs/swagger';
import { EventRateType } from '@prisma/client';
import {  IsOptional, IsString } from 'class-validator';
import { PaginationArgs } from 'src/common/pagination/pagination.dto';

export class GetEventRateDto extends PartialType(PaginationArgs) {
    @ApiProperty()
    @IsOptional()
    search?: string

    @ApiProperty()
    @IsOptional()
    rate_amount_min?: number

    @ApiProperty()
    @IsOptional()
    rate_amount_max?: number

    @ApiProperty({enum: EventRateType})
    @IsOptional()
    event_rate_type?: EventRateType

    @ApiProperty()
    @IsOptional()
    event_id?: string

    @ApiProperty()
    @IsString()
    project_id: string
}
