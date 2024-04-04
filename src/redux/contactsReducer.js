import { createSlice } from '@reduxjs/toolkit';
import { apiGetContacts } from './contactsOps.js';

const contactsInitialState = {
  contacts: {
    items: [],
    loading: false,
    error: null,
  },
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder => {
    builder
      .addCase(apiGetContacts.pending, state => {
        state.contacts.loading = true;
        state.contacts.error = false;
      })
      .addCase(apiGetContacts.fulfilled, (state, action) => {
        state.contacts.loading = false;
        state.contacts.items = action.payload;
      })
      .addCase(apiGetContacts.rejected, state => {
        state.contacts.loading = false;
        state.contacts.error = true;
      });
  },
});

export const selectContacts = state => state.contacts.contacts.items;

export const { addContacts, deleteContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
