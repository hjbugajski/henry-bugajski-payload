import { RowLabelArgs } from 'payload/dist/admin/components/forms/RowLabel/types';
import { Data } from 'payload/types';

const getField = (data: Data, path: string) => path.split('.').reduce((value, part) => value?.[part], data);

export default function RowLabel(path: string, fallback: string) {
  return ({ data, index }: RowLabelArgs) => getField(data, path) || `${fallback} ${String(index).padStart(2, '0')}`;
}
