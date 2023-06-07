/* eslint-disable */ /**
 *
 * THIS FILE IS AUTOGENERATED, DO NOT EDIT IT!
 *
 * instead, edit one of the `.graphql` files in this project and run
 *
 * npm run graphql-codegen
 *
 * for this file to be re-created
 */

import * as Types from '../types.generated';

import.meta.webpackHot?.accept();
import { api } from '../baseApi';
export type GetReposQueryVariables = Types.Exact<{
  name: Types.Scalars['String']['input'];
}>;


export type GetReposQuery = { __typename?: 'Query', search: { __typename?: 'SearchResultItemConnection', repositoryCount: number, edges?: Array<{ __typename?: 'SearchResultItemEdge', cursor: string, node?: { __typename?: 'App' } | { __typename?: 'Discussion' } | { __typename?: 'Issue' } | { __typename?: 'MarketplaceListing' } | { __typename?: 'Organization' } | { __typename?: 'PullRequest' } | { __typename?: 'Repository', id: string, name: string, url: any, stargazerCount: number, owner: { __typename?: 'Organization', login: string } | { __typename?: 'User', login: string }, defaultBranchRef?: { __typename?: 'Ref', name: string, target?: { __typename?: 'Blob' } | { __typename?: 'Commit', id: string, history: { __typename?: 'CommitHistoryConnection', edges?: Array<{ __typename?: 'CommitEdge', node?: { __typename?: 'Commit', committedDate: any, id: string } }> } } | { __typename?: 'Tag' } | { __typename?: 'Tree' } } } | { __typename?: 'User' } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: string, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string } } };


export const GetReposDocument = `
    query getRepos($name: String!) {
  search(query: $name, type: REPOSITORY, first: 10) {
    edges {
      cursor
      node {
        ... on Repository {
          id
          name
          url
          stargazerCount
          owner {
            login
          }
          defaultBranchRef {
            name
            target {
              ... on Commit {
                id
                history(first: 1) {
                  edges {
                    node {
                      committedDate
                      id
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    repositoryCount
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
  }
}
    `;

const injectedRtkApi = api.injectEndpoints({
  overrideExisting: import.meta.webpackHot?.status() === "apply",
  endpoints: (build) => ({
    getRepos: build.query<GetReposQuery, GetReposQueryVariables>({
      query: (variables) => ({ document: GetReposDocument, variables })
    }),
  }),
});

export { injectedRtkApi as api };
export const { useGetReposQuery, useLazyGetReposQuery } = injectedRtkApi;
