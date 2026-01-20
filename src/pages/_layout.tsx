import '../styles.css';

import type { ReactNode } from 'react';

import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { Providers } from '../components/providers';

import { css } from '../../styled-system/css';

type RootLayoutProps = { children: ReactNode };

export default async function RootLayout({ children }: RootLayoutProps) {
  const data = await getData();

  return (
    <div className={css({ fontFamily: "'Nunito'" })}>
      <meta name='description' content={data.description} />
      <link rel='icon' type='image/png' href={data.icon} />
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='' />
      <link
        rel='stylesheet'
        href='https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,700;1,400;1,700&display=swap'
        precedence='font'
      />
      <Header />
      <main className={css({ paddingTop: '80px', paddingBottom: '80px', minHeight: '100vh' })}>
        <Providers>{children}</Providers>
      </main>
      <Footer />
    </div>
  );
}

const getData = async () => {
  const data = {
    description: 'An internet website!',
    icon: '/images/favicon.png',
  };

  return data;
};

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
