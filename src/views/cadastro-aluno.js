import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Stack from '@mui/material/Stack';

import Card from '../components/card';
import FormGroup from '../components/form-group';

import { mensagemSucesso, mensagemErro } from '../components/toastr';

import '../custom.css';

import axios from 'axios';
import { BASE_URL } from '../config/axios';

function CadastroAluno() {
  const { idParam } = useParams();

  const navigate = useNavigate();

  const baseURL = `${BASE_URL}/alunos`;

  const [id, setId] = useState('');
  const [matricula, setMatricula] = useState(0);
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [celular, setCelular] = useState('');
  const [idCurso, setIdCurso] = useState(0);

  const [dados, setDados] = React.useState([]);

  function inicializar() {
    if (idParam == null) {
      setId('');
      setMatricula(0);
      setNome('');
      setCpf('');
      setEmail('');
      setCelular('');
      setIdCurso(0);
    } else {
      setId(dados.id);
      setMatricula(dados.matricula);
      setNome(dados.nome);
      setCpf(dados.cpf);
      setEmail(dados.email);
      setCelular(dados.celular);
      setIdCurso(dados.idCurso);
    }
  }

  async function salvar() {
    let data = { id, matricula, nome, cpf, email, celular, idCurso };
    data = JSON.stringify(data);
    if (idParam == null) {
      await axios
        .post(baseURL, data, {
          headers: { 'Content-Type': 'application/json' },
        })
        .then(function (response) {
          mensagemSucesso(`Aluno ${nome} cadastrado com sucesso!`);
          navigate(`/listagem-alunos`);
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
          mensagemSucesso(`Aluno ${nome} alterado com sucesso!`);
          navigate(`/listagem-alunos`);
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
    setMatricula(dados.matricula);
    setNome(dados.nome);
    setCpf(dados.cpf);
    setEmail(dados.email);
    setCelular(dados.celular);
    setIdCurso(dados.idCurso);
  }

  const [dadosCursos, setDadosCursos] = React.useState(null);

  useEffect(() => {
    axios.get(`${BASE_URL}/cursos`).then((response) => {
      setDadosCursos(response.data);
    });
  }, []);

  useEffect(() => {
    buscar(); // eslint-disable-next-line
  }, [id]);

  if (!dados) return null;
  if (!dadosCursos) return null;

  return (
    <div className='container'>
      <Card title='Cadastro de Aluno'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='bs-component'>
              <FormGroup label='Matrícula: *' htmlFor='inputMatricula'>
                <input
                  type='text'
                  id='inputMatricula'
                  value={matricula}
                  className='form-control'
                  name='matricula'
                  onChange={(e) => setMatricula(e.target.value)}
                />
              </FormGroup>
              <FormGroup label='Nome: *' htmlFor='inputNome'>
                <input
                  type='text'
                  id='inputNome'
                  value={nome}
                  className='form-control'
                  name='nome'
                  onChange={(e) => setNome(e.target.value)}
                />
              </FormGroup>
              <FormGroup label='CPF: *' htmlFor='inputCpf'>
                <input
                  type='text'
                  maxLength='11'
                  id='inputCpf'
                  value={cpf}
                  className='form-control'
                  name='cpf'
                  onChange={(e) => setCpf(e.target.value)}
                />
              </FormGroup>
              <FormGroup label='Email: *' htmlFor='inputEmail'>
                <input
                  type='email'
                  id='inputEmail'
                  value={email}
                  className='form-control'
                  name='email'
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormGroup>
              <FormGroup label='Celular:' htmlFor='inputCelular'>
                <input
                  type='text'
                  id='inputCelular'
                  value={celular}
                  className='form-control'
                  name='celular'
                  onChange={(e) => setCelular(e.target.value)}
                />
              </FormGroup>
              <FormGroup label='Curso: *' htmlFor='selectCurso'>
                <select
                  className='form-select'
                  id='selectCurso'
                  name='idCurso'
                  value={idCurso}
                  onChange={(e) => setIdCurso(e.target.value)}
                >
                  <option key='0' value='0'>
                    {' '}
                  </option>
                  {dadosCursos.map((dado) => (
                    <option key={dado.id} value={dado.id}>
                      {dado.nome}
                    </option>
                  ))}
                </select>
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

export default CadastroAluno;
