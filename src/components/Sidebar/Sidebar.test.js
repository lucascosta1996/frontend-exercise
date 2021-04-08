import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history'
import Sidebar from '.';

const links = [
  '/overview',
  '/chat',
  '/files',
  '/message',
  '/settings',
]

test('renders sidebar links', () => {
  const history = createMemoryHistory();
  history.push('/');
  render(
    <Router history={history}>
      <Sidebar />
    </Router>
  );
  links.forEach(link => {
    const linkElement = screen.getByTestId(link);
    expect(linkElement).toBeInTheDocument();
  });
});

test('renders 5 sidebar links', () => {
  const history = createMemoryHistory();
  history.push('/');
  render(
    <Router history={history}>
      <Sidebar />
    </Router>
  );
  const linkElement = document.querySelectorAll('a');
  expect(linkElement).toHaveLength(5);
});