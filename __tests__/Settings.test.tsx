import React from 'react'
import { render, waitFor, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { MOCK_API_RESULTS } from '../__mocks__/api_response'

import App from '../src/App'

const server = setupServer(
  rest.get('https://randomuser.me/api', (_, res, ctx) => {
    return res(ctx.json(MOCK_API_RESULTS))
  }),
)
beforeAll(() => server.listen())

afterEach(() => {
  server.resetHandlers()
  server.restoreHandlers()
})

afterAll(() => server.close())

test('Should all nationality settings checkbox when click on settings button" ', async () => {
  const { getByText } = render(<App />)
  const settingsBtn = screen.getByTestId('settings-btn')
  fireEvent.click(settingsBtn)
  const chNationality = screen.getByTestId('settings-option-CH')
  const esNationality = screen.getByTestId('settings-option-ES')
  const frNationality = screen.getByTestId('settings-option-FR')
  const gbNationality = screen.getByTestId('settings-option-GB')
  const deNationality = screen.getByTestId('settings-option-DE')
  const brNationality = screen.getByTestId('settings-option-BR')
  const settings = getByText('Settings')
  expect(settings).toBeInTheDocument()
  expect(chNationality).toBeInTheDocument()
  expect(esNationality).toBeInTheDocument()
  expect(frNationality).toBeInTheDocument()
  expect(gbNationality).toBeInTheDocument()
  expect(deNationality).toBeInTheDocument()
  expect(brNationality).toBeInTheDocument()
})


test('Should show only Swiss people when CH is selected on settings" ', async () => {
  const { findByText, findAllByTestId } = render(<App />)
  const settingsBtn = screen.getByTestId('settings-btn')
  fireEvent.click(settingsBtn)
  const chNationality = screen.getByTestId('settings-option-CH')
  fireEvent.click(chNationality)
  fireEvent.click(settingsBtn)
  const usersNationalities = await findAllByTestId('user-row-country')
  console.log(usersNationalities)
  usersNationalities.forEach(element => {
    console.log(element.children.item)
  });
  //expect(usersNationalities).toBeInTheDocument()
  expect(await findByText('Users List')).toBeInTheDocument()
})
