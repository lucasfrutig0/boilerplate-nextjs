import { render, screen } from '@testing-library/react'

import Main from '.'

// Descrição do test
describe('<Main />', () => {
  //início dos testes
  it('should render the heading', () => {
    render(<Main />)

    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()
  })
})
