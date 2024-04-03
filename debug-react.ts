import {useApi} from "./utils/api-helper";


const logAPI = () => {
  const originalGet = useApi.get;
  const originalPatch = useApi.patch;
  const originalPost = useApi.post;
  const originalPut = useApi.put;
  const originalOptions = useApi.options;
  const originalDelete = useApi.delete;

  useApi.get = (...params) => {
    console.log('[API.get] ', ...params);
    return originalGet(...params);
  };

  useApi.patch = async (...params) => {
    console.log('[API.patch] ', ...params);
    return originalPatch(...params);
  };

  useApi.post = async (...params) => {
    console.log('[API.post] ', ...params);
    return originalPost(...params);
  };

  useApi.put = async (...params) => {
    console.log('[API.put] ', ...params);
    return originalPut(...params);
  };

  useApi.options = async (...params) => {
    console.log('[API.options] ', ...params);
    return originalOptions(...params);
  };

  useApi.delete = async (...params) => {
    console.log('[API.delete] ', ...params);
    return originalDelete(...params);
  };
};

logAPI();
