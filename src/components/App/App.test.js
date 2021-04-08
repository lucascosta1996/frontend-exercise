import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux'
import store from '../../store'
import App from '.';

test('renders Premium button', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const linkElement = screen.getByText(/Premium/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Data overview title', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const overviewTitle = screen.getByText(/Data overview/i);
  expect(overviewTitle).toBeInTheDocument();
});
