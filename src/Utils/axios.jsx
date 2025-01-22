import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMTQ5NGVhMzQyMGMwODNlNDQyNTVjNzQ2MGU1MGFiNSIsIm5iZiI6MTczNjA1Njg0OS45MDMsInN1YiI6IjY3N2EyMDExODMwYThmNGNjNzY2YTAwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.G0DvXvOdlX1K9qKLeZWa3BSSw71Vh9y3xigcUvRLFhI",
  },
});

export default instance;
