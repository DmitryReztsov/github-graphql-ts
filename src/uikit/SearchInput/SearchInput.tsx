import { FC } from 'react';

import styles from './styles.module.scss';
import * as React from 'react';

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
