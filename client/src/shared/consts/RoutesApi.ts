export const RoutesApi = {
  DIALOGS: '/dialogs',
  MESSAGES: (dialogId: string) => `/messages/${dialogId}`,
  CREATE_MESSAGE: '/messages',
  LOGIN: '/login',
  ME: '/me',
}
