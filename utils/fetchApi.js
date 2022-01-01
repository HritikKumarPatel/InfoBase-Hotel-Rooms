import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': 'a5baa7fb2dmsh7e7fa11c81e207dp1f2d7djsn4ee0ee3a2a43' ,
    },
  });
    
  return data;
}