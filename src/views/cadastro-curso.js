import React from 'react';

import Stack from '@mui/material/Stack';

import Card from '../components/card';
import SubCard from '../components/sub-card';

import FormGroup from '../components/form-group';

import { mensagemSucesso } from '../components/toastr';

import '../custom.css';

class CadastroCurso extends React.Component {
  state = {
    nome: '',
    possuiEstagioObrigatorio: false,
    cargaHorariaMinimaEstagioObrigatorio: '',
    periodoMinimoEstagioObrigatorio: '',
    possuiEstagioNaoObrigatorio: false,
    cargaHorariaMinimaAtividadesComplementares: '',
    coordenador: '',
    supervisorEstagio: '',
    supervisorAtividadesComplementares: '',
  };

  cadastrar = () => {
    mensagemSucesso(`Curso ${this.state.nome} cadastrado com sucesso!`);
  };

  cancelar = () => {
    this.setState({
      nome: '',
      possuiEstagioObrigatorio: false,
      cargaHorariaMinimaEstagioObrigatorio: '',
      periodoMinimoEstagioObrigatorio: '',
      possuiEstagioNaoObrigatorio: false,
      cargaHorariaMinimaAtividadesComplementares: '',
      coordenador: '',
      supervisorEstagio: '',
      supervisorAtividadesComplementares: '',
    });
  };

  render() {
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
                    value={this.state.nome}
                    className='form-control'
                    name='nome'
                    onChange={(e) => this.setState({ nome: e.target.value })}
                  />
                </FormGroup>
                <FormGroup label='Coordenador:' htmlFor='selectCoordenador'>
                  <select
                    class='form-select'
                    id='selectCoordenador'
                    name='coordenador'
                    value={this.state.coordenador}
                    onChange={(e) =>
                      this.setState({ coordenador: e.target.value })
                    }
                  >
                    <option></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                </FormGroup>
                <br></br>
                <SubCard title='Estágio'>
                  <FormGroup>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      checked={this.state.possuiEstagioObrigatorio}
                      id='checkEstagioObrigatorio'
                      name='estagioObrigatorio'
                      onChange={(e) =>
                        this.setState({
                          possuiEstagioObrigatorio: e.target.checked,
                        })
                      }
                    />
                    Possui Estágio Obrigatório
                  </FormGroup>
                  <FormGroup>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      checked={this.state.possuiEstagioNaoObrigatorio}
                      id='checkEstagioNaoObrigatorio'
                      name='estagioNaoObrigatorio'
                      onChange={(e) =>
                        this.setState({
                          possuiEstagioNaoObrigatorio: e.target.checked,
                        })
                      }
                    />
                    Possui Estágio Não Obrigatório
                  </FormGroup>
                  <FormGroup
                    label='Supervisor Estágio:'
                    htmlFor='selectSupervisorEstagio'
                  >
                    <select
                      class='form-select'
                      id='selectSupervisorEstagio'
                      name='supervisorEstagio'
                      value={this.state.supervisorEstagio}
                      onChange={(e) =>
                        this.setState({ supervisorEstagio: e.target.value })
                      }
                    >
                      <option></option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                  </FormGroup>
                  <FormGroup
                    label='Carga Horária Mínima Estágio Obrigatório:'
                    htmlFor='inputCargaHorariaMinimaEstagioObrigatorio'
                  >
                    <input
                      type='text'
                      id='inputCargaHorariaMinimaEstagioObrigatorio'
                      value={this.state.cargaHorariaMinimaEstagioObrigatorio}
                      className='form-control'
                      name='cargaHorariaMinimaEstagioObrigatorio'
                      onChange={(e) =>
                        this.setState({
                          cargaHorariaMinimaEstagioObrigatorio: e.target.value,
                        })
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
                      value={this.state.periodoMinimoEstagioObrigatorio}
                      className='form-control'
                      name='periodoMinimoEstagioObrigatorio'
                      onChange={(e) =>
                        this.setState({
                          periodoMinimoEstagioObrigatorio: e.target.value,
                        })
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
                      class='form-select'
                      id='selectSupervisorAtividadesComplementares'
                      name='supervisorAtividadesComplementares'
                      value={this.state.supervisorAtividadesComplementares}
                      onChange={(e) =>
                        this.setState({
                          supervisorAtividadesComplementares: e.target.value,
                        })
                      }
                    >
                      <option></option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                  </FormGroup>
                  <FormGroup
                    label='Carga Horária Mínima Atividades Complementares:'
                    htmlFor='inputCargaHorariaMinimaAtividadesComplementares'
                  >
                    <input
                      type='text'
                      id='inputCargaHorariaMinimaAtividadesComplementares'
                      value={
                        this.state.cargaHorariaMinimaAtividadesComplementares
                      }
                      className='form-control'
                      name='cargaHorariaMinimaAtividadesComplementares'
                      onChange={(e) =>
                        this.setState({
                          cargaHorariaMinimaAtividadesComplementares:
                            e.target.value,
                        })
                      }
                    />
                  </FormGroup>
                </SubCard>
                <Stack spacing={1} padding={1} direction='row'>
                  <button
                    onClick={this.cadastrar}
                    type='button'
                    className='btn btn-success'
                  >
                    Salvar
                  </button>
                  <button
                    onClick={this.cancelar}
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
}

export default CadastroCurso;
