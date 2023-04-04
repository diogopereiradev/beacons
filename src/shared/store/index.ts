import { configureStore } from '@reduxjs/toolkit';

import { explorerReducer } from './features/editor/explorer-slice';
import { statusBarReducer } from './features/editor/statusbar-slice';
import { markdownEditorReducer } from './features/editor/markdownEditor-slice';

export const store = configureStore({
  reducer: {
    editorExplorer: explorerReducer,
    editorStatusBar: statusBarReducer,
    editorMarkdownEditor: markdownEditorReducer
  }
});

export type StoreType = ReturnType<typeof store.getState>;