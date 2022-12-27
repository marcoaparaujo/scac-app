import React from 'react';

import Card from '../components/card';

import { mensagemSucesso } from '../components/toastr';

import '../custom.css';

import { useNavigate } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function createData(id, nome, email, celular) {
  return { id, nome, email, celular };
}

const ListagemProfessores = () => {
  const state = {
    dados: [
      createData(1, 'Professor 1', 'professor1@email.com', '1111-1111'),
      createData(2, 'Professor 2', 'professor2@email.com', '2222-2222'),
      createData(3, 'Professor 3', 'professor3@email.com', '3333-3333'),
      createData(4, 'Professor 4', 'professor4@email.com', '4444-4444'),
      createData(5, 'Professor 5', 'professor5@email.com', '5555-5555'),
      createData(6, 'Professor 6', 'professor6@email.com', '6666-6666'),
    ],
  };

  const navigate = useNavigate();

  const cadastrar = () => {
    navigate(`/cadastro-professores`);
  };

  const editar = (id) => {
    navigate(`/cadastro-professores`);
  };

  const excluir = (id) => {
    mensagemSucesso(`Excluir`);
  };

  return (
    <div className='container'>
      <Card title='Listagem de Professores'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='bs-component'>
              <button
                type='button'
                class='btn btn-warning'
                onClick={() => cadastrar()}
              >
                Novo Professor
              </button>
              <table className='table table-hover'>
                <thead>
                  <tr>
                    <th scope='col'>Nome</th>
                    <th scope='col'>Email</th>
                    <th scope='col'>Celular</th>
                    <th scope='col'>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {state.dados.map((dado) => (
                    <tr key={dado.id}>
                      <td>{dado.nome}</td>
                      <td>{dado.email}</td>
                      <td>{dado.celular}</td>
                      <td>
                        <Stack spacing={1} padding={0} direction='row'>
                          <IconButton
                            aria-label='edit'
                            onClick={() => editar(dado.id)}
                          >
                            <EditIcon />
                          </IconButton>
                          <IconButton
                            aria-label='delete'
                            onClick={() => excluir(dado.id)}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </Stack>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>{' '}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ListagemProfessores;
