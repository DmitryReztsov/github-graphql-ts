import { Link } from 'react-router-dom';
import { HiOutlineEmojiSad } from "react-icons/hi";

import styles from './styles.module.scss';

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <HiOutlineEmojiSad size={48} />
      <h1>
        Page not found
      </h1>
      <Link to={'/'}>
        Go to main
      </Link>
    </div>
  );
};

export default NotFound;
