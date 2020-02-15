import { request } from "graphql-request";
import { endpoint } from ".";

interface SignupData {
  signup: boolean;
}

export const signupMutation = async (email: string, password: string) => {
  const query = `
  mutation Signup($input: SignupInput!) {
    signup(input: $input)
  }
  `;
  const variables = {
    input: {
      email,
      password
    }
  };
  return request<SignupData>(endpoint, query, variables);
};
