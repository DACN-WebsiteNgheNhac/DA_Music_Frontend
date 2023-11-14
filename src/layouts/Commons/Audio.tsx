import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { audioSelector, currentSongSelector, musicSelector } from '~/redux/selector';
import { resetAudio, setCurrentTime, setDuration } from '~/redux/slices/audioSlice';
import { nextSong, setLoading, setPlayPause } from '~/redux/slices/musicSlice';

const Audio: React.FC = () => {
   const audioRef = useRef<HTMLAudioElement>(null);

   const dispatch = useDispatch();
   const currentSong = useSelector(currentSongSelector);
   const { isPlaying, isLoop, playlistSongs } = useSelector(musicSelector);
   const { isSeek, volume } = useSelector(audioSelector);

   // begin loading
   const handleLoadStart = () => {
      dispatch(setLoading(true));
      dispatch(resetAudio());
   };

   // loaded
   const handleLoadedMetadata = (e: React.SyntheticEvent<HTMLAudioElement, Event>) => {
      dispatch(setDuration(e.currentTarget.duration));
      dispatch(setLoading(false));
   };

   const handleTimeUpdate = (e: React.SyntheticEvent<HTMLAudioElement, Event>) => {
      if (isSeek) return;
      const currentTime = parseFloat(e.currentTarget.currentTime.toFixed(3));
      dispatch(setCurrentTime(currentTime));
   };

   const handleEnded = () => {
      if (isLoop) return;

      // replay song when playlist only 1 song
      if (playlistSongs.length <= 1) {
         dispatch(setPlayPause());
      } else {
         dispatch(nextSong());
      }
   };

   const handleError = () => {
      dispatch(nextSong());
   };

   // Binding audio
   useEffect(() => {
      if (!audioRef || !audioRef.current) return;
      isPlaying ? audioRef.current.play() : audioRef.current.pause();
   }, [isPlaying, currentSong.id]);

   // Binding volume
   useEffect(() => {
      if (!audioRef || !audioRef.current) return;
      audioRef.current.volume = volume / 100;
   }, [volume]);

   return (
      <div className="hidden">
         <audio
            id="audioPlayer"
            ref={audioRef}
            onLoadStart={handleLoadStart}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onEnded={handleEnded}
            onError={handleError}
            src={`http://api.mp3.zing.vn/api/streaming/audio/${currentSong.tag}/320`}
            loop={isLoop}
         />
      </div>
   );
};

export default Audio;
