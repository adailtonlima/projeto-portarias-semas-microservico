import dayjs from 'dayjs/esm';

import { IPortaria, NewPortaria } from './portaria.model';

export const sampleWithRequiredData: IPortaria = {
  id: 8758,
  numero: 25841,
};

export const sampleWithPartialData: IPortaria = {
  id: 24353,
  numero: 8704,
  dataFim: dayjs('2024-05-29'),
  justificativaExclusao: 'register yahoo',
  updatedAt: dayjs('2024-05-28T17:26'),
  deletedAt: dayjs('2024-05-29T09:37'),
};

export const sampleWithFullData: IPortaria = {
  id: 14826,
  numero: 9787,
  data: dayjs('2024-05-29'),
  dataInicio: dayjs('2024-05-29'),
  dataFim: dayjs('2024-05-29'),
  ano: 16926,
  justificativaExclusao: 'seldom for smile',
  createdAt: dayjs('2024-05-29T08:17'),
  updatedAt: dayjs('2024-05-29T11:40'),
  deletedAt: dayjs('2024-05-29T10:25'),
};

export const sampleWithNewData: NewPortaria = {
  numero: 14265,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
