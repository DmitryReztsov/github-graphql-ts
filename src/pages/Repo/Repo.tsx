import { useNavigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Container from '../../components/Container/Container.tsx';
import { useGetRepoQuery } from '../../app/services/repos/get-repo.query.generated.ts';
import RepoCard from '../../components/RepoCard/RepoCard.tsx';
import { Repository } from '../../app/services/types.generated.ts';
import Button from '../../uikit/Button/Button.tsx';

import styles from './styles.module.scss';

const Repo = () => {
  const navigate = useNavigate();

  const { name = '', owner = '' } = useParams();
  const { data, isLoading, error } = useGetRepoQuery({ name, owner });

  const repo = data?.repository as Repository;

  if (isLoading) {
    return (
      <Container>
        Loading...
      </Container>
    )
  }

  if (error) {
    return (
      <Container>
        {error.name}
      </Container>
    )
  }

  return (
    <div className={styles.repo}>
      <Helmet
        title={name}
      />
      <Container>
        <RepoCard
          repo={repo}
        />
        <Button
          onClick={() => navigate(-1)}
          className={styles.button}
        >
          Go back
        </Button>
      </Container>
    </div>
  );
};

export default Repo;
