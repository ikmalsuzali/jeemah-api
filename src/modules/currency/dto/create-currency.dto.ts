import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
export class CreateCurrencyDto {
    @ApiProperty()
    @IsString()
    code: string

    @ApiProperty()
    @IsString()
    symbol: string

    @ApiProperty()
    @IsString()
    name: string

    
}
