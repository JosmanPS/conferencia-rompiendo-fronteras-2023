export const useNotificationsStore = defineStore('notifications', {
  state: () => ({
    showErrorNotification: false,
    errorMessage: '',
    showSuccessNotification: false,
    successMessage: '',
  }),

  actions: {
    showErrorMessage(message: string) {
      this.errorMessage = message
      this.showErrorNotification = true
    },

    showSuccessMessage(message: string) {
      this.successMessage = message
      this.showSuccessNotification = true
    },
  },
})
