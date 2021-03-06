import { ApiProperty } from "@nestjs/swagger"
import { IsOptional } from "class-validator"

export class GetAdminProjectDto {
    @ApiProperty()
    @IsOptional()
    user_id?: string

    @ApiProperty()
    @IsOptional()
    project_id?: string
}
