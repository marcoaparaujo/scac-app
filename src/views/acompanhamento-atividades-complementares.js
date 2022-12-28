import React from 'react';

import Card from '../components/card';
import FormGroup from '../components/form-group';

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';

import '../custom.css';

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
  },
};

const labels = ['Horas'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Categoria 1',
      data: [45],
      borderColor: 'rgb(75, 192, 192)',
      backgroundColor: 'rgba(75, 192, 192, 0.5)',
    },
    {
      label: 'Categoria 2',
      data: [30],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export const dadosGraficoDoughnut = {
  labels: ['Cumprido', 'A cumprir'],
  datasets: [
    {
      label: 'Horas',
      data: [75, 25],
      backgroundColor: ['rgba(75, 192, 192, 0.5)', 'rgba(255, 99, 132, 0.5)'],
      borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
      borderWidth: 2,
    },
  ],
};

function createData(id, titulo, entidade, categoria, dataInicio, cargaHoraria) {
  return { id, titulo, entidade, categoria, dataInicio, cargaHoraria };
}

class AcompanhamentoAtividadesComplementares extends React.Component {
  state = {
    aluno: '',
    dados: [
      createData(
        1,
        'Título 1',
        'Entidade 1',
        'Categoria 1',
        '11/11/1111',
        '15'
      ),
      createData(
        2,
        'Título 2',
        'Entidade 2',
        'Categoria 1',
        '11/11/1111',
        '15'
      ),
      createData(
        3,
        'Título 3',
        'Entidade 3',
        'Categoria 1',
        '11/11/1111',
        '15'
      ),
      createData(
        4,
        'Título 4',
        'Entidade 4',
        'Categoria 2',
        '11/11/1111',
        '15'
      ),
      createData(
        5,
        'Título 5',
        'Entidade 5',
        'Categoria 2',
        '11/11/1111',
        '15'
      ),
    ],
  };

  render() {
    return (
      <div className='container'>
        <Card title='Acompanhamento de Atividades Complementares'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='bs-component'></div>
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
              <br></br>
              <div className='row'>
                <div className='col-lg-3'>
                  <h5>Atividades Complementares:</h5>
                  <h6>Total de Horas Exigidas: 100</h6>
                  <h6>Total de Horas Cumpridas: 75</h6>
                  <h6>Total de Horas a Cumprir: 25</h6>
                </div>
                <div className='col-lg-2'>
                  <Doughnut data={dadosGraficoDoughnut} />
                </div>
                <div className='col-lg-3'>
                  <Bar options={options} data={data} />
                </div>
              </div>
              <br></br>
              <table className='table table-hover'>
                <thead>
                  <tr>
                    <th scope='col'>Título</th>
                    <th scope='col'>Entidade</th>
                    <th scope='col'>Categoria</th>
                    <th scope='col'>Data Início</th>
                    <th scope='col'>Carga Horária</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.dados.map((dado) => (
                    <tr key={dado.id}>
                      <td>{dado.titulo}</td>
                      <td>{dado.entidade}</td>
                      <td>{dado.categoria}</td>
                      <td>{dado.dataInicio}</td>
                      <td>{dado.cargaHoraria}</td>
                    </tr>
                  ))}
                </tbody>
              </table>{' '}
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

export default AcompanhamentoAtividadesComplementares;
