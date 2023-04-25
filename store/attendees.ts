import { CreateAttendeeDTO } from '~~/lib/modules/conference/dtos/CreateAttendeeDTO'
import { attendeesService } from '~~/lib/modules/conference/services'

export const useAttendeesStore = defineStore('attendees', {
  actions: {
    async createAttendee(dto: CreateAttendeeDTO): Promise<void> {
      const response = await attendeesService.createAttendee(dto)

      if (response.isLeft()) {
        throw response.value
      }
    },
  },
})
