import { render, screen } from '@testing-library/react';
import { Counter } from '@/app/counter';
import { Provider } from 'react-redux';
import { store } from '@/store';
import React from 'react';

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
    
    // Procura o elemento que contém o valor do contador e verifica se é '0'
    const countElement = screen.getByText('0');
    expect(countElement).toBeInTheDocument();
  });
});
import '@testing-library/jest-dom/extend-expect';