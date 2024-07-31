import { faker } from '@faker-js/faker'

const users = [
  {
    firstName: 'John',
    lastName: 'Doe',
    id: '1',
    email: 'john@gmail.com',
  },
  {
    firstName: 'Tom',
    lastName: 'Kek',
    id: '2',
    email: 'tom@gmail.com',
  },
]

const dialogs = [
  {
    id: '1-d',
    author: users[0].id,
    partner: users[1].id,
  },
]

export const db = {
  users,
  dialogs,
  messages: [
    {
      id: faker.string.uuid(),
      text: 'First message',
      user: users[0].id,
      dialogId: dialogs[0].id,
    },
  ],
}
