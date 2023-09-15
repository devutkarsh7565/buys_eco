import { useQuery } from "@tanstack/react-query";
import { fetchConditionalProductsApi, searchProductsApi } from "./products.api";
import { IProduct, IProductResponse } from "@/types/productTypes";

export const useFetchConditionalProductsApi = (page: number) => {
  const { data, isLoading, isError, error, isFetching, isPreviousData } =
    useQuery(["products", page], () => fetchConditionalProductsApi(page), {
      keepPreviousData: true,
      staleTime: 600000,
    });

  const productData: IProductResponse =
    data?.data && (data?.data as IProductResponse);
  return {
    productData,
    isLoading,
    isError,
    error,
    isFetching,
    isPreviousData,
  };
};

export const useSearchProductsApi = (searchParam: string) => {
  const {
    data: searchProduct,
    isLoading,
    isError,
    error,
    isFetching,
    isPreviousData,
  } = useQuery(
    ["products", searchParam],
    () => searchProductsApi(searchParam),
    {
      keepPreviousData: true,
      staleTime: 600000,
    }
  );

  const productData: IProductResponse =
    searchProduct?.data && (searchProduct?.data as IProductResponse);
  return {
    productData,
    isLoading,
    isError,
    error,
    isFetching,
    isPreviousData,
  };
};
