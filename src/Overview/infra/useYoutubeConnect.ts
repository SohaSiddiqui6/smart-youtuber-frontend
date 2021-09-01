import { useServerApi } from "../../shared/infra/useServerApi";

import { useEffect, useState } from "react";

export const useYoutubeConnect = () => {
  const { apiClient } = useServerApi();
  const connect = async () => {
    const idToken = null;
    const response = await apiClient.get("auth/connect", {
      headers: {
        "x-id-token": idToken,
      },
    });
    const url = response.data.url;
    window.location.replace(url + `&state=${idToken}`);
    console.log({ response });
  };

  return {
    connect,
  };
};
