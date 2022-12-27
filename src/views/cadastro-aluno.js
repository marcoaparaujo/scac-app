import React from 'react';

import Stack from '@mui/material/Stack';

import Card from '../components/card';
import FormGroup from '../components/form-group';

import { mensagemSucesso } from '../components/toastr';

import '../custom.css';

class CadastroAluno extends React.Component {
  state = {
    matricula: '',
    nome: '',
    email: '',
    celular: '',
    curso: '',
  };

  cadastrar = () => {
    mensagemSucesso(`Aluno ${this.state.nome} cadastrado com sucesso!`);
  };

  cancelar = () => {
    this.setState({
      matricula: '',
      nome: '',
      email: '',
      celular: '',
      curso: '',
    });
  };

  render() {
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
                    value={this.state.matricula}
                    className='form-control'
                    name='matricula'
                    onChange={(e) =>
                      this.setState({ matricula: e.target.value })
                    }
                  />
                </FormGroup>
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
                <FormGroup label='Curso: *' htmlFor='selectCurso'>
                  <select
                    class='form-select'
                    id='selectCurso'
                    name='curso'
                    value={this.state.curso}
                    onChange={(e) => this.setState({ curso: e.target.value })}
                  >
                    <option></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
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

export default CadastroAluno;
