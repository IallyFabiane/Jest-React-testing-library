import React from 'react';
import { getByLabelText, getByTestId, getByText, render, screen, fireEvent } from '@testing-library/react';
import App, { calcularNovoSaldo } from './App';

describe('Componente principal', () => {
    describe('Quando eu abro o app do banco', () => {
            it('o nome é exibido' , () => {
                render(<App />)
                expect(screen.getByText('ByteBank')).toBeInTheDocument();
            }) 
            it('o saldo é exibido', () => {
                render(<App/ >);
                expect(screen.getByText('Saldo:')).toBeInTheDocument();
            })
            it('o botão de realizar transação é exibido', () => {
                    render(<App />)
                    expect(screen.getByText('Realizar operação')).toBeInTheDocument();
            })
        })
    describe('Quando eu realizo uma transação', () => {
        it('Saque e o saldo diminua', () => {
             const valores = {
                transacao: 'saque',
                valor: 50
             }
             const novoSaldo = calcularNovoSaldo(valores, 150)
            expect(novoSaldo).toBe(100);
        })
        it('Saque e a transação deve ser realizada', () => {
            render(<App />)

            const saldo = screen.getByText('R$ 1000')
            const transacao = screen.getByLabelText('Saque')
            const valor = screen.getByTestId('valor')
            const botaoTransacao = screen.getByText('Realizar operação')

            expect(saldo.textContent).toBe('R$ 1000')

            fireEvent.click(transacao, { target: { value: 'saque'}})
            fireEvent.change(valor, { target: { value: 10 }})
            fireEvent.click(botaoTransacao)

            expect(saldo.textContent).toBe('R$ 990')
        })
    })
})
   

