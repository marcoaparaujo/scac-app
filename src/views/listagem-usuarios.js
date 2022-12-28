import React from 'react';

import Card from '../components/card';

import { mensagemSucesso } from '../components/toastr';

import '../custom.css';

import { useNavigate } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function createData(id, login, email, administrador) {
  return { id, login, email, administrador };
}

const ListagemUsuarios = () => {
  const state = {
    dados: [
      createData(1, 'usuario01', 'usuario01@email.com', 'Sim'),
      createData(2, 'usuario02', 'usuario02@email.com', 'Sim'),
      createData(3, 'usuario03', 'usuario03@email.com', 'Sim'),
      createData(4, 'usuario04', 'usuario04@email.com', 'Sim'),
      createData(5, 'usuario05', 'usuario05@email.com', 'Sim'),
    ],
  };

  const navigate = useNavigate();

  const cadastrar = () => {
    navigate(`/cadastro-usuarios`);
  };

  const editar = (id) => {
    navigate(`/cadastro-usuarios`);
  };

  const excluir = (id) => {
    mensagemSucesso(`Excluir`);
  };

  return (
    <div className='container'>
      <Card title='Listagem de Usuários'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='bs-component'>
              <button
                type='button'
                class='btn btn-warning'
                onClick={() => cadastrar()}
              >
                Novo Usuário
              </button>
              <table className='table table-hover'>
                <thead>
                  <tr>
                    <th scope='col'>Login</th>
                    <th scope='col'>Email</th>
                    <th scope='col'>Administrador</th>
                    <th scope='col'>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {state.dados.map((dado) => (
                    <tr key={dado.id}>
                      <td>{dado.login}</td>
                      <td>{dado.email}</td>
                      <td>{dado.administrador}</td>
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

export default ListagemUsuarios;
