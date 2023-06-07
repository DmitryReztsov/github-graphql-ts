import { createApi } from '@reduxjs/toolkit/query/react'
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query'
import { GraphQLClient } from 'graphql-request';

const API_URL = 'https://api.github.com/graphql'
const TOKEN = import.meta.env.VITE_GITHUB_TOKEN

export const client = new GraphQLClient(API_URL);

client.setHeader("authorization", `Bearer ${TOKEN}`);

export const api = createApi({
  baseQuery: graphqlRequestBaseQuery({ client }),
  endpoints: () => ({}),
})
