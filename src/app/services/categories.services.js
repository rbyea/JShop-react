import httpService from "./http.services";
const categoryEndpoint = "categories/";

const categoryService = {
  get: async () => {
    const { data } = await httpService.get(categoryEndpoint);
    return data;
  }
};
export default categoryService;