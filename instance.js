export const instance = {
  fetchSearchMS(page, search) {
    return `https://api.themoviedb.org/3/search/multi?api_key=${
      process.env.NEXT_PUBLIC_API_KEY
    }&language=en-US&page=${!page ? 1 : page}&query=${search}`;
  },
};
