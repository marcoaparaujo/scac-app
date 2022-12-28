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
      label: 'Obrigatório',
      data: [60],
      borderColor: 'rgb(75, 192, 192)',
      backgroundColor: 'rgba(75, 192, 192, 0.5)',
    },
    {
      label: 'Não Obrigatório',
      data: [40],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export const dadosGraficoDoughnut = {
  labels: ['Cumprido', 'A cumprir'],
  datasets: [
    {
      label: 'Horas Estágio Obrigatório',
      data: [60, 40],
      backgroundColor: ['rgba(75, 192, 192, 0.5)', 'rgba(255, 99, 132, 0.5)'],
      borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
      borderWidth: 2,
    },
  ],
};

function createData(
  id,
  concedente,
  tipoEstagio,
  dataInicio,
  dataFim,
  cargaHoraria
) {
  return { id, concedente, tipoEstagio, dataInicio, dataFim, cargaHoraria };
}

class AcompanhamentoAtividadesComplementares extends React.Component {
  state = {
    aluno: '',
    dados: [
      createData(
        1,
        'Concedente 1',
        'Obrigatório',
        '11/11/1111',
        '11/11/1111',
        '15'
      ),
      createData(
        2,
        'Concedente 2',
        'Obrigatório',
        '11/11/1111',
        '11/11/1111',
        '15'
      ),
      createData(
        3,
        'Concedente 3',
        'Obrigatório',
        '11/11/1111',
        '11/11/1111',
        '15'
      ),
      createData(
        4,
        'Concedente 4',
        'Obrigatório',
        '11/11/1111',
        '11/11/1111',
        '15'
      ),
      createData(
        5,
        'Concedente 5',
        'Não Obrigatório',
        '11/11/1111',
        '11/11/1111',
        '40'
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
                  <h5>Estágio Obrigatório:</h5>
                  <h6>Total de Horas Exigidas: 100</h6>
                  <h6>Total de Horas Cumpridas: 60</h6>
                  <h6>Total de Horas a Cumprir: 40</h6>
                </div>
                <div className='col-lg-2'>
                  <Doughnut data={dadosGraficoDoughnut} />
                </div>
                <div className='col-lg-3'>
                  <h5>Estágio Não Obrigatório:</h5>
                  <h6>Total de Horas Cumpridas: 40</h6>
                </div>
                <div className='col-lg-3'>
                  <Bar options={options} data={data} />
                </div>
              </div>
              <br></br>
              <table className='table table-hover'>
                <thead>
                  <tr>
                    <th scope='col'>Concedente</th>
                    <th scope='col'>Tipo Estágio</th>
                    <th scope='col'>Data Início</th>
                    <th scope='col'>Data Fim</th>
                    <th scope='col'>Carga Horária</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.dados.map((dado) => (
                    <tr key={dado.id}>
                      <td>{dado.concedente}</td>
                      <td>{dado.tipoEstagio}</td>
                      <td>{dado.dataInicio}</td>
                      <td>{dado.dataFim}</td>
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
