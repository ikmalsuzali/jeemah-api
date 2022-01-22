class UserDto {
    name: string
    id?: string
    order?: number
}

export class CreateOrganizationChartAdminDto {
    users: UserDto[]
}
