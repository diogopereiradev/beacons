import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type File = { id: string, name: string, content: string };

type TypedExplorerState = {
  currentMenu: 'filesView' | '',
  menus: {
    filesView: {
      selectedFile: File,
      files: File[]
    }
  }
};

const initialState: TypedExplorerState = {
  currentMenu: '',
  menus: {
    filesView: {
      selectedFile: {
        id: '',
        name: '',
        content: ''
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

    setFilesViewSelectedFile: (state, action: PayloadAction<File>) => {
      state.menus.filesView.selectedFile = action.payload;
    },

    setFilesViewFiles: (state, action: PayloadAction<File[]>) => {
      state.menus.filesView.files = action.payload;
    }
  }
});

export const { explorerOpenMenu, explorerCloseMenu, setFilesViewFiles, setFilesViewSelectedFile } = editorExplorerSlice.actions;
export const explorerReducer = editorExplorerSlice.reducer;