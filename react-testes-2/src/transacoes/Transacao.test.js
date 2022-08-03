import React from 'react';
import { render } from '@testing-library/react';
import Transacao from './Transacao';

describe('Componenete de Transação do Extrato', ()=> {
    it('O snapshot do componente deve premanecer sempre o mesmo', () => {
        const { container } = render(<Transacao 
            data = "08/06/2022"
            tipo = "saque"
            valor = "20.00"
        />)

        expect(container.firstChild).toMatchSnapshot();
    })
})