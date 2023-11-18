import axios, { AxiosResponse } from 'axios';
import axiosInstance from './axiosInstance';

const musicApi = {
   fetchHome: (): Promise<AxiosResponse<IResponseData<ISection[]>>> => {
      return axiosInstance.get<IResponseData>('/home');
   },
   fetchSearchSuggestion: (query: string): Promise<AxiosResponse<IResponseData<ISection[]>>> => {
      return axiosInstance.get<IResponseData>('/search', {
         params: { query, pageNumber: 1, pageSize: 10 },
      });
   },
   fetchSearch: (
      query: string | null,
      type: string | null,
   ): Promise<AxiosResponse<IResponseData<ISection[]>>> => {
      const params: any = {
         query,
         type,
      };

      if (!type) {
         params.pageNumber = 1;
         params.pageSize = 12;
      }

      return axiosInstance.get<IResponseData>('/search', {
         params,
      });
   },
   fetchAlbumById: (albumId: string): Promise<AxiosResponse<IResponseData<IAlbum>>> => {
      return axiosInstance.get<IResponseData>(`/album/${albumId}`);
   },
   fetchAlbumSuggestion: (albumId: string): Promise<AxiosResponse<IResponseData<ISection[]>>> => {
      return axiosInstance.get<IResponseData>(`/album/suggestion/${albumId}`);
   },
   fetchSongById: (songId: string): Promise<AxiosResponse<IResponseData<ISong>>> => {
      return axiosInstance.get<IResponseData>(`/song/${songId}`);
   },
};

export default musicApi;
