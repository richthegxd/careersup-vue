import { AxiosInstance, AxiosResponse } from "axios";

function serializeResponse(res: AxiosResponse) {
  return res.data;
}

export default function interceptors(axios: AxiosInstance) {
  axios.interceptors.response.use(serializeResponse);
}
