import { IsString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger';
export class GetStateDto {
    @ApiProperty()
    @IsString()
    country_id: String
}
