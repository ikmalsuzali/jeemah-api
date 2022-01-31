import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";
import { PaginationArgs } from "src/common/pagination/pagination.dto";

export class GetEventDto extends PartialType(PaginationArgs) {
    @ApiProperty()
    @IsOptional()
    search?: string

    @ApiProperty()
    @IsOptional()
    event_rate_id?: string;

    @ApiProperty()
    @IsString()
    project_id: string;
}
