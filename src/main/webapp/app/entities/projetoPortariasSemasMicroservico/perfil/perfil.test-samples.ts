import { IPerfil, NewPerfil } from './perfil.model';

export const sampleWithRequiredData: IPerfil = {
  id: 28966,
  nome: 'what fiercely',
};

export const sampleWithPartialData: IPerfil = {
  id: 32052,
  nome: 'symptomize blemish yet',
};

export const sampleWithFullData: IPerfil = {
  id: 31269,
  nome: 'curvy',
  descricao: 'extort congressperson broadly',
};

export const sampleWithNewData: NewPerfil = {
  nome: 'inasmuch image intimidate',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
