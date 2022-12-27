import React from 'react';

import Card from '../components/card';

import { mensagemSucesso } from '../components/toastr';

import '../custom.css';

import { useNavigate } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function createData(id, nome, email, administrador) {
  return { id, nome, email, administrador };
}

const ListagemUsuarios = () => {
  const state = {
    dados: [
      createData(1, 'Usuário 01', 'usuario01@email.com', 'Sim'),
      createData(2, 'Usuário 02', 'usuario02@email.com', 'Sim'),
      createData(3, 'Usuário 03', 'usuario03@email.com', 'Sim'),
      createData(4, 'Usuário 04', 'usuario04@email.com', 'Sim'),
      createData(5, 'Usuário 05', 'usuario05@email.com', 'Sim'),
      createData(6, 'Usuário 06', 'usuario06@email.com', 'Sim'),
      createData(7, 'Usuário 07', 'usuario07@email.com', 'Sim'),
      createData(8, 'Usuário 08', 'usuario08@email.com', 'Sim'),
      createData(9, 'Usuário 09', 'usuario09@email.com', 'Sim'),
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
                    <th scope='col'>Nome</th>
                    <th scope='col'>Email</th>
                    <th scope='col'>Administrador</th>
                    <th scope='col'>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {state.dados.map((dado) => (
                    <tr key={dado.id}>
                      <td>{dado.nome}</td>
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
