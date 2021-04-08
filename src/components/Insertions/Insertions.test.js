import { render, screen } from '@testing-library/react';
import Insertions from '.';

test('renders Insertions component with "insertions needed to complete"', () => {
  render(
    <Insertions />
  );
  const linkElement = screen.getByText(/insertions needed to complete/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders bar filled with grey color', () => {
  render(
    <Insertions />
  );
  const linkElement = screen.getByTestId('grey-bar');
  expect(linkElement).toHaveStyle('background-color: #c7cdd9;');
});

test('renders bar filled with blue color', () => {
  render(
    <Insertions />
  );
  const linkElement = screen.getByTestId('blue-bar');
  expect(linkElement).toHaveStyle('background-color: #0077ff;');
});