import { render, screen } from '@testing-library/react';
import List from '.';

test('renders component with given data', () => {
  const data = [
    { name: 'Test', message: { text: 'This is a message' }}
  ];
  render(
    <List data={data} />
  );

  const linkElement = screen.getByText(/This is a message/i);
  expect(linkElement).toBeInTheDocument();
});
