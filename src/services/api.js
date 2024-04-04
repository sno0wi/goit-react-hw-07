import axios from 'axios';

export const fetchContacts = async () => {
  const { data } = await axios.get(
    'https://660e52936ddfa2943b3663ff.mockapi.io/contacts'
  );
  return data;
};

export const addContact = async contactData => {
  const response = await axios.post(
    'https://660e52936ddfa2943b3663ff.mockapi.io/contacts',
    contactData
  );
  return response.data;
};

export const deleteContact = async contactId => {
  const response = await axios.delete(
    `https://660e52936ddfa2943b3663ff.mockapi.io/contacts/${contactId}`
  );
  return response.data;
};
