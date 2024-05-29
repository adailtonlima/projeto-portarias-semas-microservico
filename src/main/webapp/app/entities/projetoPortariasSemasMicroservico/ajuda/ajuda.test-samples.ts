import dayjs from 'dayjs/esm';

import { IAjuda, NewAjuda } from './ajuda.model';

export const sampleWithRequiredData: IAjuda = {
  id: 'ccd4398f-e03f-40ed-8d19-f09f58409049',
  titulo: 'drat mmm switching',
  createdAt: dayjs('2024-05-28T22:03'),
};

export const sampleWithPartialData: IAjuda = {
  id: '047aa274-be8e-4076-a2fc-c54c8898aa6d',
  titulo: 'appliance',
  ativo: false,
  createdAt: dayjs('2024-05-29T04:18'),
  updatedAt: dayjs('2024-05-28T21:48'),
};

export const sampleWithFullData: IAjuda = {
  id: 'c85d8e02-0b20-4a3c-9daa-e746d7be5f1a',
  titulo: 'gadzooks offence till',
  conteudo: '../fake-data/blob/hipster.txt',
  ativo: true,
  createdAt: dayjs('2024-05-29T01:08'),
  updatedAt: dayjs('2024-05-29T13:18'),
  deletedAt: dayjs('2024-05-28T22:55'),
};

export const sampleWithNewData: NewAjuda = {
  titulo: 'arid',
  createdAt: dayjs('2024-05-29T08:38'),
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
