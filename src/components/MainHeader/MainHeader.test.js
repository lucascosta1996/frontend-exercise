import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history'
import MainHeader from '.';

test('renders header with pathname rendered', () => {
  const history = createMemoryHistory();
  history.push('/overview');
  render(
    <Router history={history}>
      <MainHeader />
    </Router>
  )
  const linkElement = screen.getByText(/Overview/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Premium button', () => {
  const history = createMemoryHistory()
  render(
    <Router history={history}>
      <MainHeader />
    </Router>
  )
  const linkElement = screen.getByText(/Premium/i);
  expect(linkElement).toBeInTheDocument();
});