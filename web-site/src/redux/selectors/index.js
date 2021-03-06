export const notificationSelector = (state) => state.notification.data;
export const filmDataSelector = (state) => state.film;
export const filmCommentListSelector = (state) => state.commentList;
export const filmListSelector = (state) => state.filmList;

export const userSelector = (state) => state.user;
export const usernameSelector = (state) => state.user.name;
export const avatarSelector = (state) => state.user.avatar;
export const userLoadingSelector = (state) => state.user.isLoading;
export const userAuthorizeLoadingSelector = (state) =>
  state.user.isAuthorizationLoading;

export const userRatingSelector = (state) => state.user.currentFilmRating;

export const isAuthorizedSelector = () =>
  Boolean(window.localStorage.getItem("accessToken"));

export const accessTokenSelector = () =>
  window.localStorage.getItem("accessToken");
