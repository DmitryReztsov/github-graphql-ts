import styles from './styles.module.scss';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Repo = () => {
  const { repo, owner } = useParams();
  return (
    <div className={styles.repo}>
      <Helmet
        title="Repository"
      />
      {repo}
    </div>
  );
};

export default Repo;
