export interface Notification {
  isNew: boolean;
  thankYouSent: boolean;
  date: number; // stored as unix date ( number of seconds that have elapsed since January 1, 1970 (midnight UTC/GMT) )
  toAssociate: object;
  fromAssociate: object;
  sparkType: string;
  message: string;
}
