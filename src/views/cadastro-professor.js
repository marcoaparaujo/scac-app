import React from 'react';

import Stack from '@mui/material/Stack';

import Card from '../components/card';
import FormGroup from '../components/form-group';

import { mensagemSucesso } from '../components/toastr';

import '../custom.css';

class CadastroProfessor extends React.Component {
  state = {
    nome: '',
    cpf: '',
    email: '',
    celular: '',
  };

  cadastrar = () => {
    mensagemSucesso(`Professor ${this.state.nome} cadastrado com sucesso!`);
  };

  cancelar = () => {
    this.setState({
      nome: '',
      cpf: '',
      email: '',
      celular: '',
    });
  };

  render() {
    return (
      <div className='container'>
        <Card title='Cadastro de Professor'>
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
                <FormGroup label='CPF: *' htmlFor='inputCpf'>
                  <input
                    type='text'
                    id='inputCpf'
                    value={this.state.cpf}
                    className='form-control'
                    name='cpf'
                    onChange={(e) => this.setState({ cpf: e.target.value })}
                  />
                </FormGroup>
                <FormGroup label='Email: *' htmlFor='inputEmail'>
                  <input
                    type='email'
                    id='inputEmail'
                    value={this.state.email}
                    className='form-control'
                    name='email'
                    onChange={(e) => this.setState({ email: e.target.value })}
                  />
                </FormGroup>
                <FormGroup label='Celular:' htmlFor='inputCelular'>
                  <input
                    type='text'
                    id='inputCelular'
                    value={this.state.celular}
                    className='form-control'
                    name='celular'
                    onChange={(e) => this.setState({ celular: e.target.value })}
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

export default CadastroProfessor;
