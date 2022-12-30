import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Stack from '@mui/material/Stack';

import Card from '../components/card';
import SubCard from '../components/sub-card';

import FormGroup from '../components/form-group';

import { mensagemSucesso, mensagemErro } from '../components/toastr';

import '../custom.css';

import axios from 'axios';
import { BASE_URL } from '../config/axios';

function CadastroCurso() {
  const navigate = useNavigate();

  const baseURL = `${BASE_URL}/cursos`;

  const [nome, setNome] = useState('');
  const [possuiEstagioObrigatorio, setPossuiEstagioObrigatorio] =
    useState(false);
  const [
    cargaHorariaMinimaEstagioObrigatorio,
    setCargaHorariaMinimaEstagioObrigatorio,
  ] = useState(0);
  const [periodoMinimoEstagioObrigatorio, setPeriodoMinimoEstagioObrigatorio] =
    useState(0);
  const [possuiEstagioNaoObrigatorio, setPossuiEstagioNaoObrigatorio] =
    useState(false);
  const [
    cargaHorariaMinimaAtividadesComplementares,
    setCargaHorariaMinimaAtividadesComplementares,
  ] = useState(0);
  const [idCoordenador, setIdCoordenador] = useState(0);
  const [idSupervisorEstagio, setIdSupervisorEstagio] = useState(0);
  const [
    idSupervisorAtividadesComplementares,
    setIdSupervisorAtividadesComplementares,
  ] = useState(0);

  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${BASE_URL}/professores`).then((response) => {
      setDados(response.data);
    });
  }, []);

  if (!dados) return null;

  async function cadastrar() {
    let data = {
      nome,
      possuiEstagioObrigatorio,
      cargaHorariaMinimaEstagioObrigatorio,
      periodoMinimoEstagioObrigatorio,
      possuiEstagioNaoObrigatorio,
      cargaHorariaMinimaAtividadesComplementares,
      idCoordenador,
      idSupervisorEstagio,
      idSupervisorAtividadesComplementares,
    };
    data = JSON.stringify(data);
    await axios
      .post(baseURL, data, { headers: { 'Content-Type': 'application/json' } })
      .then(function (response) {
        mensagemSucesso(`Curso ${nome} cadastrado com sucesso!`);
        navigate(`/listagem-cursos`);
      })
      .catch(function (error) {
        mensagemErro(error.response.data);
      });
  }

  const cancelar = () => {
    setNome('');
    setPossuiEstagioObrigatorio(false);
    setCargaHorariaMinimaEstagioObrigatorio(0);
    setPeriodoMinimoEstagioObrigatorio(0);
    setPossuiEstagioNaoObrigatorio(false);
    setCargaHorariaMinimaAtividadesComplementares(0);
    setIdCoordenador(0);
    setIdSupervisorEstagio(0);
    setIdSupervisorAtividadesComplementares(0);
  };

  return (
    <div className='container'>
      <Card title='Cadastro de Curso'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='bs-component'>
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
              <FormGroup label='Coordenador:' htmlFor='selectCoordenador'>
                <select
                  className='form-select'
                  id='selectCoordenador'
                  name='idCoordenador'
                  value={idCoordenador}
                  onChange={(e) => setIdCoordenador(e.target.value)}
                >
                  <option value='0'> </option>
                  {dados.map((dado) => (
                    <option value={dado.id}>{dado.nome}</option>
                  ))}
                </select>
              </FormGroup>
              <br></br>
              <SubCard title='Estágio'>
                <FormGroup>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    checked={possuiEstagioObrigatorio}
                    id='checkEstagioObrigatorio'
                    name='possuiEstagioObrigatorio'
                    onChange={(e) =>
                      setPossuiEstagioObrigatorio(e.target.checked)
                    }
                  />
                  Possui Estágio Obrigatório
                </FormGroup>
                <FormGroup>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    checked={possuiEstagioNaoObrigatorio}
                    id='checkEstagioNaoObrigatorio'
                    name='possuiEstagioNaoObrigatorio'
                    onChange={(e) =>
                      setPossuiEstagioNaoObrigatorio(e.target.checked)
                    }
                  />
                  Possui Estágio Não Obrigatório
                </FormGroup>
                <FormGroup
                  label='Supervisor Estágio:'
                  htmlFor='selectSupervisorEstagio'
                >
                  <select
                    className='form-select'
                    id='selectSupervisorEstagio'
                    name='idSupervisorEstagio'
                    value={idSupervisorEstagio}
                    onChange={(e) => setIdSupervisorEstagio(e.target.value)}
                  >
                    <option value='0'> </option>
                    {dados.map((dado) => (
                      <option value={dado.id}>{dado.nome}</option>
                    ))}
                  </select>
                </FormGroup>
                <FormGroup
                  label='Carga Horária Mínima Estágio Obrigatório:'
                  htmlFor='inputCargaHorariaMinimaEstagioObrigatorio'
                >
                  <input
                    type='text'
                    id='inputCargaHorariaMinimaEstagioObrigatorio'
                    value={cargaHorariaMinimaEstagioObrigatorio}
                    className='form-control'
                    name='cargaHorariaMinimaEstagioObrigatorio'
                    onChange={(e) =>
                      setCargaHorariaMinimaEstagioObrigatorio(e.target.value)
                    }
                  />
                </FormGroup>
                <FormGroup
                  label='Período Mínimo Estágio Obrigatório:'
                  htmlFor='inputPeriodoMinimoEstagioObrigatorio'
                >
                  <input
                    type='text'
                    id='inputPeriodoMinimoEstagioObrigatorio'
                    value={periodoMinimoEstagioObrigatorio}
                    className='form-control'
                    name='periodoMinimoEstagioObrigatorio'
                    onChange={(e) =>
                      setPeriodoMinimoEstagioObrigatorio(e.target.value)
                    }
                  />
                </FormGroup>
              </SubCard>
              <SubCard title='Atividades Complementares'>
                <FormGroup
                  label='Supervisor Atividades Complementares:'
                  htmlFor='selectSupervisorAtividadesComplementares'
                >
                  <select
                    className='form-select'
                    id='selectSupervisorAtividadesComplementares'
                    name='idSupervisorAtividadesComplementares'
                    value={idSupervisorAtividadesComplementares}
                    onChange={(e) =>
                      setIdSupervisorAtividadesComplementares(e.target.value)
                    }
                  >
                    <option value='0'> </option>
                    {dados.map((dado) => (
                      <option value={dado.id}>{dado.nome}</option>
                    ))}
                  </select>
                </FormGroup>
                <FormGroup
                  label='Carga Horária Mínima Atividades Complementares:'
                  htmlFor='inputCargaHorariaMinimaAtividadesComplementares'
                >
                  <input
                    type='text'
                    id='inputCargaHorariaMinimaAtividadesComplementares'
                    value={cargaHorariaMinimaAtividadesComplementares}
                    className='form-control'
                    name='cargaHorariaMinimaAtividadesComplementares'
                    onChange={(e) =>
                      setCargaHorariaMinimaAtividadesComplementares(
                        e.target.value
                      )
                    }
                  />
                </FormGroup>
              </SubCard>
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

export default CadastroCurso;
