import { ApiProperty } from "@nestjs/swagger"
import { IsOptional, IsString } from "class-validator"

export class CreatePostCategoryDto {
    @ApiProperty()
    @IsString()
    name: string

    @ApiProperty()
    @IsOptional()
    description?: string

    @ApiProperty()
    @IsOptional()
    fallback_image?: string

    @ApiProperty()
    @IsString()
    project_id: string
}
