import { FC } from 'react';

import styles from './styles.module.scss';

interface SearchInputProps extends Partial<HTMLInputElement> {}

const SearchInput: FC<SearchInputProps> = () => {
  return (
    <input type='search' className={styles.searchInput} />
  );
};

export default SearchInput;
