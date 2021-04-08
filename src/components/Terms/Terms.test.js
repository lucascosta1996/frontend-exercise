import { render, screen } from '@testing-library/react';
import Terms from '.';

test('renders component with loading state', () => {
  render(
    <Terms />
  );

  const linkElement = screen.getByText(/Loading/i);
  expect(linkElement).toBeInTheDocument();
});
