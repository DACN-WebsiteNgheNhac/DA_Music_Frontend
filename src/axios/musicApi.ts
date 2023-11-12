import { AxiosResponse } from 'axios';
import axiosInstance from './axiosInstance';

const musicApi = {
   fetchHome: (): Promise<AxiosResponse<IResponseData<IHomeData[]>>> => {
      return axiosInstance.get<IResponseData>('/Home/get-home-page');
   },
};

export default musicApi;
