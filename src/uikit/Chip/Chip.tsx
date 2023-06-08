import styles from './styles.module.scss';
import { FC, PropsWithChildren } from 'react';

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
