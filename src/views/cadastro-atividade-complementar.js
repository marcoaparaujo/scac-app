import React from 'react';

import Stack from '@mui/material/Stack';

import Card from '../components/card';
import FormGroup from '../components/form-group';

import { mensagemSucesso } from '../components/toastr';

import '../custom.css';

class CadastroAtividadeComplementar extends React.Component {
  state = {
    aluno: '',
    titulo: '',
    entidadePromotora: '',
    categoria: '',
    cargaHoraria: '',
    dataInicio: '',
    dataFim: '',
    certificado: '',
    link: '',
  };

  cadastrar = () => {
    mensagemSucesso(
      `Atividade Complementar ${this.state.titulo} cadastrada com sucesso!`
    );
  };

  cancelar = () => {
    this.setState({
      aluno: '',
      titulo: '',
      entidadePromotora: '',
      categoria: '',
      cargaHoraria: '',
      dataInicio: '',
      dataFim: '',
      certificado: '',
      link: '',
    });
  };

  render() {
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
                    name='aluno'
                    value={this.state.aluno}
                    onChange={(e) => this.setState({ aluno: e.target.value })}
                  >
                    <option></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                </FormGroup>
                <FormGroup label='Título: *' htmlFor='inputTitulo'>
                  <input
                    type='text'
                    id='inputTitulo'
                    value={this.state.titulo}
                    className='form-control'
                    name='titulo'
                    onChange={(e) => this.setState({ titulo: e.target.value })}
                  />
                </FormGroup>
                <FormGroup
                  label='Entidade Promotora: *'
                  htmlFor='inputEntidadePromotora'
                >
                  <input
                    type='text'
                    id='inputEntidadePromotora'
                    value={this.state.entidadePromotora}
                    className='form-control'
                    name='entidadePromotora'
                    onChange={(e) =>
                      this.setState({ entidadePromotora: e.target.value })
                    }
                  />
                </FormGroup>
                <FormGroup label='Carga Horária: *' htmlFor='inputCargaHoraria'>
                  <input
                    type='text'
                    id='inputCargaHoraria'
                    value={this.state.cargaHoraria}
                    className='form-control'
                    name='cargaHoraria'
                    onChange={(e) =>
                      this.setState({ cargaHoraria: e.target.value })
                    }
                  />
                </FormGroup>
                <FormGroup label='Categoria: *' htmlFor='selectCategoria'>
                  <select
                    class='form-select'
                    id='selectCategoria'
                    name='categoria'
                    value={this.state.categoria}
                    onChange={(e) =>
                      this.setState({ categoria: e.target.value })
                    }
                  >
                    <option></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                </FormGroup>
                <FormGroup label='Data Início: *' htmlFor='inputDataInicio'>
                  <input
                    type='text'
                    id='inputDataInicio'
                    value={this.state.dataInicio}
                    className='form-control'
                    name='dataInicio'
                    onChange={(e) =>
                      this.setState({ dataInicio: e.target.value })
                    }
                  />
                </FormGroup>
                <FormGroup label='Data Fim:' htmlFor='inputDataFim'>
                  <input
                    type='text'
                    id='inputDataFim'
                    value={this.state.dataFim}
                    className='form-control'
                    name='dataFim'
                    onChange={(e) => this.setState({ dataFim: e.target.value })}
                  />
                </FormGroup>
                <FormGroup label='Certificado:' htmlFor='inputCertificado'>
                  <input
                    type='text'
                    id='inputCertificado'
                    value={this.state.certificado}
                    className='form-control'
                    name='certificado'
                    onChange={(e) =>
                      this.setState({ certificado: e.target.value })
                    }
                  />
                </FormGroup>
                <FormGroup label='Link:' htmlFor='inputLink'>
                  <input
                    type='text'
                    id='inputLink'
                    value={this.state.link}
                    className='form-control'
                    name='link'
                    onChange={(e) => this.setState({ link: e.target.value })}
                  />
                </FormGroup>
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

export default CadastroAtividadeComplementar;
