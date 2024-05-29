import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'topico',
    data: { pageTitle: 'Topicos' },
    loadChildren: () => import('./projetoPortariasSemasMicroservico/topico/topico.routes'),
  },
  {
    path: 'ajuda',
    data: { pageTitle: 'Ajudas' },
    loadChildren: () => import('./projetoPortariasSemasMicroservico/ajuda/ajuda.routes'),
  },
  {
    path: 'portaria',
    data: { pageTitle: 'Portarias' },
    loadChildren: () => import('./projetoPortariasSemasMicroservico/portaria/portaria.routes'),
  },
  {
    path: 'assunto',
    data: { pageTitle: 'Assuntos' },
    loadChildren: () => import('./projetoPortariasSemasMicroservico/assunto/assunto.routes'),
  },
  {
    path: 'setor',
    data: { pageTitle: 'Setors' },
    loadChildren: () => import('./projetoPortariasSemasMicroservico/setor/setor.routes'),
  },
  {
    path: 'perfil',
    data: { pageTitle: 'Perfils' },
    loadChildren: () => import('./projetoPortariasSemasMicroservico/perfil/perfil.routes'),
  },
  {
    path: 'usuario',
    data: { pageTitle: 'Usuarios' },
    loadChildren: () => import('./projetoPortariasSemasMicroservico/usuario/usuario.routes'),
  },
  /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
];

export default routes;
