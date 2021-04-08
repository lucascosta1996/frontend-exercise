import { render, screen } from '@testing-library/react';
import initialData from '../../mockAPI/initialData';
import Table from '.';

test('renders table with given header values', () => {
  const tableHeader = ['NAME', 'EMAIL', 'TIME', 'PHONE', 'CITY', 'STATUS'];
  render(
    <Table
      header={tableHeader}
    />
  );
  tableHeader.forEach(headerEl => {
    const linkElement = screen.getByText(headerEl);
    expect(linkElement).toBeInTheDocument();
  })
});

test('renders table with given data values', () => {
  render(
    <Table
      data={initialData.supportRequests}
    />
  );
  initialData.supportRequests.forEach(dataEl => {
    const linkElement = screen.getByText(dataEl.name);
    expect(linkElement).toBeInTheDocument();
  })
});
