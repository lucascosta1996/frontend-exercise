import { render, screen } from '@testing-library/react';
import Results from '.';

test('renders component with loading state', () => {
  render(
    <Results
      title="Test"
      type="ratingsByCategory"
    />
  );

  const linkElement = screen.getByText(/Loading/i);
  expect(linkElement).toBeInTheDocument();
});
