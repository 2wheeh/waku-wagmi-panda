import { css } from '../../styled-system/css';

export const Footer = () => {
  return (
    <footer className={css({ textAlign: 'center', padding: '16px', marginTop: 'auto' })}>
      <div>
        visit{' '}
        <a
          href='https://waku.gg/'
          target='_blank'
          rel='noreferrer'
          className={css({ color: 'blue.600', textDecoration: 'underline' })}
        >
          waku.gg
        </a>{' '}
        to learn more
      </div>
    </footer>
  );
};
