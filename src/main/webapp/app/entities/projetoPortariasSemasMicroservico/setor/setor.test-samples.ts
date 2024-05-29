import dayjs from 'dayjs/esm';

import { ISetor, NewSetor } from './setor.model';

export const sampleWithRequiredData: ISetor = {
  id: 16190,
  nome: 'aw',
};

export const sampleWithPartialData: ISetor = {
  id: 21976,
  nome: 'molder maunder',
  deletedAt: dayjs('2024-05-29T07:06'),
};

export const sampleWithFullData: ISetor = {
  id: 6308,
  nome: 'aha majestically playfully',
  sigla: 'defiantly aw',
  createdAt: dayjs('2024-05-28T19:23'),
  updatedAt: dayjs('2024-05-28T14:40'),
  deletedAt: dayjs('2024-05-29T01:45'),
};

export const sampleWithNewData: NewSetor = {
  nome: 'an monthly',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
