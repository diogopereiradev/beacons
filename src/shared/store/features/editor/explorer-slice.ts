import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type TypedExplorerState = {
  currentMenu: 'filesView' | '',
  menus: {
    filesView: {
      selectedFile: {
        id: string,
        label: string
      },
      files: { id: string, label: string }[]
    }
  }
};

const initialState: TypedExplorerState = {
  currentMenu: '',
  menus: {
    filesView: {
      selectedFile: {
        id: '',
        label: ''
      },
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

    setFilesViewSelectedFile: (state, action: PayloadAction<{ id: string, label: string }>) => {
      state.menus.filesView.selectedFile = action.payload;
    }
  }
});

export const { explorerOpenMenu, explorerCloseMenu } = editorExplorerSlice.actions;
export const explorerReducer = editorExplorerSlice.reducer;