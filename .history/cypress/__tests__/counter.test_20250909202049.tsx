import { Counter } from '@/../src/app/counter';
import { Provider } from 'react-redux';
import { store } from '@/../src/store';
import { JSX,  } from 'react';

// Mock do Provider para testes unitários
const MockReduxProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

describe('Counter Component', () => {
  it('should render the counter with initial value 0', () => {
    render(<Counter />, { wrapper: MockReduxProvider });
    
    // Procura o elemento que contém o valor do contador e verifica se é '0'
    const countElement = screen.getByText('0');
    expect(countElement).toBeInTheDocument();
  });
});

function render(arg0: JSX.Element, arg1: { wrapper: ({ children }: { children: React.ReactNode; }) => JSX.Element; }) {
    throw new Error('Function not implemented.');
}
