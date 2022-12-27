import React from 'react';

import Card from '../components/card';

import { mensagemSucesso } from '../components/toastr';

import '../custom.css';

import { useNavigate } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function createData(id, aluno, titulo, entidade, cargaHoraria, dataInicio) {
  return { id, aluno, titulo, entidade, cargaHoraria, dataInicio };
}

const ListagemAtividadesComplementares = () => {
  const state = {
    dados: [
      createData(1, 'Aluno 1', 'Título 1', 'Entidade 1', '10', '11/11/1111'),
      createData(2, 'Aluno 2', 'Título 2', 'Entidade 2', '20', '22/22/2222'),
      createData(3, 'Aluno 3', 'Título 3', 'Entidade 3', '30', '33/33/3333'),
    ],
  };

  const navigate = useNavigate();

  const cadastrar = () => {
    navigate(`/cadastro-atividades-complementares`);
  };

  const editar = (id) => {
    navigate(`/cadastro-atividades-complementares`);
  };

  const excluir = (id) => {
    mensagemSucesso(`Excluir`);
  };

  return (
    <div className='container'>
      <Card title='Listagem de Atividades Complementares'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='bs-component'>
              <button
                type='button'
                class='btn btn-warning'
                onClick={() => cadastrar()}
              >
                Nova Atividade Complementar
              </button>
              <table className='table table-hover'>
                <thead>
                  <tr>
                    <th scope='col'>Aluno</th>
                    <th scope='col'>Título</th>
                    <th scope='col'>Entidade</th>
                    <th scope='col'>Carga Horária</th>
                    <th scope='col'>Data Início</th>
                    <th scope='col'>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {state.dados.map((dado) => (
                    <tr key={dado.id}>
                      <td>{dado.aluno}</td>
                      <td>{dado.titulo}</td>
                      <td>{dado.entidade}</td>
                      <td>{dado.cargaHoraria}</td>
                      <td>{dado.dataInicio}</td>
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

export default ListagemAtividadesComplementares;
