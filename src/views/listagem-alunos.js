import React from 'react';

import Card from '../components/card';

import { mensagemSucesso } from '../components/toastr';

import '../custom.css';

import { useNavigate } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function createData(id, matricula, nome, email, celular) {
  return { id, matricula, nome, email, celular };
}

const ListagemAlunos = () => {
  const state = {
    dados: [
      createData(1, '1', 'Aluno 1', 'aluno1@email.com', '1111-1111'),
      createData(2, '2', 'Aluno 2', 'aluno2@email.com', '2222-2222'),
      createData(3, '3', 'Aluno 3', 'aluno3@email.com', '3333-3333'),
      createData(4, '4', 'Aluno 4', 'aluno4@email.com', '4444-4444'),
      createData(5, '5', 'Aluno 5', 'aluno5@email.com', '5555-5555'),
      createData(6, '6', 'Aluno 6', 'aluno6@email.com', '6666-6666'),
    ],
  };

  const navigate = useNavigate();

  const cadastrar = () => {
    navigate(`/cadastro-alunos`);
  };

  const editar = (id) => {
    navigate(`/cadastro-alunos`);
  };

  const excluir = (id) => {
    mensagemSucesso(`Excluir`);
  };

  return (
    <div className='container'>
      <Card title='Listagem de Alunos'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='bs-component'>
              <button
                type='button'
                class='btn btn-warning'
                onClick={() => cadastrar()}
              >
                Novo Aluno
              </button>
              <table className='table table-hover'>
                <thead>
                  <tr>
                    <th scope='col'>Matrícula</th>
                    <th scope='col'>Nome</th>
                    <th scope='col'>Email</th>
                    <th scope='col'>Celular</th>
                    <th scope='col'>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {state.dados.map((dado) => (
                    <tr key={dado.id}>
                      <td>{dado.matricula}</td>
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

export default ListagemAlunos;
