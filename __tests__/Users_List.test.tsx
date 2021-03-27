import React from 'react'
import { render, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { MOCK_API_ONE_RESULT } from '../__mocks__/api_response'


import UsersList from '../src/components/users_list/Users_List'

const server = setupServer(
  rest.get('https://randomuser.me/api', (_, res, ctx) => {
    return res(ctx.json(MOCK_API_ONE_RESULT))
  }),
)
beforeAll(() => server.listen())

afterEach(() => {
  server.resetHandlers()
  server.restoreHandlers()
})

afterAll(() => server.close())





test('Should show heading "Users List" when there is data" ', async () => {
  const { findByText } = render(<UsersList />)
  expect(await findByText('Users List')).toBeInTheDocument()
})

test('Should show heading "Loading users list..."  while fetching data" ', () => {
  const { getByText } = render(<UsersList />)
  expect(getByText('Loading users list...')).toBeInTheDocument()
})

test('Should show nice error message if API returns server error (500)', async () => {
  server.use(
    rest.get('https://randomuser.me/api', (req, res, ctx) => {
      return res(ctx.status(500))
    })
  )
  
  const { findByText } = render(<UsersList />)
  expect(await findByText('There was an error loading the users list. Try again in a few minutes please😊')).toBeInTheDocument()
})