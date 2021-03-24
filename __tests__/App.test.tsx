import React from 'react'
import { render, waitFor, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

import App from '../src/App'
import UsersList from '../src/components/users_list/Users_List'

test('App title must be set', async () => {
  render(<App />)
  const expectTitle = 'Address book'
  await waitFor(() => expect(document.title).toEqual(expectTitle));
});

test('App should render main components', () => {
  render(<App />)
  const usersListComponent = screen.getByTestId('users-list')
  const searchComponent = screen.getByTestId('search')
  const navBarComponent = screen.getByTestId('navbar')
  const settingsBtn = screen.getByTestId('settings-btn')
  expect(usersListComponent).toBeInTheDocument()
  expect(searchComponent).toBeInTheDocument()
  expect(navBarComponent).toBeInTheDocument()
  expect(settingsBtn).toBeInTheDocument()
});

test("Should not show settings if cog icon is not clicked", async() => {
  const { getByText } = render(<App />)
    expect(getByText('Settings')).toBeInTheDocument();
});

test("should show settings when cog icon is clicked it ", async() => {
  const { getByText } = render(<App />)
  const settingsBtn = screen.getByTestId('settings-btn')
  await fireEvent.click(settingsBtn)
  expect(getByText('Settings')).toBeInTheDocument();
});


// const server = setupServer(
//   // capture "GET /greeting" requests
//   rest.get('https://randomuser.me/api/?seed=sherpany&results=50', (req, res, ctx) => {
//     // respond using a mocked JSON body
//     //return res(ctx.json({ greeting: 'hello there' }))
//     //status    data  error
//     return res(ctx.json({ status: 'fetching', data: [], error: '' }))
//   })
// )


test('Should show "loading..." when request status is "fetching" ', async () => {
  const serverFetching = setupServer(
    rest.get('/api/', (_, res, ctx) => {
      return res(ctx.json({ status: 'fetching', data: [], error: '' }))
    })
  )
  beforeAll(() => serverFetching.listen())
  afterEach(() => serverFetching.resetHandlers())
  afterAll(() => serverFetching.close())
  render(<UsersList />)
  expect(screen.getByRole('heading')).toHaveTextContent('loading...')
})
