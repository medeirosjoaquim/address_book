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

//Aaliyah Patel


test('Should only have users from Switzerland and United Kingdom when CH and UK are selected" ', async () => {
  render(<App />)
  const input = screen.getByLabelText("Some Label")
  const searchInput = screen.getByTestId('search-input')
  fireEvent.change(input, { target: { value: 'Aaliyah Patel' } })

})
