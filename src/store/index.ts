import { configureStore } from '@reduxjs/toolkit';

import authReducer from './Auth';

export default configureStore({
  reducer: {
    auth: authReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(

    ),
});
