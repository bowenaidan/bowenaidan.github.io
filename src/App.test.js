import { render, screen } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      text: () => Promise.resolve('# Aidan Bowen\n\n## Build Notes, Backlog & Portfolio')
    })
  );
});

afterEach(() => {
  jest.restoreAllMocks();
});

test('renders blog-style markdown heading', async () => {
  render(<App />);
  const heading = await screen.findByRole('heading', {
    name: /build notes, backlog & portfolio/i
  });
  expect(heading).not.toBeNull();
});