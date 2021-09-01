import { useEffect, useState } from "react";
import { AxiosPromise } from "axios";
// import { auth } from "../../Authentication";

export const useLoadDataAsync = <T>(
  fetchData: (options?: any) => AxiosPromise<T>,
  initialData: T,
  options?: any
) => {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function handleDataFetchAsync() {
      // const idToken = await auth().currentUser?.getIdToken(true);
      const idToken = null;
      const response = await fetchData({
        headers: {
          "x-id-token": idToken,
        },
        ...options,
      });
      setData(response.data);
      setIsLoading(false);
    }
    handleDataFetchAsync();
  }, []);
  return {
    data,
    isLoading,
  };
};
