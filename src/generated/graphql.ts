import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Pet = {
  __typename?: 'Pet';
  age: Scalars['Float'];
  name: Scalars['ID'];
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  pets: Array<Pet>;
  users: Array<User>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  pets: Array<Pet>;
  updatedAt: Scalars['DateTime'];
};

export type GetPetsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPetsQuery = { __typename?: 'Query', pets: Array<{ __typename?: 'Pet', type: string, name: string, age: number, owner: string }> };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string, name: string, email: string, createdAt: any, updatedAt: any, pets: Array<{ __typename?: 'Pet', name: string, type: string, owner: string, age: number }> }> };


export const GetPetsDocument = gql`
    query getPets {
  pets {
    type
    name
    age
    owner
  }
}
    `;
export const GetUsersDocument = gql`
    query getUsers {
  users {
    id
    name
    email
    pets {
      name
      type
      owner
      age
    }
    createdAt
    updatedAt
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getPets(variables?: GetPetsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetPetsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetPetsQuery>(GetPetsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getPets', 'query');
    },
    getUsers(variables?: GetUsersQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUsersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUsersQuery>(GetUsersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getUsers', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;