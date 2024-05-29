import dayjs from 'dayjs/esm';

import { IAssunto, NewAssunto } from './assunto.model';

export const sampleWithRequiredData: IAssunto = {
  id: 22868,
  nome: 'measly',
};

export const sampleWithPartialData: IAssunto = {
  id: 10274,
  nome: 'inventory powerless',
  createdAt: dayjs('2024-05-29T01:03'),
};

export const sampleWithFullData: IAssunto = {
  id: 20587,
  nome: 'drowse',
  descricao: '../fake-data/blob/hipster.txt',
  createdAt: dayjs('2024-05-29T09:51'),
  updatedAt: dayjs('2024-05-29T06:00'),
  deletedAt: dayjs('2024-05-29T02:31'),
};

export const sampleWithNewData: NewAssunto = {
  nome: 'hm daring centurion',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
