import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from '../src/App'

test('renders a message', () => {
  const { container, getByText } = render(<App />)
  expect(getByText('hello, world!')).toBeInTheDocument()
})