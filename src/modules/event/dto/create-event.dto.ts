import { ApiProperty } from "@nestjs/swagger"
import { IsNumber, IsOptional, IsString } from "class-validator"

export class CreateEventDto {
    @ApiProperty()
    @IsString()
    name: string

    @ApiProperty()
    @IsOptional()
    description?: string

    @ApiProperty()
    @IsNumber()
    minute_duration: number

    @ApiProperty()
    @IsOptional()
    event_rate_id?: string

    @ApiProperty()
    @IsString()
    project_id: string
}
