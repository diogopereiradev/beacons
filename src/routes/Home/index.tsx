import React, { useEffect } from 'react';

import { useTranslation } from '../../shared/hooks/useTranslation';
import { Header } from './components/Header';

export function Home(): JSX.Element {
  const { t, locale } = useTranslation();

  useEffect(() => {
    document.title = t('homepage.document.title');
  }, [locale]);
  
  return(
    <main>
      <Header />
    </main>
  );
}