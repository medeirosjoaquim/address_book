import React from 'react'
import { render, waitFor, screen, fireEvent, getNodeText } from '@testing-library/react'
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


test('Should only have users from Switzerland when CH is selected on settings" ', async () => {
  const { findAllByTestId } = render(<App />)
  const settingsBtn = screen.getByTestId('settings-btn')
  fireEvent.click(settingsBtn)
  const chNationality = screen.getByTestId('settings-option-CH')
  fireEvent.click(chNationality)
  fireEvent.click(settingsBtn)
  const usersNationalities = await findAllByTestId('user-row-country')
  const nationalitiesArray: string[] = [];
  usersNationalities.forEach(element => {
    nationalitiesArray.push(getNodeText(element))
  });
  const [filteredNationalityCountry] = Array.from(new Set(nationalitiesArray))
  expect(filteredNationalityCountry).toEqual('Switzerland')
})

test('Should only have users from Switzerland and United Kingdom when CH and UK are selected" ', async () => {
  const { findAllByTestId } = render(<App />)
  const settingsBtn = screen.getByTestId('settings-btn')
  fireEvent.click(settingsBtn)
  const chNationality = screen.getByTestId('settings-option-CH')
  const gbNationality = screen.getByTestId('settings-option-GB')
  fireEvent.click(gbNationality)
  fireEvent.click(chNationality)
  //fireEvent.click(settingsBtn)
  const usersNationalities = await findAllByTestId('user-row-country')
  const nationalitiesArray: string[] = [];
  usersNationalities.forEach(element => {
    nationalitiesArray.push(getNodeText(element))
  });

  const filteredNationalityCountry = Array.from(new Set(nationalitiesArray))
  expect(filteredNationalityCountry).toEqual(["United Kingdom", "Switzerland"])
})
