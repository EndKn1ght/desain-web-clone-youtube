import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
  params: { hl: "en", gl: "US" },
  headers: {
    "X-RapidAPI-Key": '6d9e384a06msh34b7646f965f7a6p161f8fjsnd61628b61b7e',
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

export const fetchDataFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
