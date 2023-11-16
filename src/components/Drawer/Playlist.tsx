import React from 'react';
import { CustomScrollbar } from '../Commons';
import { useSelector } from 'react-redux';
import { currentSongSelector, musicSelector } from '~/redux/selector';
import MediaItem from './MediaItem';
import NextSong from './NextSong';

const Playlist: React.FC = () => {
   const { playlistSongs, title } = useSelector(musicSelector);
   const currentSong = useSelector(currentSongSelector);
   return (
      <div className="flex-1">
         <CustomScrollbar>
            <div className="px-2">
               {playlistSongs.map((song, index) => (
                  <React.Fragment key={song.id}>
                     <MediaItem data={song} />
                     {index < playlistSongs.length - 1 && title && currentSong.id === song.id && (
                        <NextSong />
                     )}
                  </React.Fragment>
               ))}
            </div>
         </CustomScrollbar>
      </div>
   );
};

export default Playlist;
