import { SeatDTO } from '~~/lib/modules/seatRegister/domain/dtos/SeatDTO'
import { CreateSeatRequestDTO } from '~~/lib/modules/seatRegister/dtos/CreateSeatRequestDTO'
import { RemoveSeatOwnerDTO } from '~~/lib/modules/seatRegister/dtos/RemoveSeatOwnerDTO'
import { SetSeatOwnerDTO } from '~~/lib/modules/seatRegister/dtos/SetSeatOwnerDTO'
import { UpdateSeatDTO } from '~~/lib/modules/seatRegister/dtos/UpdateSeatDTO'
import { seatsService } from '~~/lib/modules/seatRegister/services'

export interface StandsStoreState {
  seats: SeatDTO[]
}

export const useStandsStore = defineStore('stands', {
  state: (): StandsStoreState => ({
    seats: [],
  }),

  actions: {
    async getAllSeats(): Promise<SeatDTO[]> {
      if (this.seats.length === 0) {
        await this.reloadSeats()
      }

      return this.seats
    },

    async reloadSeats(): Promise<SeatDTO[]> {
      const response = await seatsService.getAllSeats()

      if (response.isLeft()) {
        const error = response.value
        throw error
      }

      const seats = response.value.getValue().seats
      this.seats = seats
      return seats
    },

    async createSeat(): Promise<void> {
      const response = await seatsService.createSeat()

      if (response.isLeft()) {
        const error = response.value
        throw error
      }

      await this.reloadSeats()
    },

    async updateSeat(dto: UpdateSeatDTO): Promise<void> {
      const response = await seatsService.updateSeat(dto)

      if (response.isLeft()) {
        const error = response.value
        throw error
      }

      await this.reloadSeats()
    },

    async createSeatRequest(dto: CreateSeatRequestDTO): Promise<void> {
      const response = await seatsService.createSeatRequest(dto)

      if (response.isLeft()) {
        const error = response.value
        throw error
      }

      await this.reloadSeats()
    },

    async deleteSeat(seatId: string): Promise<void> {
      const response = await seatsService.deleteSeat(seatId)

      if (response.isLeft()) {
        const error = response.value
        throw error
      }

      await this.reloadSeats()
    },

    async setSeatOwner(dto: SetSeatOwnerDTO): Promise<void> {
      const response = await seatsService.setSeatOwner(dto)

      if (response.isLeft()) {
        const error = response.value
        throw error
      }
    },

    async removeSeatOwner(dto: RemoveSeatOwnerDTO): Promise<void> {
      const response = await seatsService.removeSeatOwner(dto)

      if (response.isLeft()) {
        const error = response.value
        throw error
      }
    },
  },
})
