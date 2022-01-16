
export class CreateEventDto {
    name: string
    description?: string
    minute_duration: number
    event_rate_id?: string
    project_id: string
}
