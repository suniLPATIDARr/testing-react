import {render, screen, fireEvent} from '@testing-library/react'

import App from './App';

test('testing simple',()=>{
    render(<App />)
    const dialogContainer = screen.getByRole('dialog');
    const inputNode = screen.getByLabelText('Username', {selector: 'input'})
    expect(dialogContainer).toBeInTheDocument();
    expect(inputNode).toBeInTheDocument();
})

test('placeholder',()=>{
    render(<App/>);
    const inputNode = screen.getByPlaceholderText('sample-test');
    expect(inputNode).toBeInTheDocument();
})

test('text',()=>{
    render(<App/>);
    const element = screen.getByTestId('custom-element')
    expect(element).toBeInTheDocument();
})

test('title',()=>{
    render(<App/>);
    const deleteElement = screen.getByTitle('Delete')
    expect(deleteElement).toBeInTheDocument();
})


const Button = ({onClick, children}) => (
  <button onClick={onClick}>{children}</button>
)

test('calls onClick prop when clicked', () => {
  const handleClick = jest.fn()
  render(<Button onClick={handleClick}>Click Me</Button>)
  fireEvent.click(screen.getByText(/click me/i))
  expect(handleClick).toHaveBeenCalledTimes(1)
})