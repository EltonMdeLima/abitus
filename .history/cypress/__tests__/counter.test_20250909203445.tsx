import { render, screen } from '@testing-library/react';
import { Counter } from '@/app/counter';
import { Provider } from 'react-redux';
import { store } from '@/store';

// Função personalizada de renderização com Redux Provider
const renderWithRedux = (component: React.ReactElement) => {
  return render(component, { 
    wrapper: ({ children }) => <Provider store={store}>{children}</Provider> 
  });
};

describe('Counter Component', () => {
  it('deve renderizar o contador com valor inicial 0', () => {
    // Usa a função personalizada para renderizar o componente
    renderWithRedux(<Counter />);
    
    // Verifica se o elemento com texto "0" está presente
    const countElement = screen.getByText('0');
    expect(countElement).toBeInTheDocument();
  });
});