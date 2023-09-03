import { useEffect, useReducer } from "react";
import fetchDataReducer from "./fetchDataReducer";

export type FetchDataState<TData> = {
  isLoading: boolean;
  isError: boolean;
  data: TData | null | undefined;
};

export default function useFetchData<TData>(
  dataFetcher: () => Promise<TData>,
): FetchDataState<TData> {
  const [state, dispatch] = useReducer(fetchDataReducer<TData>(), {
    isLoading: true,
    isError: false,
    data: null,
  });

  useEffect(() => {
    dispatch({ type: "PENDING" });

    const fetchData = async (): Promise<void> => {
      try {
        const data = await dataFetcher();

        dispatch({ type: "SUCCESS", payload: data });
      } catch {
        dispatch({ type: "FAIL" });
      }
    };

    fetchData();
  }, [dataFetcher]);

  return state;
}

export function isDataAvailable<TData>({
  data,
  isError,
  isLoading,
}: FetchDataState<TData>): boolean {
  return data != null && !isError && !isLoading;
}
