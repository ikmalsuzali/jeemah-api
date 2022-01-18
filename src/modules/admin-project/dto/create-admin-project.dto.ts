import { ApiProperty } from "@nestjs/swagger";

export class CreateAdminProjectDto {
  @ApiProperty()
  user_id: string;

  @ApiProperty()
  project_ids: string[];
}
