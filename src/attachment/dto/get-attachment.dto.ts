import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsString } from "class-validator";
import { PaginationArgs } from "src/common/pagination/pagination.dto";

export class GetAttachmentDto extends PartialType(PaginationArgs) {
    @ApiProperty()
    @IsString()
    search?: string
    
    @ApiProperty()
    @IsString()
    post_attachment_id?: string

    @ApiProperty()
    @IsString()
    post_image_id?: string

    @ApiProperty()
    @IsString()
    project_logo_id?: string

    @ApiProperty()
    @IsString()
    project_image_id?: string
    
    @ApiProperty()
    @IsString()
    booking_image_id?: string
    
    @ApiProperty()
    @IsString()
    booking_attachment_id?: string
}
