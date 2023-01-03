import React from 'react';

import ListagemUsuarios from './views/listagem-usuarios';
import ListagemCursos from './views/listagem-cursos';
import ListagemProfessores from './views/listagem-professores';
import ListagemAlunos from './views/listagem-alunos';
import ListagemCategorias from './views/listagem-categorias';
import ListagemAtividadesComplementares from './views/listagem-atividades-complementares';
import AcompanhamentoAtividadesComplementares from './views/acompanhamento-atividades-complementares';

import Login from './views/login';
import CadastroUsuario from './views/cadastro-usuario';
import CadastroCurso from './views/cadastro-curso';
import CadastroProfessor from './views/cadastro-professor';
import CadastroAluno from './views/cadastro-aluno';
import CadastroCategoria from './views/cadastro-categoria';
import CadastroAtividadeComplementar from './views/cadastro-atividade-complementar';

import { Route, Routes, BrowserRouter } from 'react-router-dom';

function Rotas(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route
          path='/cadastro-usuarios/:idParam?'
          element={<CadastroUsuario />}
        />
        <Route path='/cadastro-cursos/:idParam?' element={<CadastroCurso />} />
        <Route
          path='/cadastro-professores/:idParam?'
          element={<CadastroProfessor />}
        />
        <Route path='/cadastro-alunos/:idParam?' element={<CadastroAluno />} />
        <Route
          path='/cadastro-categorias/:idParam?'
          element={<CadastroCategoria />}
        />
        <Route
          path='/cadastro-atividades-complementares/:idParam?'
          element={<CadastroAtividadeComplementar />}
        />
        <Route path='/listagem-usuarios' element={<ListagemUsuarios />} />
        <Route path='/listagem-cursos' element={<ListagemCursos />} />
        <Route path='/listagem-professores' element={<ListagemProfessores />} />
        <Route path='/listagem-alunos' element={<ListagemAlunos />} />
        <Route path='/listagem-categorias' element={<ListagemCategorias />} />
        <Route
          path='/listagem-atividades-complementares'
          element={<ListagemAtividadesComplementares />}
        />
        <Route
          path='/acompanhamento-atividades-complementares'
          element={<AcompanhamentoAtividadesComplementares />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
