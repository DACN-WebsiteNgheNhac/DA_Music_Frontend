import React from 'react';
import cx from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { currentSongSelector, musicSelector } from '~/redux/selector';
import { Button, Image } from '../Commons';
import { LoadingIcon, musicWaveIcon, playIcon } from '~/assets';
import { durationTime } from '~/helpers';
import { Heart, More } from 'iconsax-react';
import {
   setPlaySongAndPlayCurrentSong,
   setPlayPause,
   setSingleSong,
} from '~/redux/slices/musicSlice';
import { SlMusicToneAlt } from 'react-icons/sl';

interface MediaItemProps {
   data: ISong;
   albumData?: IAlbum;
   imageClasName?: string;
   className?: string;
}

const MediaItem: React.FC<MediaItemProps> = ({ data, albumData }) => {
   const dispatch = useDispatch();
   const { isPlaying, loading } = useSelector(musicSelector);
   const currentSong = useSelector(currentSongSelector);

   const handlePlay = (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault();
      if (isPlaying && currentSong?.id === data.id) dispatch(setPlayPause());
      else if (albumData) {
         dispatch(
            setPlaySongAndPlayCurrentSong({ songId: data.id, ...albumData } as IReduxAlbumProps),
         );
      } else {
         dispatch(setSingleSong(data));
      }
   };

   return (
      <div
         className={cx(
            'fy-center px-[10px] py-2 group/image hover:bg-alpha-color rounded-md border-b border-border-color',
            currentSong?.id == data.id && 'bg-alpha-color',
         )}
      >
         <div className="fy-center w-1/2 mr-[10px]">
            <span className="w-[14px] f-center mr-[10px] text-subtitle-color">
               <SlMusicToneAlt size={10} />
            </span>

            <Image
               scale={false}
               active={currentSong?.id == data.id}
               className={cx('mr-[10px] w-10 h-10')}
               src={data.image}
            >
               {loading && currentSong?.id == data.id ? (
                  <Button className="w-10 h-10 mx-[17px]">
                     <LoadingIcon fill="white" />
                  </Button>
               ) : (
                  <Button onClick={handlePlay} className="w-10 h-10 f-center hover:brightness-90">
                     {isPlaying && currentSong?.id == data.id ? (
                        <img
                           src={musicWaveIcon}
                           alt="playIcon"
                           className="w-2/5 h-2/5 object-cover"
                        />
                     ) : (
                        <img src={playIcon} alt="playIcon" className="w-full h-full object-cover" />
                     )}
                  </Button>
               )}
            </Image>
            <div className="flex-1">
               <h4 className="line-clamp-1 text-sm font-medium leading-normal">{data.name}</h4>
               <span className="line-clamp-1 text-subtitle-color text-xs mt-[3px] leading-normal">
                  {data.artistNames || data.description}
               </span>
            </div>
         </div>
         <h4 className="flex-1 line-clamp-1 text-xs leading-normal text-subtitle-color">
            {data.description}
         </h4>
         <span className="group-hover/image:hidden text-subtitle-color text-xs w-11 f-center">
            {durationTime(data.songTime)}
         </span>
         <div className="items-center ml-[10px] hidden group-hover/image:flex">
            <Button className="mx-[2px] hover:bg-alpha-color" tippyContent="Thêm vào thư viện">
               <Heart size={15} />
            </Button>
            <Button className="mx-[2px] hover:bg-alpha-color" tippyContent="Khác">
               <More size={15} />
            </Button>
         </div>
      </div>
   );
};

export default MediaItem;
