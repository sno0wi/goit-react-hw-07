import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsReducer.js';
import { filtersReducer } from './filtersReducer.js';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
