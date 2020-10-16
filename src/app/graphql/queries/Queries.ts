import gql from 'graphql-tag';

export const GetAllQuery = gql(`
  query {
    listPraveenTestMessages {
      items {
        Message
        Rating
        Timestamp
        TopicId
        UserId
      }
    }
  }`
 );