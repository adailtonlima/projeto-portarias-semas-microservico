import dayjs from 'dayjs/esm';

import { ITopico, NewTopico } from './topico.model';

export const sampleWithRequiredData: ITopico = {
  id: 'bd1ebd6d-d5ac-4546-8b99-6044e8074e4c',
  titulo: 'pause ceiling',
  createdAt: dayjs('2024-05-29T09:09'),
};

export const sampleWithPartialData: ITopico = {
  id: '7253f17c-4ffc-4572-9a1a-2885de2f3d19',
  titulo: 'without',
  conteudo: '../fake-data/blob/hipster.txt',
  ativo: false,
  createdAt: dayjs('2024-05-28T18:24'),
  deletedAt: dayjs('2024-05-28T22:06'),
};

export const sampleWithFullData: ITopico = {
  id: 'd39b6554-b501-40e5-ada1-45adf5f665b0',
  titulo: 'gracefully',
  conteudo: '../fake-data/blob/hipster.txt',
  ativo: true,
  createdAt: dayjs('2024-05-29T13:58'),
  updatedAt: dayjs('2024-05-28T15:47'),
  deletedAt: dayjs('2024-05-28T17:13'),
};

export const sampleWithNewData: NewTopico = {
  titulo: 'especially shrilly after',
  createdAt: dayjs('2024-05-29T00:37'),
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
