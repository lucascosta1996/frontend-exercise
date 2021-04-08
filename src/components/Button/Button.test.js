import { render, screen, fireEvent } from '@testing-library/react';
import Button from '.';

test('renders button with "Test" label', () => {
  render(
    <Button
      label="Test"
    />
  );
  const linkElement = screen.getByText(/Test/i);
  expect(linkElement).toBeInTheDocument();
});

test('fire button click event', () => {
  const handleClick = jest.fn();

  render(
    <Button
      onClick={() => handleClick()}
      label="Click me"
    />
  );
  
  fireEvent.click(screen.getByText(/Click me/i));
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test('renders button with disabled style', () => {
  render(
    <Button
      disabled
      normal={false}
      label="Disabled"
    />
  );
  const linkElement = screen.getByText(/Disabled/i);
  expect(linkElement).toHaveStyle('background-color: transparent;');
  expect(linkElement).toHaveStyle('border-color: #8a96a0;');
  expect(linkElement).toHaveStyle('color: #0077FF;');
});

test('renders button with normal style', () => {
  render(
    <Button
      label="Normal"
    />
  );
  const linkElement = screen.getByText(/Normal/i);
  expect(linkElement).toHaveStyle('background-color: #0077FF;');
  expect(linkElement).toHaveStyle('color: #FFFFFF;');
});

test('renders button with transparent style', () => {
  render(
    <Button
      transparent
      label="Transparent"
    />
  );
  const linkElement = screen.getByText(/Transparent/i);
  expect(linkElement).toHaveStyle('background-color: transparent;');
  expect(linkElement).toHaveStyle('border-color: #0077FF;');
  expect(linkElement).toHaveStyle('color: #0077FF;');
});

test('renders button with width of 94px', () => {
  render(
    <Button
      label="Width 94px"
    />
  );
  const linkElement = screen.getByText(/Width 94px/i);
  expect(linkElement).toHaveStyle('width: 94px;');
});