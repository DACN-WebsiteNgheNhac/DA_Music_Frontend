import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { audioSelector } from '~/redux/selector';

const Audio: React.FC = () => {
   const audioRef = useRef(null);

   const dispatch = useDispatch();
   // const { isSeek, volume } = useSelector(audioSelector);

   return (
      <div className="hidden">
         <audio
            id="audioPlayer"
            ref={audioRef}
            // onTimeUpdate={handleTimeUpdate}
            // onLoadStart={handleLoadStart}
            // onLoadedMetadata={handleLoadedMetadata}
            // onEnded={handleEnded}
            // src={`http://api.mp3.zing.vn/api/streaming/audio/${currentSong.encodeId}/320`}
         ></audio>
      </div>
   );
};

export default Audio;
