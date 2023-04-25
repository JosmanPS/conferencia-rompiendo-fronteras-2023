import { CreateUserDTO } from "~~/lib/modules/users/dtos/CreateUserDTO";
import { UpdateUserDTO } from "~~/lib/modules/users/dtos/UpdateUserDTO";
import { User } from "~~/lib/modules/users/models/User";
import { userService } from "~~/lib/modules/users/services";

export const useUsersStore = defineStore('users', {
  actions: {
    async getAllUsers(): Promise<User[]> {
      const response = await userService.getAllUsers()

      if (response.isLeft()) {
        const error = response.value
        throw error
      }

      const data = response.value.getValue()

      return data.users
    },

    async createUser(dto: CreateUserDTO): Promise<void> {
      const response = await userService.createUser(dto)

      if (response.isLeft()) {
        const error = response.value
        throw error
      }
    },

    async updateUser(id: string, dto: UpdateUserDTO): Promise<void> {
      const response = await userService.updateUser(id, dto)
      if (response.isLeft()) {
        const error = response.value
        throw error
      }
    },

    async deleteUser(userId: string): Promise<void> {
      const response = await userService.deleteUser(userId)
      if (response.isLeft()) {
        const error = response.value
        throw error
      }
    }
  }
})
