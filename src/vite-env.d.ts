/// <reference types="vite/client" />

interface ITippySetting {
   content?: React.ReactNode | null;
   placement?: string;
   arrow?: boolean;
   duration?: number;
   delay?: number[];
}

// ----------- DATA -------------

// response type
interface IPagination {
   currentPage: number;
   totalPage: number;
   currentEntry: number;
}

interface IResponseData<T = any> {
   statusCode: number;
   message: string;
   pagination?: IPagination;
   metadata: T;
}

// home type
interface IHomeData {
   sectionType: string;
   viewType: string;
   search: string;
   items: IAlbum[];
}
// album type
interface IAlbum {
   id: string;
   name: string;
   description: string;
   image: string;
   tag: string | null;
   songs: ISong[];
}

// song type
interface ISong {
   id: string;
   name: string;
   description: string;
   image: string;
   songUrl: string;
   songTime: number;
   createdAt: string;
}
