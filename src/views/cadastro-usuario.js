import React from 'react';

import Stack from '@mui/material/Stack';

import Card from '../components/card';
import FormGroup from '../components/form-group';

import { mensagemSucesso } from '../components/toastr';

import '../custom.css';

class CadastroUsuario extends React.Component {
  state = {
    login: '',
    cpf: '',
    email: '',
    senha: '',
    senhaRepeticao: '',
    administrador: false,
  };

  cadastrar = () => {
    mensagemSucesso(`Usuário ${this.state.login} cadastrado com sucesso!`);
  };

  cancelar = () => {
    this.setState({
      login: '',
      cpf: '',
      celular: '',
      email: '',
      senha: '',
      senhaRepeticao: '',
      administrador: false,
    });
  };

  render() {
    return (
      <div className='container'>
        <Card title='Cadastro de Usuário'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='bs-component'>
                <FormGroup label='Login: *' htmlFor='inputLogin'>
                  <input
                    type='text'
                    id='inputLogin'
                    value={this.state.login}
                    className='form-control'
                    name='login'
                    onChange={(e) => this.setState({ login: e.target.value })}
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
                <FormGroup label='Senha: *' htmlFor='inputSenha'>
                  <input
                    type='password'
                    id='inputSenha'
                    value={this.state.senha}
                    className='form-control'
                    name='senha'
                    onChange={(e) => this.setState({ senha: e.target.value })}
                  />
                </FormGroup>
                <FormGroup label='Repita a Senha: *' htmlFor='inputRepitaSenha'>
                  <input
                    type='password'
                    id='inputRepitaSenha'
                    value={this.state.senhaRepeticao}
                    className='form-control'
                    name='senhaRepeticao'
                    onChange={(e) =>
                      this.setState({ senhaRepeticao: e.target.value })
                    }
                  />
                </FormGroup>
                <FormGroup>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    checked={this.state.administrador}
                    id='checkAdministrador'
                    name='administrador'
                    onChange={(e) =>
                      this.setState({ administrador: e.target.checked })
                    }
                  />
                  Administrador
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

export default CadastroUsuario;
