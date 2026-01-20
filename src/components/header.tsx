import { Link } from 'waku';
import { css } from '../../styled-system/css';

export const Header = () => {
  return (
    <header
      className={css({
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        padding: '16px',
      })}
    >
      <h2 className={css({ fontSize: 'lg', fontWeight: 'bold', letterSpacing: '-0.025em', marginInline: 'auto' })}>
        <Link to='/'>Waku starter</Link>
      </h2>
    </header>
  );
};
