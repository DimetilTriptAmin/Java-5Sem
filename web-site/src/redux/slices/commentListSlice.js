import { createSlice } from "@reduxjs/toolkit";

export const commentListSlice = createSlice({
  name: "commentList",
  initialState: {
    values: [],
    isLoading: true,
    Loaded: false,
    page: 1,
    pagesAmount: 0,
  },
  reducers: {
    COMMENTS_DATA_RESET: (state, action) => {
      state.isLoading = true;
      state.Loaded = false;
    },
    COMMENT_LIST_REQUEST: (state, action) => {
      state.isLoading = true;
      state.page = action.payload.pageNumber;
    },
    COMMENT_LIST_SUCCESS: (state, action) => {
      state.values = action.payload;
      state.Loaded = true;
      state.isLoading = false;
    },
    COMMENT_PAGES_AMOUNT_SUCCESS: (state, action) => {
      state.pagesAmount = action.payload;
    },
    COMMENT_LIST_FAILURE: (state, action) => {
      state.isLoading = false;
    },
    COMMENT_SUBMIT_SUCCESS: (state, action) => {
      state.values = state.values.concat(action.payload);
    },
    COMMENT_DELETE_SUCCESS: (state, action) => {
      state.values = state.values.filter(
        (comment) => comment.id !== action.payload,
      );
    },
    COMMENT_UPDATE_REQUEST: (state, action) => {
      const $comment = state.values.find(comment => comment.id === action.payload.commentId)
      $comment.text = action.payload.text
    }
  },
});

export const {
  COMMENTS_DATA_RESET,
  COMMENT_LIST_SUCCESS,
  COMMENT_LIST_FAILURE,
  COMMENT_SUBMIT_SUCCESS,
  COMMENT_DELETE_SUCCESS,
} = commentListSlice.actions;

export default commentListSlice.reducer;
