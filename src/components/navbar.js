import React from 'react';
import 'bootswatch/dist/flatly/bootstrap.css';

import NavbarItem from './navbarItem';

function Navbar(props) {
  return (
    <div className='navbar navbar-expand-lg fixed-top navbar-dark bg-primary'>
      <div className='container'>
        <a href='/' className='navbar-brand'>
          SCAC
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarResponsive'
          aria-controls='navbarResponsive'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarResponsive'>
          <ul className='navbar-nav'>
            <NavbarItem
              render='true'
              href='/listagem-usuarios'
              label='Usuários'
            />
          </ul>
          <ul className='navbar-nav'>
            <NavbarItem render='true' href='/listagem-cursos' label='Cursos' />
          </ul>
          <ul className='navbar-nav'>
            <NavbarItem
              render='true'
              href='/listagem-professores'
              label='Professores'
            />
          </ul>
          <ul className='navbar-nav'>
            <NavbarItem render='true' href='/listagem-alunos' label='Alunos' />
          </ul>
          <ul className='navbar-nav'>
            <NavbarItem
              render='true'
              href='/listagem-categorias'
              label='Categorias'
            />
          </ul>
          <ul className='navbar-nav'>
            <NavbarItem
              render='true'
              href='/listagem-atividades-complementares'
              label='Atividades'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
