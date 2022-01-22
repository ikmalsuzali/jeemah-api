import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
export class GetCurrencyDto {
    @ApiProperty()
    @IsOptional()
    search: string


    
}
