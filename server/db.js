import { faker } from '@faker-js/faker'

const users = [
  {
    firstName: 'John',
    lastName: 'Doe',
    id: faker.string.uuid(),
    email: 'john@gmail.com',
  },
  {
    firstName: 'Tom',
    lastName: 'Kek',
    id: faker.string.uuid(),
    email: 'tom@gmail.com',
  },
]

export const db = {
  users,
  dialogs: [
    {
      id: faker.string.uuid(),
      author: users[0].id,
      partner: users[1].id,
    },
  ],
  messages: [
    {
      id: faker.string.uuid(),
      text: 'First message',
      user: users[0].id,
    },
  ],
}
