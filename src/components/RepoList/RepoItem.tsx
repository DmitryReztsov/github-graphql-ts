import { FC } from 'react';
import format from 'date-fns/format'
import { Link, useNavigate } from 'react-router-dom';
import { HiExternalLink } from "react-icons/hi";
import { HiStar } from "react-icons/hi";
import { HiArrowNarrowRight } from "react-icons/hi";

import { Commit, Repository } from '../../app/services/types.generated.ts';

import styles from './styles.module.scss';

interface RepoProps {
  repo: Repository,
}

const RepoItem: FC<RepoProps> = ({ repo }) => {
  const navigate = useNavigate();
  const { name, url, stargazerCount, owner: { login }, defaultBranchRef } = repo;

  const lastCommit = defaultBranchRef ? defaultBranchRef.target as Commit : undefined;

  const lastCommitDate = lastCommit && lastCommit?.committedDate
    ? format(new Date(lastCommit?.committedDate), 'dd-MM-yyyy HH:mm')
    : 'no commits';

  return (
    <li
      className={styles.repoItem}
      onClick={() => navigate(`${login}/${name}`)}
    >
      <div className={styles.leftSide}>
        <div className={styles.header}>
          <h2>
            {name}
          </h2>
          <span className={styles.goText}>
            <HiArrowNarrowRight size={24} className={styles.icon} />
            go to repo
          </span>
        </div>
        <p>
          {`Last committed: ${lastCommitDate}`}
        </p>
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
