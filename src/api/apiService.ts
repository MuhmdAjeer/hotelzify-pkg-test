import { Axios, AxiosRequestConfig } from "axios";
import { ApiResponse } from "../types/api";
import { HotelAPIResponse } from "../types/hotel";

class APIService {
  private axios: Axios;

  constructor(config: AxiosRequestConfig) {
    this.axios = new Axios(config);
    this.axios.interceptors.response.use((res) => {
      if (typeof res.data === "string") {
        return { ...res, data: JSON.parse(res.data) };
      }
      return res;
    });
  }

  public async fetchAvailability(
    params: Record<string, string>
  ): Promise<ApiResponse<HotelAPIResponse[]>> {
    return (await this.axios.get("/hotel/v2/hotel/availability", { params }))
      .data;
  }
}

const apiService = new APIService({
  baseURL: "https://dev2-api.hotelzify.com",
});

export default apiService;
