import { createSlice } from '@reduxjs/toolkit';
import {
  apiGetContacts,
  apiPostContacts,
  apiDelContacts,
} from './contactsOps.js';

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
      })

      .addCase(apiPostContacts.pending, state => {
        state.contacts.loading = true;
        state.contacts.error = false;
      })
      .addCase(apiPostContacts.fulfilled, (state, action) => {
        state.contacts.loading = false;
        state.contacts.items.push(action.payload);
      })
      .addCase(apiPostContacts.rejected, state => {
        state.contacts.loading = false;
        state.contacts.error = true;
      })

      .addCase(apiDelContacts.pending, state => {
        state.contacts.loading = true;
        state.contacts.error = false;
      })
      .addCase(apiDelContacts.fulfilled, (state, action) => {
        state.contacts.loading = false;
        state.contacts.items = state.contacts.items.filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addCase(apiDelContacts.rejected, state => {
        state.contacts.loading = false;
        state.contacts.error = true;
      });
  },
});

export const selectContacts = state => state.contacts.contacts.items;

export const contactsReducer = contactsSlice.reducer;
