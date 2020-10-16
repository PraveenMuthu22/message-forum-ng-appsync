import { Injectable } from '@angular/core';
import { AWSAppSyncClient, AUTH_TYPE } from 'aws-appsync';
import { GetAllQuery } from './graphql/queries/Queries';
import { IMessage } from './Models/IMessage';
import { IgetAllMessagesResponse } from './Models/IResponses';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private client = null;
  messages: Observable<IMessage[]>;
  constructor() {
    this.client = new AWSAppSyncClient({
      url: 'https://v4hoyc5jvjbaxfcv3r53zy5egi.appsync-api.ap-southeast-2.amazonaws.com/graphql',
      region: 'ap-southeast-2',
      auth: {
        type: 'API_KEY',
        apiKey: 'da2-ucptpiwpozesldld5widfx55d4',
      }
    });
  }

  loadTasks(): Observable<any> {
    const query = GetAllQuery;
    const result = from(
      this.client.query({
        query, fetchPolicy: 'network-only'
      })
    );
    return result;
  }
}
