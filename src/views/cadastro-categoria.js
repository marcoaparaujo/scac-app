import React from 'react';

import Stack from '@mui/material/Stack';

import Card from '../components/card';
import FormGroup from '../components/form-group';

import { mensagemSucesso } from '../components/toastr';

import '../custom.css';

class CadastroCategoria extends React.Component {
  state = {
    descricao: '',
    cargaHorariaMinima: '',
    cargaHorariaMaxima: '',
    quantidadeMinimaCategoria: '',
  };

  cadastrar = () => {
    mensagemSucesso(
      `Categoria ${this.state.descricao} cadastrada com sucesso!`
    );
  };

  cancelar = () => {
    this.setState({
      descricao: '',
      cargaHorariaMinima: '',
      cargaHorariaMaxima: '',
      quantidadeMinimaCategoria: '',
    });
  };

  render() {
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
                    value={this.state.descricao}
                    className='form-control'
                    name='descricao'
                    onChange={(e) =>
                      this.setState({ descricao: e.target.value })
                    }
                  />
                </FormGroup>
                <FormGroup
                  label='Carga Horária Mínima: *'
                  htmlFor='inputCargaHorariaMinima'
                >
                  <input
                    type='text'
                    id='inputCargaHorariaMinima'
                    value={this.state.cargaHorariaMinima}
                    className='form-control'
                    name='celular'
                    onChange={(e) =>
                      this.setState({ cargaHorariaMinima: e.target.value })
                    }
                  />
                </FormGroup>
                <FormGroup
                  label='Carga Horária Máxima: *'
                  htmlFor='inputCargaHorariaMaxima'
                >
                  <input
                    type='text'
                    id='inputCargaHorariaMaxima'
                    value={this.state.cargaHorariaMaxima}
                    className='form-control'
                    name='celular'
                    onChange={(e) =>
                      this.setState({ cargaHorariaMaxima: e.target.value })
                    }
                  />
                </FormGroup>
                <FormGroup
                  label='Quantidade Mínima Categoria: *'
                  htmlFor='inputQuantidadeMinimaCategoria'
                >
                  <input
                    type='text'
                    id='inputQuantidadeMinimaCategoria'
                    value={this.state.quantidadeMinimaCategoria}
                    className='form-control'
                    name='celular'
                    onChange={(e) =>
                      this.setState({
                        quantidadeMinimaCategoria: e.target.value,
                      })
                    }
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

export default CadastroCategoria;
