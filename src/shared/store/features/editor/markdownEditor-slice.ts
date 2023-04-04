import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type TypedMarkdownEditorState = {
  content: string
};

const initialState: TypedMarkdownEditorState = {
  content: ''
};

const mardownEditorSlice = createSlice({
  name: 'mardownEditor',
  initialState,
  reducers: {
    setEditorContent(state, action: PayloadAction<string>) {
      state.content = action.payload;
    }
  }
});

export const { setEditorContent } = mardownEditorSlice.actions;
export const markdownEditorReducer = mardownEditorSlice.reducer;