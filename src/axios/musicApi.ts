import axios, { AxiosResponse } from 'axios';
import axiosInstance from './axiosInstance';

const musicApi = {
   fetchHome: (): Promise<AxiosResponse<IResponseData<ISection[]>>> => {
      return axiosInstance.get<IResponseData>('/home');
   },
   fetchSearch: (query: string): Promise<AxiosResponse<IResponseData<any>>> => {
      return axios.get('/search', { params: query });
   },
};

export default musicApi;
