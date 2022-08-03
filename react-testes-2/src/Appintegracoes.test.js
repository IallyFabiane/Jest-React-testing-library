import React from 'react';
import api from './api';
import App from './App';
import { render, screen } from '@testing-library/react';

jest.mock('./api'); //mock de api do jest

describe('Requisições para a API', () => {
    it('Exibir lista de transações atrvés da API', async () => {
        api.listaTransacoes.mockResolvedValue([
            {
                "valor": "10",
                "transacao": "saque",
                "data": "10/08/2020",
                "id": 1
            },
            {
                "transacao": "deposito",
                "valor": "20",
                "data": "26/09/2020",
                "id": 2
            }
        ]);

        render(<App />)

        expect(await screen.findByText('saque')).toBeInTheDocument() //simulando código assíncrono com await e a query findBy

        expect(screen.getByTestId('transacoes').children.length).toBe(2)
    })
})