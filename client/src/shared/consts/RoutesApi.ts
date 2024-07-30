export const RoutesApi = {
  DIALOGS: '/dialogs',
  MESSAGES: (dialogId: string) => `/messages/${dialogId}`,
}
