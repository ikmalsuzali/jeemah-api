
import { ApiProperty } from '@nestjs/swagger'
import { IsEnum } from 'class-validator'
import { OrganizationPersonType } from 'prisma'
class UserDto {
    name: string
    id?: string
    order?: number
}

export class CreateOrganizationChartAdminDto {
    users: UserDto[]
    @ApiProperty({enum: OrganizationPersonType})
    @IsEnum(OrganizationPersonType)
    organization_person_type: OrganizationPersonType
}
