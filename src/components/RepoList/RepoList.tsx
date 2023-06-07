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
}

const RepoList: FC<RepoListProps> = ({ repos, isLoading, error }) => {

  if (isLoading) {
    return 'Loading...'
  }

  if (error) {
    return error.name
  }

  return (
    <ul className={styles.repoList}>
      {repos.map((repo) => <RepoItem key={repo?.id} repo={repo} />)}
    </ul>
  );
};

export default RepoList;
