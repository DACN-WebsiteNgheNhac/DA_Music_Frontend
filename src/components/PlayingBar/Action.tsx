import React from 'react';
import cx from 'classnames';
import { Microphone2, VolumeHigh, VolumeCross, MusicFilter } from 'iconsax-react';
import { useDispatch, useSelector } from 'react-redux';
import { audioSelector, musicSelector } from '~/redux/selector';
import { Button } from '../Commons';
import InputRange from './InputRange';
import { setVolume } from '~/redux/slices/audioSlice';
import { setShowPlaylist } from '~/redux/slices/musicSlice';

const Action: React.FC = () => {
   const dispatch = useDispatch();
   const { showPlaylist } = useSelector(musicSelector);
   const { volume } = useSelector(audioSelector);

   const handleChangeVolume = (values: number) => {
      const volumeValue = Math.floor(values);
      dispatch(setVolume(volumeValue));
   };

   const handleToggleShowAlbum = () => {
      dispatch(setShowPlaylist());
   };

   return (
      <div className="w-[30%] fy-center justify-end">
         <Button tippyContent="Xem lời bài hát" className="mx-[2px] hover:bg-alpha-color">
            <Microphone2 size={16} />
         </Button>

         <div className="fy-center group">
            <Button className="flex-shrink-0 mx-[2px] group-hover:bg-alpha-color">
               {volume === 0 ? <VolumeCross size={16} /> : <VolumeHigh size={16} />}
            </Button>
            <InputRange
               step={0.01}
               value={volume}
               onChange={handleChangeVolume}
               className="!w-[70px]"
            />
         </div>

         <div className="f-center flex-grow-0 flex-shrink-0">
            <span className="h-[33px] w-[1px] bg-border-color mx-5" />
         </div>

         <Button
            onClick={handleToggleShowAlbum}
            tippyContent="Danh sách bài hát"
            className={cx(
               '!w-7 h-[30px] !rounded',
               showPlaylist ? 'bg-progressbar-active text-primary-color' : 'hover:bg-alpha-color',
            )}
         >
            <MusicFilter size={16} />
         </Button>
      </div>
   );
};

export default Action;
