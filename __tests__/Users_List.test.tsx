import React from 'react'
import { render, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { rest } from 'msw'
import {setupServer} from 'msw/node'



import UsersList from '../src/components/users_list/Users_List'

const server = setupServer(
  rest.get('https://randomuser.me/api', (req, res, ctx) => {
    return res(ctx.json({greeting: 'hello there'}))
  }),
)

  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())


  test('Should show heading "loading..." while theres no data" ', async() => {
    render(<UsersList />)
    // server.use(
    //   rest.get('https://randomuser.me/api', (_, res, ctx) => {
    //     return res(ctx.json({loading: true}))
    //   })
    // )

 
    const heading = await screen.getByRole('heading')
    expect(heading).toHaveTextContent('loading...')
  })
  
  test.only('Should show heading "Users List" when there is data" ', async () => {
    render(<UsersList />)
    server.use(
      rest.get('https://randomuser.me/api', (_, res, ctx) => {
        return res(ctx.json({loading: true}))
      })
      )
      const heading = await screen.getByRole('heading')
    expect(heading).toHaveTextContent('Users List')
  })

  
