import { request } from "graphql-request";
import { endpoint } from ".";

interface LoginData {
  login: {
    accessToken: string;
  };
}

export const loginMutation = async (email: string, password: string) => {
  const query = `
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      accessToken
    }
  }
  `;
  const variables = {
    input: {
      email,
      password
    }
  };
  return request<LoginData>(endpoint, query, variables);
};
