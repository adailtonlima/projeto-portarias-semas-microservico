import dayjs from 'dayjs/esm';

import { IUsuario, NewUsuario } from './usuario.model';

export const sampleWithRequiredData: IUsuario = {
  id: 15066,
  nome: 'referee warlike proud',
};

export const sampleWithPartialData: IUsuario = {
  id: 3363,
  nome: 'hence er incidentally',
  createdAt: dayjs('2024-05-28T21:59'),
  updatedAt: dayjs('2024-05-29T11:29'),
  deletedAt: dayjs('2024-05-28T20:20'),
};

export const sampleWithFullData: IUsuario = {
  id: 30157,
  nome: 'doubt famously tremendously',
  login: 'aha than crossly',
  email: 'Serenity_Hermann0@gmail.com',
  cpf: 'now rebuff',
  createdAt: dayjs('2024-05-28T15:04'),
  updatedAt: dayjs('2024-05-28T23:47'),
  deletedAt: dayjs('2024-05-29T04:19'),
};

export const sampleWithNewData: NewUsuario = {
  nome: 'promptly',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
