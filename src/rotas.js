import React from 'react';

import ListagemUsuarios from './views/listagem-usuarios';
import ListagemCursos from './views/listagem-cursos';
import ListagemProfessores from './views/listagem-professores';
import ListagemAlunos from './views/listagem-alunos';

import CadastroUsuario from './views/cadastro-usuario';
import CadastroCurso from './views/cadastro-curso';
import CadastroProfessor from './views/cadastro-professor';
import CadastroAluno from './views/cadastro-aluno';

import { Route, Routes, BrowserRouter } from 'react-router-dom';

function Rotas(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/cadastro-usuarios' element={<CadastroUsuario />} />
        <Route path='/cadastro-cursos' element={<CadastroCurso />} />
        <Route path='/cadastro-professores' element={<CadastroProfessor />} />
        <Route path='/cadastro-alunos' element={<CadastroAluno />} />
        <Route path='/listagem-usuarios' element={<ListagemUsuarios />} />
        <Route path='/listagem-cursos' element={<ListagemCursos />} />
        <Route path='/listagem-professores' element={<ListagemProfessores />} />
        <Route path='/listagem-alunos' element={<ListagemAlunos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
