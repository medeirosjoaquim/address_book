import React from 'react'
import { render, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { MOCK_API_ONE_RESULT } from '../__mocks__/api_response'


import UsersList from '../src/components/users_list/Users_List'

const server = setupServer(
  rest.get('https://randomuser.me/api', (req, res, ctx) => {
    return res(ctx.json(MOCK_API_ONE_RESULT))
  }),
)
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())


test('Should show heading "Users List" when there is data" ', async () => {
  const { findByText } = render(<UsersList />)
  server.use(
    rest.get('https://randomuser.me/api', (_, res, ctx) => {
      return res(ctx.json(MOCK_API_ONE_RESULT))
    })
  )
  expect(await findByText('Users List')).toBeInTheDocument()
})

test('Should show heading "Loading users list..." when there is data" ', () => {
  const { getByText } = render(<UsersList />)
  server.use(
    rest.get('https://randomuser.me/api', (_, res, ctx) => {
      return res(ctx.json(MOCK_API_ONE_RESULT))
    })
  )
  expect(getByText('Loading users list...')).toBeInTheDocument()
})