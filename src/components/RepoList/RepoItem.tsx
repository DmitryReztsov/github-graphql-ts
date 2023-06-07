import { FC } from 'react';
import { Commit, Repository } from '../../app/services/types.generated.ts';
import styles from './styles.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { HiExternalLink } from "react-icons/hi";
import { HiStar } from "react-icons/hi";
import format from 'date-fns/format'

interface RepoProps {
  repo: Repository,
}

const RepoItem: FC<RepoProps> = ({ repo }) => {
  const navigate = useNavigate();
  const { name, url, stargazerCount, owner: { login }, defaultBranchRef } = repo;
  const commit = defaultBranchRef?.target as Commit;
  const commits = commit?.history?.edges;
  const lastCommitDate = commits
    ? format(new Date(commits[0]?.node?.committedDate ), 'dd-MM-yyyy HH:mm')
    : undefined;

  return (
    <li
      className={styles.repoItem}
      onClick={() => navigate(`${login}/${name}`)}
    >
      <div className={styles.leftSide}>
        <h2>{name}</h2>
        <p>
          {`Last committed: ${lastCommitDate || 'no data'}`}</p>
      </div>
      <div className={styles.rightSide}>
        <Link
          to={url}
          onClick={(e) => e.stopPropagation()}
        >
          <HiExternalLink size={24} className={styles.icon} />
        </Link>
        <div className={styles.stargazer}>
          <HiStar size={24} className={styles.icon} />
          {stargazerCount}
        </div>
      </div>
    </li>
  );
};

export default RepoItem;
