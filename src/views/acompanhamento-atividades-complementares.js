import React, { useState, useEffect } from 'react';

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

import axios from 'axios';
import { BASE_URL } from '../config/axios';

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function AcompanhamentoAtividadesComplementares() {
  const options = {
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
    },
  };

  const labels = ['Horas'];

  const dadosGraficoBarras = {
    labels,
    datasets: [],
  };

  const dadosGraficoDoughnut = {
    labels: ['Cumprido', 'A cumprir'],
    datasets: [
      {
        label: '% Horas',
        data: [],
        backgroundColor: ['rgba(75, 192, 192, 0.5)', 'rgba(255, 99, 132, 0.5)'],
        borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
        borderWidth: 2,
      },
    ],
  };

  const [idAluno, setIdAluno] = useState(0);
  const [dadosAlunos, setDadosAlunos] = useState(null);
  const [dadosCurso, setDadosCurso] = useState([]);
  const [dadosAtividadesComplementares, setDadosAtividadesComplementares] =
    useState([]);

  let objAluno = {};

  useEffect(() => {
    const baseURL = `${BASE_URL}/alunos`;
    axios.get(baseURL).then((response) => {
      setDadosAlunos(response.data);
    });
  }, []);

  useEffect(() => {
    if (idAluno != 0) {
      const baseURL = `${BASE_URL}/alunos/${idAluno}/atividadescomplementares`;
      axios.get(baseURL).then((response) => {
        setDadosAtividadesComplementares(response.data);
      });
    } else {
      objAluno = null;
      setDadosAtividadesComplementares([]);
      setDadosCurso([]);
    }
  }, [idAluno]);

  useEffect(() => {
    if (objAluno !== null) {
      const baseURL = `${BASE_URL}/cursos/${objAluno.idCurso}`;
      axios.get(baseURL).then((response) => {
        setDadosCurso(response.data);
      });
    }
  }, [idAluno]);

  if (!dadosAlunos) return null;
  if (!dadosAtividadesComplementares) return null;
  if (!dadosCurso) return null;

  // eslint-disable-next-line
  objAluno = dadosAlunos.find((el) => el.id == idAluno);

  const somaAtividadesComplementares = dadosAtividadesComplementares.reduce(
    (soma, atividadeComplementar) => soma + atividadeComplementar.cargaHoraria,
    0
  );

  let totalHorasCumprirAtividadesComplementares = Number.isNaN(
    parseInt(dadosCurso.cargaHorariaMinimaAtividadesComplementares)
  )
    ? 0
    : dadosCurso.cargaHorariaMinimaAtividadesComplementares -
      somaAtividadesComplementares;

  if (totalHorasCumprirAtividadesComplementares < 0) {
    totalHorasCumprirAtividadesComplementares = 0;
  }

  let percentualAtividadesComplementaresCumpridas =
    (somaAtividadesComplementares * 100) /
    dadosCurso.cargaHorariaMinimaAtividadesComplementares;

  if (percentualAtividadesComplementaresCumpridas > 100) {
    percentualAtividadesComplementaresCumpridas = 100;
  }

  const percentualAtividadesComplementaresCumprir =
    100 - percentualAtividadesComplementaresCumpridas;

  dadosGraficoDoughnut.datasets[0].data = [
    percentualAtividadesComplementaresCumpridas,
    percentualAtividadesComplementaresCumprir,
  ];

  let orderedList = [...dadosAtividadesComplementares];
  orderedList = orderedList.sort((a, b) => a.idCategoria - b.idCategoria);

  let i = 0;
  let idCategoriaQuebra;
  let nomeCategoria;
  while (i < orderedList.length) {
    let somaCargaHoraria = 0;
    idCategoriaQuebra = orderedList[i].idCategoria;
    while (
      i < orderedList.length &&
      orderedList[i].idCategoria == idCategoriaQuebra
    ) {
      nomeCategoria = orderedList[i].nomeCategoria;
      somaCargaHoraria = somaCargaHoraria + orderedList[i].cargaHoraria;
      i++;
    }
    let corR = Math.floor(Math.random() * 254) + 1;
    let corG = Math.floor(Math.random() * 254) + 1;
    let corB = Math.floor(Math.random() * 254) + 1;

    dadosGraficoBarras.datasets.push({
      label: nomeCategoria,
      data: [somaCargaHoraria],
      borderColor: `rgb(${corR}, ${corG}, ${corB})`,
      backgroundColor: `rgba(${corR}, ${corG}, ${corB}, 0.5)`,
    });
  }

  function formatarData(dataCalendario) {
    const partesData = dataCalendario.substr(0, 10).split('-');

    return partesData[2] + '/' + partesData[1] + '/' + partesData[0];
  }

  return (
    <div className='container'>
      <Card title='Acompanhamento de Atividades Complementares'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='bs-component'></div>
            <FormGroup label='Aluno:' htmlFor='selectAluno'>
              <select
                class='form-select'
                id='selectAluno'
                name='aluno'
                value={idAluno}
                onChange={(e) => setIdAluno(e.target.value)}
              >
                <option value='0'> </option>
                {dadosAlunos.map((dado) => (
                  <option key={dado.id} value={dado.id}>
                    {dado.nome}
                  </option>
                ))}
              </select>
            </FormGroup>
            <br></br>
            <div className='row'>
              <div className='col-lg-3'>
                <h5>Atividades Complementares:</h5>
                <h6>
                  Total de Horas Exigidas:{' '}
                  {dadosCurso.cargaHorariaMinimaAtividadesComplementares}
                </h6>
                <h6>
                  Total de Horas Cumpridas: {somaAtividadesComplementares}
                </h6>
                <h6>
                  Total de Horas a Cumprir:{' '}
                  {totalHorasCumprirAtividadesComplementares}
                </h6>
              </div>
              <div className='col-lg-2'>
                <Doughnut data={dadosGraficoDoughnut} />
              </div>
              <div className='col-lg-5'>
                <Bar options={options} data={dadosGraficoBarras} />
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
                {dadosAtividadesComplementares.map((atividadeComplementar) => (
                  <tr key={atividadeComplementar.id}>
                    <td>{atividadeComplementar.titulo}</td>
                    <td>{atividadeComplementar.entidadePromotora}</td>
                    <td>{atividadeComplementar.nomeCategoria}</td>
                    <td>{formatarData(atividadeComplementar.dataInicio)}</td>
                    <td>{atividadeComplementar.cargaHoraria}</td>
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

export default AcompanhamentoAtividadesComplementares;
