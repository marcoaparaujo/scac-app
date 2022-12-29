import React from 'react';

import Card from '../components/card';

import { mensagemSucesso } from '../components/toastr';

import '../custom.css';

import { useNavigate } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import axios from 'axios';
import { BASE_URL } from '../config/axios';

const baseURL = `${BASE_URL}/atividadescomplementares`;

function ListagemAtividadesComplementares() {
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

  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setDados(response.data);
    });
  }, []);

  if (!dados) return null;

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
                    <th scope='col'>Categoria</th>
                    <th scope='col'>Carga Horária</th>
                    <th scope='col'>Data Início</th>
                    <th scope='col'>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {dados.map((dado) => (
                    <tr key={dado.id}>
                      <td>{dado.nomeAluno}</td>
                      <td>{dado.titulo}</td>
                      <td>{dado.entidadePromotora}</td>
                      <td>{dado.nomeCategoria}</td>
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
}

export default ListagemAtividadesComplementares;
