import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type TypedExplorerState = {
  currentMenu: 'filesView' | '',
  menus: {
    filesView: {
      selectedFile: string,
      files: []
    }
  }
};

const initialState: TypedExplorerState = {
  currentMenu: '',
  menus: {
    filesView: {
      selectedFile: '',
      files: []
    }
  }
};

const editorExplorerSlice = createSlice({
  name: 'explorer',
  initialState,
  reducers: {
    explorerOpenMenu: (state, action: PayloadAction<TypedExplorerState['currentMenu']>) => {
      state.currentMenu = action.payload;
    },
    
    explorerCloseMenu: (state) => {
      state.currentMenu = '';
    },

    setFilesViewSelectedFile: (state, action: PayloadAction<string>) => {
      state.menus.filesView.selectedFile = action.payload;
    }
  }
});

export const { explorerOpenMenu, explorerCloseMenu } = editorExplorerSlice.actions;
export const explorerReducer = editorExplorerSlice.reducer;