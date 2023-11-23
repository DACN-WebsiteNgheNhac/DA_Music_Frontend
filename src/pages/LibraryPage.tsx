import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import usePortal from 'react-cool-portal';
import { musicApi } from '~/axios';
import { PlaylistCard, PlaylistModal } from '~/components/Playlist';
import { setEndLoading, setError, setStartLoading } from '~/redux/slices/appSlice';
import { AddCircle } from 'iconsax-react';
import { appSelector, userSelector } from '~/redux/selector';

const LibraryPage: React.FC = () => {
   const dispatch = useDispatch();
   const { id } = useSelector(userSelector);
   const { loading, error } = useSelector(appSelector);

   const [playlistData, setPlaylistData] = useState<IAlbum[]>([]);

   const { Portal, toggle, hide } = usePortal({ defaultShow: false });

   useEffect(() => {
      const fetchPlaylistData = async () => {
         try {
            dispatch(setStartLoading());
            const res = await musicApi.fetchPlaylistByUser(id);
            setPlaylistData(res.data?.metadata);
            dispatch(setEndLoading());
         } catch (error) {
            console.log(error);
            dispatch(setError());
         }
      };
      fetchPlaylistData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [id]);

   if (!playlistData || loading) {
      return 'Loading...';
   }
   if (error) {
      return 'Error...';
   }

   return (
      <div className="pb-10">
         <nav className="mb-7 -mx-section">
            <div className="fy-center px-section border-b border-border-color">
               <h3 className="text-2xl pr-5 border-r border-border-color text-title-color font-bold leading-normal">
                  Playlist của tôi
               </h3>
            </div>
         </nav>

         <div className="grid grid-cols-5 gap-7">
            <button onClick={toggle} className="relative h-0 pb-[100%]">
               <div className="absolute inset-0 f-center flex-col gap-2 border border-border-color rounded text-purple-color cursor-pointer">
                  <AddCircle size="36" />
                  <h3>Tạo playlist mới</h3>
               </div>
            </button>
            {playlistData.map((album) => (
               <PlaylistCard key={album.id} data={album} />
            ))}
         </div>

         <Portal>
            <PlaylistModal hide={hide} />
         </Portal>
      </div>
   );
};

export default LibraryPage;
