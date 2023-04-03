import React, { useEffect } from 'react';

import { useTranslation } from '../../shared/hooks/useTranslation';
import { ToolsBar } from './components/ToolsBar';
import { StatusBar } from './components/StatusBar';

export function Editor(): JSX.Element {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('editorpage.document.title');
  }, []);

  return (
    <main>
      <ToolsBar />
      <StatusBar />
    </main>
  );
}