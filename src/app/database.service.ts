import { Injectable } from '@angular/core';
import  {AWSAppSyncClient, AUTH_TYPE} from "aws-appsync";

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  client = null;

  constructor() {
    this.client= new AWSAppSyncClient({
      url: 'https://v4hoyc5jvjbaxfcv3r53zy5egi.appsync-api.ap-southeast-2.amazonaws.com/graphql',
      region: 'ap-southeast-2',
      auth: {
        type: 'API_KEY',
        apiKey: 'da2-ucptpiwpozesldld5widfx55d4',
      }
    });
   }
}
