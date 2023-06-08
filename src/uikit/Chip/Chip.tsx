import { FC, PropsWithChildren } from 'react';

import styles from './styles.module.scss';

interface ChipProps {
  backgroundColor?: string,
}

const Chip: FC<PropsWithChildren<ChipProps>> = ({ children, backgroundColor = '#ffffff' }) => {
  return (
    <span
      className={styles.chip}
      style={{ backgroundColor }}
    >
      {children}
    </span>
  );
};

export default Chip;
