import { createAction } from "@reduxjs/toolkit";

export const goToFilmRequest = createAction("film/GO_TO_FILM_REQUEST");
export const filmRequest = createAction("film/FILM_REQUEST");

export const commentListRequest = createAction(
  "commentList/COMMENT_LIST_REQUEST",
);
export const commentSubmitRequest = createAction(
  "commentList/COMMENT_SUBMIT_REQUEST",
);
export const commentDeleteRequest = createAction(
  "commentList/COMMENT_DELETE_REQUEST",
);

export const commentPagesAmountRequest = createAction(
  "commentList/COMMENT_PAGES_AMOUNT_REQUEST",
);
export const commentUpdateRequest = createAction(
  "commentList/COMMENT_UPDATE_REQUEST",
);


export const filmIdRequest = createAction("film/FILM_ID_REQUEST");

export const currentFilmRatingRequest = createAction(
  "user/CURRENT_FILM_RATING_REQUEST",
);
export const changePasswordRequest = createAction(
  "user/CHANGE_PASSWORD_REQUEST",
);

export const goToSettingsRequest = createAction("user/GO_TO_SETTINGS_REQUEST");
export const userRequest = createAction("user/USER_REQUEST");

export const setFilmRatingRequest = createAction(
  "film/SET_FILM_RATING_REQUEST",
);
export const updateUserRequest = createAction("user/UPDATE_REQUEST");

export const userRatingRequest = createAction("ratingList/USER_RATING_REQUEST");

export const filmListRequest = createAction("filmList/FILM_LIST_REQUEST");

export const logInRequest = createAction("user/LOG_IN_REQUEST"); // change
export const logOutRequest = createAction("user/LOG_OUT_REQUEST"); // change
export const registrationRequest = createAction("user/REGISTRATION_REQUEST"); // change
