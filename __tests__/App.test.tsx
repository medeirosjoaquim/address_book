import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from '../src/App'

test('renders a message', async () => {
  const { container, getByTitle } = await render(<App />)
  expect(getByTitle('Address book')).toBeInTheDocument()
})