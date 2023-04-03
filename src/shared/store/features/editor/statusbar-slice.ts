import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type TypedStatusbarState = {
  editor: {
    line: number,
    column: number,
    lines: number,
    characters: number
  },
  preview: {
    characters: number
  }
};

const initialState: TypedStatusbarState = {
  editor: {
    line: 0,
    column: 0,
    lines: 0,
    characters: 0
  },
  preview: {
    characters: 0
  }
};

const editorStatusBarSlice = createSlice({
  name: 'statusbar',
  initialState,
  reducers: {
    setEditorLine: (state, action: PayloadAction<number>) => {
      state.editor.line = action.payload;
    },
    setEditorColumn: (state, action: PayloadAction<number>) => {
      state.editor.column = action.payload;
    },
    setEditorLines: (state, action: PayloadAction<number>) => {
      state.editor.lines = action.payload;
    },
    setEditorCharacters: (state, action: PayloadAction<number>) => {
      state.editor.characters = action.payload;
    },
    setPreviewCharacters: (state, action: PayloadAction<number>) => {
      state.preview.characters = action.payload;
    }
  }
});

export const { 
  setEditorLine, 
  setEditorColumn,
  setEditorLines,
  setEditorCharacters,
  setPreviewCharacters
} = editorStatusBarSlice.actions;
export const statusBarReducer = editorStatusBarSlice.reducer;