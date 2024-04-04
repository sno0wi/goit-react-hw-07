import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContacts } from '../services/api.js';

export const apiGetContacts = createAsyncThunk(
  'contacts/fetchAll',
  async thunkAPI => {
    try {
      const data = await fetchContacts();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
