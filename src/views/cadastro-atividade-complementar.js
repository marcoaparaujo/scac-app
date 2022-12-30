import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Stack from '@mui/material/Stack';

import Card from '../components/card';
import FormGroup from '../components/form-group';

import { mensagemSucesso, mensagemErro } from '../components/toastr';

import '../custom.css';

import axios from 'axios';
import { BASE_URL } from '../config/axios';

function CadastroAtividadeComplementar() {
  const navigate = useNavigate();

  const baseURL = `${BASE_URL}/atividadescomplementares`;

  const [idAluno, setIdAluno] = useState(0);
  const [titulo, setTitulo] = useState('');
  const [entidadePromotora, setEntidadePromotora] = useState('');
  const [idCategoria, setIdCategoria] = useState(0);
  const [cargaHoraria, setCargaHoraria] = useState(0);
  const [dataInicio, setDataInicio] = useState('');
  const [dataFim, setDataFim] = useState('');
  const [certificado, setCertificado] = useState('');
  const [link, setLink] = useState('');

  const [dadosAlunos, setDadosAlunos] = React.useState(null);
  const [dadosCategorias, setDadosCategorias] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${BASE_URL}/alunos`).then((response) => {
      setDadosAlunos(response.data);
    });
  }, []);

  React.useEffect(() => {
    axios.get(`${BASE_URL}/categorias`).then((response) => {
      setDadosCategorias(response.data);
    });
  }, []);

  if (!dadosAlunos) return null;
  if (!dadosCategorias) return null;

  async function cadastrar() {
    let data = {
      idAluno,
      titulo,
      entidadePromotora,
      idCategoria,
      cargaHoraria,
      dataInicio,
      dataFim,
      certificado,
      link,
    };
    data = JSON.stringify(data);
    await axios
      .post(baseURL, data, { headers: { 'Content-Type': 'application/json' } })
      .then(function (response) {
        mensagemSucesso(
          `Atividade Complementar ${titulo} cadastrada com sucesso!`
        );
        navigate(`/listagem-atividades-complementares`);
      })
      .catch(function (error) {
        mensagemErro(error.response.data);
      });
  }

  const cancelar = () => {
    setIdAluno(0);
    setTitulo('');
    setEntidadePromotora('');
    setIdCategoria(0);
    setCargaHoraria(0);
    setDataInicio('');
    setDataFim('');
    setCertificado('');
    setLink('');
  };

  return (
    <div className='container'>
      <Card title='Cadastro de Atividade Complementar'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='bs-component'>
              <FormGroup label='Aluno: *' htmlFor='selectAluno'>
                <select
                  class='form-select'
                  id='selectAluno'
                  name='idAluno'
                  value={idAluno}
                  onChange={(e) => setIdAluno(e.target.value)}
                >
                  <option value='0'> </option>
                  {dadosAlunos.map((dado) => (
                    <option value={dado.id}>{dado.nome}</option>
                  ))}
                </select>
              </FormGroup>
              <FormGroup label='Título: *' htmlFor='inputTitulo'>
                <input
                  type='text'
                  id='inputTitulo'
                  value={titulo}
                  className='form-control'
                  name='titulo'
                  onChange={(e) => setTitulo(e.target.value)}
                />
              </FormGroup>
              <FormGroup
                label='Entidade Promotora: *'
                htmlFor='inputEntidadePromotora'
              >
                <input
                  type='text'
                  id='inputEntidadePromotora'
                  value={entidadePromotora}
                  className='form-control'
                  name='entidadePromotora'
                  onChange={(e) => setEntidadePromotora(e.target.value)}
                />
              </FormGroup>
              <FormGroup label='Carga Horária: *' htmlFor='inputCargaHoraria'>
                <input
                  type='text'
                  id='inputCargaHoraria'
                  value={cargaHoraria}
                  className='form-control'
                  name='cargaHoraria'
                  onChange={(e) => setCargaHoraria(e.target.value)}
                />
              </FormGroup>
              <FormGroup label='Categoria: *' htmlFor='selectCategoria'>
                <select
                  class='form-select'
                  id='selectCategoria'
                  name='idCategoria'
                  value={idCategoria}
                  onChange={(e) => setIdCategoria(e.target.value)}
                >
                  <option value='0'> </option>
                  {dadosCategorias.map((dado) => (
                    <option value={dado.id}>{dado.descricao}</option>
                  ))}
                </select>
              </FormGroup>
              <FormGroup label='Data Início: *' htmlFor='inputDataInicio'>
                <input
                  type='text'
                  id='inputDataInicio'
                  value={dataInicio}
                  className='form-control'
                  name='dataInicio'
                  onChange={(e) => setDataInicio(e.target.value)}
                />
              </FormGroup>
              <FormGroup label='Data Fim:' htmlFor='inputDataFim'>
                <input
                  type='text'
                  id='inputDataFim'
                  value={dataFim}
                  className='form-control'
                  name='dataFim'
                  onChange={(e) => setDataFim(e.target.value)}
                />
              </FormGroup>
              <FormGroup label='Certificado:' htmlFor='inputCertificado'>
                <input
                  type='text'
                  id='inputCertificado'
                  value={certificado}
                  className='form-control'
                  name='certificado'
                  onChange={(e) => setCertificado(e.target.value)}
                />
              </FormGroup>
              <FormGroup label='Link:' htmlFor='inputLink'>
                <input
                  type='text'
                  id='inputLink'
                  value={link}
                  className='form-control'
                  name='link'
                  onChange={(e) => setLink(e.target.value)}
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

export default CadastroAtividadeComplementar;
