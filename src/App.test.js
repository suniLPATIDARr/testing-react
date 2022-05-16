import { render, screen } from '@testing-library/react';
import { getByLabelText} from '@testing-library/dom'

import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Username/i);
  expect(linkElement).toBeInTheDocument();
});

// test('comps', () => {
//   render(<App />);

// })
// With screen:
// const inputNode1 = screen.getByLabelText('Username')

// Without screen, you need to provide a container:
