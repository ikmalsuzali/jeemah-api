class UserDto {
    name: string
    id?: string
    order?: Number
}

export class CreateOrganizationChartAdminDto {
    users: UserDto[]
}
