import { GraphQLClient } from "graphql-request";
import { getAccessToken } from "../storage";
import { endpoint } from ".";

interface UserData {
  user: {
    email: string;
  } | null;
}

let promise: Promise<UserData> | undefined;

export const getUserQuery = async () => {
  if (promise) {
    return promise;
  }
  const accessToken = getAccessToken();
  if (!accessToken) {
    return {
      user: null
    };
  }
  const query = `
  query User {
    user {
      email
    }
  }
  `;
  const client = new GraphQLClient(endpoint, {});
  client.setHeader("Authorization", `Bearer ${accessToken}`);
  promise = client.request<UserData>(query);
  return promise;
};
