import { IsOptional, IsString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger';
export class GetStateDto {
    @ApiProperty()
    @IsOptional()
    country_id?: String
}
