import { FC } from 'react';
import { Repository } from '../../app/services/types.generated.ts';
import { ErrorResponse } from '@rtk-query/graphql-request-base-query/dist/GraphqlBaseQueryTypes';
import { SerializedError } from '@reduxjs/toolkit';
import styles from './styles.module.scss';
import RepoItem from './RepoItem.tsx';

interface RepoListProps {
  repos: Repository [],
  isLoading: boolean,
  error?: ErrorResponse | SerializedError,
  totalCount: number,
}

const RepoList: FC<RepoListProps> = ({ repos, isLoading, error, totalCount }) => {

  if (isLoading) {
    return 'Loading...'
  }

  if (error) {
    return error.name
  }

  if (!totalCount && !isLoading) {
    return (
      <div>
        No data for this search query
      </div>
    )
  }

  return (
    <>
      {!!totalCount && !isLoading && (
        <div>
          {`${totalCount} results`}
        </div>
      )}
      <ul className={styles.repoList}>
        {repos.map((repo) => <RepoItem key={repo?.id} repo={repo} />)}
      </ul>
    </>
  );
};

export default RepoList;
