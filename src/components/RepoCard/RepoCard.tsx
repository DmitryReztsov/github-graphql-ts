import { FC } from 'react';
import format from 'date-fns/format';
import { HiStar } from 'react-icons/hi';
import { Link } from 'react-router-dom';

import { Commit, Repository } from '../../app/services/types.generated.ts';
import Chip from '../../uikit/Chip/Chip.tsx';

import styles from './styles.module.scss';

interface RepoCardProps {
  repo: Repository,
}

const RepoCard: FC<RepoCardProps> = ({ repo }) => {

  const {
    name,
    stargazerCount,
    owner: { login, url, avatarUrl },
    defaultBranchRef,
    languages,
    description,
  } = repo;

  const languagesNodes = (languages?.edges || []).map(({node}) => node);

  const commit = defaultBranchRef?.target as Commit;
  const lastCommitDate = commit
    ? format(new Date(commit.committedDate ), 'dd-MM-yyyy HH:mm')
    : 'no data';

  return (
    <div className={styles.repoCard}>
      <div className={styles.header}>
        <div className={styles.left}>
          <h1>{name}</h1>
          <p>
            {`Last committed: ${lastCommitDate}`}
          </p>
        </div>
        <div className={styles.right}>
          <HiStar size={24} className={styles.icon} />
          {stargazerCount}
        </div>
      </div>
      <Link to={url} className={styles.author}>
        {avatarUrl && <img src={avatarUrl} alt="author-avatar"/>}
        {login}
      </Link>
      {!languagesNodes.length ? null : (
        <div className={styles.languages}>
          {languagesNodes.map(({ id, color, name }) => (
            <Chip key={id} backgroundColor={color}>
              {name}
            </Chip>
          ))}
        </div>
      )}
      <p className={styles.description}>
        {description}
      </p>
    </div>
  );
};

export default RepoCard;
