import SearchInput from '../../uikit/SearchInput/SearchInput.tsx';

import styles from './styles.module.scss';
import RepoList from '../../components/RepoList/RepoList.tsx';
import { useGetReposQuery } from '../../app/services/repos/get-repos.query.generated.ts';
import { Repository } from '../../app/services/types.generated.ts';
import { useState } from 'react';
import { Helmet } from 'react-helmet';

const Repos = () => {
  const [searchText, setSearchText] = useState('123');

  const { data, isLoading, error } = useGetReposQuery({ name: searchText });

  return (
    <div className={styles.repos}>
      <Helmet
        title="Search repository"
      />
      <div className={styles.container}>
        <SearchInput
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder={'Search...'}
          className={styles.input}
        />
        <RepoList
          repos={data?.search?.edges!.map((edge) => edge.node) as Repository []}
          isLoading={isLoading}
          error={error}
        />
      </div>
    </div>
  );
};

export default Repos;
