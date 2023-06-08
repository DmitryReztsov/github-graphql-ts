import SearchInput from '../../uikit/SearchInput/SearchInput.tsx';

import styles from './styles.module.scss';
import RepoList from '../../components/RepoList/RepoList.tsx';
import { useGetReposQuery } from '../../app/services/repos/get-repos.query.generated.ts';
import { Repository } from '../../app/services/types.generated.ts';
import { Helmet } from 'react-helmet';
import Container from '../../components/Container/Container.tsx';
import Paginator from '../../uikit/Paginator/Paginator.tsx';
import React, { useEffect, useState } from 'react';
import toBtoa from '../../utils/toBtoa.ts';
import { useSearchParams } from 'react-router-dom';
import { useGetViewerReposQuery } from '../../app/services/repos/get-viewer-repos.query.generated.ts';

const Repos = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchText, setSearchText] = useState('');
  const [activePage, setActivePage] = useState(1);

  const pageLength = searchText ? 10 : 100;

  const { data: searchData, isFetching: isSearchFetching, error: isSearchError } = useGetReposQuery({
    name: searchText || '',
    cursor: toBtoa(activePage),
    limit: pageLength,
  }, { skip: !searchText });

  const { data: userData, isFetching: isUserFetching, error: isUserError } = useGetViewerReposQuery({
    cursor: toBtoa(activePage),
    limit: pageLength,
  }, { skip: !!searchText });

  const isFetching = isSearchFetching || isUserFetching;
  const error = isSearchError || isUserError;

  const totalCount: number = (searchText
    ? searchData?.search?.repositoryCount
    : userData?.viewer.repositories.totalCount) || 0;

  const repos = searchText
    ? searchData?.search?.edges?.map((edge) => edge.node) as Repository []
    : userData?.viewer?.repositories?.edges?.map((edge) => edge.node) as Repository []
  ;

  const clickPage = (page: number) => {
    window.scrollTo(({
      top: 0,
      behavior: 'smooth'
    }));
    setActivePage(page);
  };

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setActivePage(1);
    setSearchText(e.target.value)
  }

  const isShowPaginator = !isFetching && totalCount > pageLength;

  useEffect(() => {
    setSearchText(searchParams.get('searchText') || '')
    setActivePage(+(searchParams.get('activePage') || 1))
  }, []);

  useEffect(() => {
    searchParams.set('searchText', searchText);
    setSearchParams(searchParams);
  }, [searchText]);

  useEffect(() => {
    searchParams.set('activePage', activePage.toString());
    setSearchParams(searchParams);
  }, [activePage]);

  return (
    <div className={styles.repos}>
      <Helmet
        title="Main page"
      />
      <Container>
        <div className={styles.content}>
          <SearchInput
            value={searchText || ''}
            onChange={handleChangeSearch}
            placeholder={'Search...'}
            className={styles.input}
          />
          <RepoList
            repos={repos}
            isLoading={isFetching}
            error={error}
            totalCount={totalCount}
          />
          {isShowPaginator && (
            <Paginator
              activePage={activePage}
              totalCount={totalCount}
              pageLength={pageLength}
              clickPage={clickPage}
            />
            )
          }
        </div>
      </Container>
    </div>
  );
};

export default Repos;
