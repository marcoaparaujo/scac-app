import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Stack from '@mui/material/Stack';

import Card from '../components/card';
import FormGroup from '../components/form-group';

import { mensagemSucesso, mensagemErro } from '../components/toastr';

import '../custom.css';

import axios from 'axios';
import { BASE_URL } from '../config/axios';

function CadastroCategoria() {
  const { idParam } = useParams();

  const navigate = useNavigate();

  const baseURL = `${BASE_URL}/categorias`;

  const [id, setId] = useState('');
  const [descricao, setDescricao] = useState('');
  const [cargaHorariaMinima, setCargaHorariaMinima] = useState(0);
  const [cargaHorariaMaxima, setCargaHorariaMaxima] = useState(0);
  const [quantidadeMinimaCategoria, setQuantidadeMinimaCategoria] = useState(0);

  const [dados, setDados] = React.useState([]);

  function inicializar() {
    if (idParam == null) {
      setId('');
      setDescricao('');
      setCargaHorariaMinima('');
      setCargaHorariaMaxima('');
      setQuantidadeMinimaCategoria('');
    } else {
      setId(dados.id);
      setDescricao(dados.descricao);
      setCargaHorariaMinima(dados.cargaHorariaMinima);
      setCargaHorariaMaxima(dados.cargaHorariaMaxima);
      setQuantidadeMinimaCategoria(dados.quantidadeMinimaCategoria);
    }
  }

  async function salvar() {
    let data = {
      id,
      descricao,
      cargaHorariaMinima,
      cargaHorariaMaxima,
      quantidadeMinimaCategoria,
    };
    data = JSON.stringify(data);
    if (idParam == null) {
      await axios
        .post(baseURL, data, {
          headers: { 'Content-Type': 'application/json' },
        })
        .then(function (response) {
          mensagemSucesso(`Categoria ${descricao} cadastrada com sucesso!`);
          navigate(`/listagem-categorias`);
        })
        .catch(function (error) {
          mensagemErro(error.response.data);
        });
    } else {
      await axios
        .put(`${baseURL}/${idParam}`, data, {
          headers: { 'Content-Type': 'application/json' },
        })
        .then(function (response) {
          mensagemSucesso(`Categoria ${descricao} alterada com sucesso!`);
          navigate(`/listagem-categorias`);
        })
        .catch(function (error) {
          mensagemErro(error.response.data);
        });
    }
  }

  async function buscar() {
    await axios.get(`${baseURL}/${idParam}`).then((response) => {
      setDados(response.data);
    });
    setId(dados.id);
    setDescricao(dados.descricao);
    setCargaHorariaMinima(dados.cargaHorariaMinima);
    setCargaHorariaMaxima(dados.cargaHorariaMaxima);
    setQuantidadeMinimaCategoria(dados.quantidadeMinimaCategoria);
  }

  useEffect(() => {
    buscar(); // eslint-disable-next-line
  }, [id]);

  if (!dados) return null;

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
                  onClick={salvar}
                  type='button'
                  className='btn btn-success'
                >
                  Salvar
                </button>
                <button
                  onClick={inicializar}
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
