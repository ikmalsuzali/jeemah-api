import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateAttachmentDto {
    @ApiProperty()
    @IsString()
    originalName: string

    @ApiProperty()
    @IsString()
    filename: string

}
