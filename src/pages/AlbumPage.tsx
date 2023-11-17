import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { musicApi } from '~/axios';
import { PlaylistHeader, PlaylistMain } from '~/components/PlaylistSection';

const AlbumPage: React.FC = () => {
   const { id } = useParams();
   const [albumData, setAlbumData] = useState<IAlbum>();

   useEffect(() => {
      const fetchAlbumData = async () => {
         try {
            const res = await musicApi.fetchAlbumById(id!);
            setAlbumData(res.data.metadata);
         } catch (error) {
            console.log(error);
         }
      };
      fetchAlbumData();
   }, [id]);

   if (!albumData) return <span>Loading...</span>;

   return (
      <div>
         <div className="w-full pt-10 mb-[30px] flex gap-[30px]">
            <PlaylistHeader data={albumData!} />
            <PlaylistMain />
         </div>
      </div>
   );
};

export default AlbumPage;
