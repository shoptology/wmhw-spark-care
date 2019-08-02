import { SparkType } from './spark-types';
import { Associate } from './associate';

export interface SparkType {
  isNew: boolean;
  thankYouSent: boolean;
  date: number;
  toAssociate: Associate;
  fromAssociate: string;
  type: SparkType;
  message: string;
}
