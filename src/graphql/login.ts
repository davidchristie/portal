import { request } from "graphql-request";
import { gatewayUrl } from ".";

interface LoginData {
  login: {
    accessToken: string;
  };
}

export const loginMutation = async (email: string, password: string) => {
  const query = `
  mutation Login {
    login(input: { email: "davidchristie.nz@gmail.com", password: "yr2Q5xcn02Z6bMktbKiS" }) {
      accessToken
    }
  }
  `;
  const variables = { email, password };
  return request<LoginData>(gatewayUrl, query, variables);
};
