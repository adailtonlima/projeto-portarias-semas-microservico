import dayjs from 'dayjs/esm';
import { IPerfil } from 'app/entities/projetoPortariasSemasMicroservico/perfil/perfil.model';
import { ISetor } from 'app/entities/projetoPortariasSemasMicroservico/setor/setor.model';

export interface IUsuario {
  id: number;
  nome?: string | null;
  login?: string | null;
  email?: string | null;
  cpf?: string | null;
  createdAt?: dayjs.Dayjs | null;
  updatedAt?: dayjs.Dayjs | null;
  deletedAt?: dayjs.Dayjs | null;
  perfil?: IPerfil | null;
  setor?: ISetor | null;
}

export type NewUsuario = Omit<IUsuario, 'id'> & { id: null };
