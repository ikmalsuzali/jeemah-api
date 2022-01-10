class UserDto {
    name: String
    id?: String
    order?: Number
}

export class CreateOrganizationChartAdminDto {
    users: UserDto[]
    project_id: String
}
