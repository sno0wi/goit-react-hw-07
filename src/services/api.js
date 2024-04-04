import axios from 'axios';

export const fetchContacts = async () => {
  const { data } = await axios.get(
    'https://660e52936ddfa2943b3663ff.mockapi.io/contacts'
  );
  return data;
};
