export interface Notification {
  isNew: boolean;
  thankYouSent: boolean;
  date: number;
  toAssociate: object;
  fromAssociate: object;
  sparkType: string;
  message: string;
}
