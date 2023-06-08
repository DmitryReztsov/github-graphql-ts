import { FC } from 'react';
import styles from './styles.module.scss';
import Button from '../Button/Button.tsx';

interface PaginatorProps {
  activePage: number,
  pageLength: number,
  totalCount: number,
  clickPage: (index: number) => void,
}

const Paginator: FC<PaginatorProps> = (
  {
    activePage = 1, pageLength = 10, totalCount, clickPage,
  }
  ) => {
  const pageCount = Math.ceil(totalCount / pageLength);
  const maxPageCount = pageCount > 10 ? 10 : pageCount;
  const pageList = new Array(maxPageCount).fill(1).map((elem, i) => i + elem);

  return (
    <div className={styles.paginator}>
      <Button
        className={styles.button}
        variant={'outlined'}
        disabled={activePage === 1}
        onClick={() => clickPage(activePage - 1)}
      >
        Previous
      </Button>
      <div className={styles.pageList}>
        {pageList.map((page) => {
          const isActive = activePage === page;
          return <Button
            key={page}
            className={`${styles.page} ${isActive ? styles.active : ''}`}
            variant={'outlined'}
            onClick={() => clickPage(page)}
          >
            {page}
          </Button>
        })}
      </div>
      <Button
        className={styles.button}
        variant={'outlined'}
        disabled={activePage === pageList.length}
        onClick={() => clickPage(activePage + 1)}
      >
        Next
      </Button>
    </div>
  );
};

export default Paginator;
