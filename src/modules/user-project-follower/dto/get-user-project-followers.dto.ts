import { ApiProperty, PartialType } from "@nestjs/swagger"
import { IsOptional } from "class-validator"
import { PaginationArgs } from "src/common/pagination/pagination.dto"

export class GetUserProjectFollowerDto extends PartialType(PaginationArgs) {
    @ApiProperty()
    @IsOptional()
    user_id?: string

    @ApiProperty()
    @IsOptional()
    project_id?: string
}
