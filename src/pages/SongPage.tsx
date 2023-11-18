import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { musicApi } from '~/axios';
import { SongHeader, SongMain } from '~/components/PlaylistSection';
import { appSelector } from '~/redux/selector';
import { setEndLoading, setError, setStartLoading } from '~/redux/slices/appSlice';

const SongPage: React.FC = () => {
   const { id } = useParams();
   const [songData, setsongData] = useState<ISong>();

   const dispatch = useDispatch();
   const { loading, error } = useSelector(appSelector);

   useEffect(() => {
      const fetchSongData = async () => {
         try {
            dispatch(setStartLoading());
            const res = await musicApi.fetchSongById(id!);
            setsongData(res.data.metadata);
            dispatch(setEndLoading());
         } catch (error) {
            console.log(error);
            dispatch(setError());
         }
      };
      fetchSongData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [id]);

   if (!songData || loading) {
      return 'Loading...';
   }
   if (error) {
      return 'Error...';
   }

   return (
      <div className="w-full pt-10 mb-[30px] flex gap-[30px]">
         <SongHeader data={songData!} />
         <SongMain data={songData!} />
      </div>
   );
};

export default SongPage;
