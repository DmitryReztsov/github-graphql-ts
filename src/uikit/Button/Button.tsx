import { FC } from 'react';
import * as React from 'react';

import styles from './styles.module.scss';

type ButtonVariants = 'outlined';

interface ButtonProps extends Partial<React.ButtonHTMLAttributes<HTMLButtonElement>> {
  variant?: ButtonVariants,
}

const Button: FC<ButtonProps> = (props) => {
  const { className, variant, children } = props;
  return (
    <button
      {...props}
      className={`${styles.button} ${variant && styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
