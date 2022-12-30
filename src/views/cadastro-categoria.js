import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Stack from '@mui/material/Stack';

import Card from '../components/card';
import FormGroup from '../components/form-group';

import { mensagemSucesso, mensagemErro } from '../components/toastr';

import '../custom.css';

import axios from 'axios';
import { BASE_URL } from '../config/axios';

function CadastroCategoria() {
  const navigate = useNavigate();

  const baseURL = `${BASE_URL}/categorias`;

  const [descricao, setDescricao] = useState('');
  const [cargaHorariaMinima, setCargaHorariaMinima] = useState(0);
  const [cargaHorariaMaxima, setCargaHorariaMaxima] = useState(0);
  const [quantidadeMinimaCategoria, setQuantidadeMinimaCategoria] = useState(0);

  async function cadastrar() {
    let data = {
      descricao,
      cargaHorariaMinima,
      cargaHorariaMaxima,
      quantidadeMinimaCategoria,
    };
    data = JSON.stringify(data);
    await axios
      .post(baseURL, data, { headers: { 'Content-Type': 'application/json' } })
      .then(function (response) {
        mensagemSucesso(`Categoria ${descricao} cadastrada com sucesso!`);
        navigate(`/listagem-categorias`);
      })
      .catch(function (error) {
        mensagemErro(error.response.data);
      });
  }

  const cancelar = () => {
    setDescricao('');
    setCargaHorariaMinima('');
    setCargaHorariaMaxima('');
    setQuantidadeMinimaCategoria('');
  };

  return (
    <div className='container'>
      <Card title='Cadastro de Categoria'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='bs-component'>
              <FormGroup label='Descrição: *' htmlFor='inputDescricao'>
                <input
                  type='text'
                  id='inputDescricao'
                  value={descricao}
                  className='form-control'
                  name='descricao'
                  onChange={(e) => setDescricao(e.target.value)}
                />
              </FormGroup>
              <FormGroup
                label='Carga Horária Mínima: *'
                htmlFor='inputCargaHorariaMinima'
              >
                <input
                  type='text'
                  id='inputCargaHorariaMinima'
                  value={cargaHorariaMinima}
                  className='form-control'
                  name='celular'
                  onChange={(e) => setCargaHorariaMinima(e.target.value)}
                />
              </FormGroup>
              <FormGroup
                label='Carga Horária Máxima: *'
                htmlFor='inputCargaHorariaMaxima'
              >
                <input
                  type='text'
                  id='inputCargaHorariaMaxima'
                  value={cargaHorariaMaxima}
                  className='form-control'
                  name='celular'
                  onChange={(e) => setCargaHorariaMaxima(e.target.value)}
                />
              </FormGroup>
              <FormGroup
                label='Quantidade Mínima Categoria: *'
                htmlFor='inputQuantidadeMinimaCategoria'
              >
                <input
                  type='text'
                  id='inputQuantidadeMinimaCategoria'
                  value={quantidadeMinimaCategoria}
                  className='form-control'
                  name='celular'
                  onChange={(e) => setQuantidadeMinimaCategoria(e.target.value)}
                />
              </FormGroup>
              <Stack spacing={1} padding={1} direction='row'>
                <button
                  onClick={cadastrar}
                  type='button'
                  className='btn btn-success'
                >
                  Salvar
                </button>
                <button
                  onClick={cancelar}
                  type='button'
                  className='btn btn-danger'
                >
                  Cancelar
                </button>
              </Stack>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default CadastroCategoria;
