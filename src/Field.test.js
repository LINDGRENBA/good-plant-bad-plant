import { render, screen } from '@testing-library/react';
import Field from './Field';

test('renders learn react link', () => {
  render(<Field />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
