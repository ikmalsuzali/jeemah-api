import { ApiProperty } from "@nestjs/swagger"
import { IsArray, IsString } from "class-validator"

export class CreateUserProjectFollowerDto {
    @ApiProperty()
    @IsString()
    user_id: string

    @ApiProperty()
    @IsArray()
    project_ids: string[]
}
