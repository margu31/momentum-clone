const initialState = {
  authUser: null,
  isAuthed: null,
};

const SIGN_IN = 'auth/SIGN_IN';
const SIGN_OUT = 'auth/SIGN_OUT';

export const signInAction = currentUser => ({
  type: SIGN_IN,
  payload: {
    authUser: currentUser,
  },
});

export const signOutAction = () => ({
  type: SIGN_OUT,
});

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        authUser: action.payload.authUser,
        isAuthed: true,
      };
    case SIGN_OUT:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
