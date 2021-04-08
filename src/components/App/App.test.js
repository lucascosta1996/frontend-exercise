import { render, screen } from '@testing-library/react';
import App from '.';

test('renders Premium button', () => {
  render(<App />);
  const linkElement = screen.getByText(/Premium/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Data overview title', () => {
  render(<App />);
  const overviewTitle = screen.getByText(/Data overview/i);
  expect(overviewTitle).toBeInTheDocument();
});
