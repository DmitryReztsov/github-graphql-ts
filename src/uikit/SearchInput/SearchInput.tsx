import { FC } from 'react';
import * as React from 'react';

import styles from './styles.module.scss';

interface SearchInputProps extends Partial<React.InputHTMLAttributes<HTMLInputElement>> {}

const SearchInput: FC<SearchInputProps> = (props) => {
  return (
    <input
      {...props}
      type='search'
      className={`${styles.searchInput} ${props.className}`}
    />
  );
};

export default SearchInput;
