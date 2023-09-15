import { IProduct } from "@/types/productTypes";
import { APIInstance } from "../baseUrl";

// export const fetchConditionalProductsApi = async (pageParam = 1) => {
//   return APIInstance({
//     url: `/products`,
//     method: "GET",
//     params:pageParam
//   });
// };

export const fetchConditionalProductsApi = async (pageParam = 1) => {
  const response = await APIInstance.get(`/products?page=${pageParam}`);
  return response;
};
export const searchProductsApi = async (searchParams = "product") => {
  const response = await APIInstance.get(`/products?keyword=${searchParams}`);
  return response;
};

// export const fetchConditionalProductsApi = async () => {
//   await APIInstance.get("/products")
//     .then((response) => {
//       const products: IProduct[] = response.data;
//       console.log(products, "products");
//       return products;
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// };

// const getAllActivities = async (queryParams?: IGetActivitiesQueryParams) => {
//   let queryString: string = objectToQueryString(queryParams);

//   const res = await axios.get<IGetAllActivitiesApiResponse>(`/activity${queryString}`);
//   return res.data;
// };

/* ----------------------------------------------- */

// export const useGetAllActivities = (queryParams?: IGetActivitiesQueryParams) => {
//   return useQuery(
//     ['activities', queryParams?.activityType, queryParams?.searchQuery, queryParams?.categoryId],
//     () => getAllActivities(queryParams),
//     {
//       staleTime: 600000,
//       select: (res) => res.data,
//     },
//   );
// };
