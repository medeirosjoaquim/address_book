import React from 'react'
import { render, waitFor, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
//import userEvent from "@testing-library/user-event";

//import userEvent from "@testing-library/user-event";

// const { container, getByTitle } = await render(<App />)

import App from '../src/App'

test('App title must be set', async () => {
  render(<App />)
  const expectTitle = 'Address book'
  await waitFor(() => expect(document.title).toEqual(expectTitle));
});

test("Don't show settings if cog icon is not clicked", async() => {
  const { getByText } = render(<App />)
  expect(getByText('Settings')).toBeInTheDocument();
});

test("When cog icon is clicked it must show settings", async() => {
  const { getByText } = render(<App />)
  //const button = getByText('Button')
  const btn = screen.getByTestId('settings-btn')
  await fireEvent.click(btn)
  expect(getByText('Settings')).toBeInTheDocument();
});