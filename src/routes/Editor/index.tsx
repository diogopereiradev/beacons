import React, { useEffect } from 'react';

import { useTranslation } from '../../shared/hooks/useTranslation';

export function Editor(): JSX.Element {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('editorpage.document.title');
  }, []);
  
  return(
    <div>
      
    </div>
  );
}