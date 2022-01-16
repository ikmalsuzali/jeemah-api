export class CreateProjectDto {
  name: string
  registration_no?: string
  phone_number?: string
  email: string
  description: string
  address: {
    address_id: string
    address: string
    postcode?: string
    city_id: string
    longitude?: number
    latitude?: number
    project_id: string
  }
}
