import type { FetchDataState } from ".";

export type DispatchAction<TData> =
  | { type: "PENDING" }
  | { type: "SUCCESS"; payload: TData }
  | { type: "FAIL" };

export default function fetchDataReducer<TData>() {
  return (state: FetchDataState<TData>, action: DispatchAction<TData>): FetchDataState<TData> => {
    switch (action.type) {
      case "PENDING":
        return {
          ...state,
          data: null,
          isLoading: true,
        };
      case "SUCCESS": {
        return {
          ...state,
          isLoading: false,
          isError: false,
          data: action.payload,
        };
      }
      case "FAIL":
        return {
          data: null,
          isLoading: false,
          isError: true,
        };
      default:
        throw new Error("Dispatch action not supported");
    }
  };
}
