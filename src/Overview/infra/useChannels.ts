import { useServerApi } from "../../shared/infra/useServerApi";
import { useLoadDataAsync } from "../../shared/infra/useLoadDataAsync";

export const useChannels = () => {
  const { channelList } = useServerApi();
  const { data, isLoading } = useLoadDataAsync(channelList, []);

  return {
    channels: data,
    isLoading,
  };
};
