import { IMessage } from './IMessage';

export interface IgetAllMessagesResponse {
  data: {
    listPraveenTestMessages: {
      items: IMessage[];
    }
  };
}