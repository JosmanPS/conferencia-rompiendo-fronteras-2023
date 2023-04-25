import { LoginDTO } from '~~/lib/modules/users/dtos/loginDTO'
import { RecoverPasswordDTO } from '~~/lib/modules/users/dtos/RecoverPasswordDTO'
import { User } from '~~/lib/modules/users/models/User'
import { authService, userService } from '~~/lib/modules/users/services'

interface AuthStoreState {
  user: User | null
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthStoreState => ({
    user: null,
  }),

  actions: {
    setUser(user: User | null) {
      this.user = user
    },

    async login(dto: LoginDTO) {
      const response = await userService.login(dto.email, dto.password)

      if (response.isLeft()) {
        const error = response.value
        throw error
      }

      const data = response.value.getValue()

      const todayDate = new Date()
      const expDate = new Date()

      expDate.setDate(todayDate.getDate() + 5)

      const token = useCookie('token', { expires: expDate })
      token.value = data.token
      authService.setToken('access-token', data.token)

      this.setUser(data.user)

      return data.user
    },

    async sendRecoverPasswordMail(email: string): Promise<void> {
      const response = await userService.sendForgotPasswordMail(email)
      if (response.isLeft()) {
        const error = response.value
        throw error
      }
    },

    async getRecoverPasswordUser(recoverPasswordToken: string): Promise<User> {
      const response = await userService.getRecoverPasswordUser(
        recoverPasswordToken
      )

      if (response.isLeft()) {
        const error = response.value
        throw error
      }

      return response.value.getValue()
    },

    async recoverPassword(dto: RecoverPasswordDTO): Promise<void> {
      const response = await userService.recoverPassword(dto)
      if (response.isLeft()) {
        const error = response.value
        throw error
      }
    },

    logout() {
      const token = useCookie('token')
      token.value = null
      this.setUser(null)
      authService.removeToken('access-token')
    },
  },
})
