import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useTranslation } from '../../shared/hooks/useTranslation';
import { ToolsBar } from './components/ToolsBar';
import { StatusBar } from './components/StatusBar';
import { DBOpen } from '../../shared/database/DBOpen';
import { setFilesViewFiles } from '../../shared/store/features/editor/explorer-slice';

export function Editor(): JSX.Element {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = t('editorpage.document.title');
    
    // Load markdown files to explorer in toolsbar
    DBOpen({
      onsuccess: (db) => {
        const transaction = db.transaction('markdowns', 'readonly');
        const objectStore = transaction.objectStore('markdowns');
        const request = objectStore.getAll();

        request.onsuccess = (e) => {
          const target = e.target as unknown as { result: { id: string, name: string, content: string }[] };
          dispatch(setFilesViewFiles(target.result));
        };
      }
    });
  }, []);

  return (
    <main>
      <ToolsBar />
      <StatusBar />
    </main>
  );
}