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
interface ISection {
   sectionType: string;
   viewType: string;
   search: string;
   items: IAlbum[] | IArtist[];
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
   createdAt: Data;
   tag: string;
}

// artist type
interface IArtist {
   id: string;
   name: string;
   artistName: string;
   gender: Gender;
   birthDay?: Date;
   debutDate?: Date;
   description: string;
   image: string;
   national: string;
   tag: string;
   createdAt: Date;
}