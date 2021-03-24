import React from 'react'
import { render, waitFor, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'


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

// test('Should show "loading..." when request status is "fetching" ', async () => {
//   render(<UsersList />)
//   //await waitFor(() => screen.getByRole('heading'))
//   expect(screen.getByRole('heading')).toHaveTextContent('loading...')
// })

test('Should show "aaa..." when request status is "fetched" ', async () => {
  render(<UsersList />)
  console.log()
  const AAA = await waitFor(() => screen.getByRole('heading'))
  expect(AAA).toHaveTextContent('hello there')
})
