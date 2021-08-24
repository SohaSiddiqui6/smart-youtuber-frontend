import { DefaultApiFactory } from "smart-youtuber-client-sdk/api/api";
import axios from "axios";
export const useServerApi = () => {
  // Update the backend url to be on gcloud
  if (!process.env.REACT_APP_SERVER_BASE_URL) {
    throw new Error("Server Base URL undefined");
  }
  const baseURL: string = process.env.REACT_APP_SERVER_BASE_URL;

  const apiClient = axios.create({
    baseURL: baseURL,
    timeout: 1000,
  });
  const { channelList, spamList, videoList } = DefaultApiFactory(
    {
      isJsonMime(mime: string): boolean {
        return true;
      },
    },
    baseURL,
    apiClient
  );
  return {
    channelList,
    spamList,
    videoList,
    apiClient,
  };
};
