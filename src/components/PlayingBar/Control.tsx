import React, { useRef } from 'react';
import { Button } from '../Commons';
import { Next, Previous, Repeat, Shuffle } from 'iconsax-react';
import { RiPlayMiniFill } from 'react-icons/ri';
import InputRange from './InputRange';
import { useSelector } from 'react-redux';
import { audioSelector } from '~/redux/selector';
import { useDispatch } from 'react-redux';
import { setCurrentTime, setSeek } from '~/redux/slices/audioSlice';

const Control: React.FC = () => {
   const dispatch = useDispatch();
   const { currentTime, duration } = useSelector(audioSelector);

   const secondToPercent = Number.isNaN((currentTime / duration) * 100)
      ? 0
      : (currentTime / duration) * 100;

   const percentToSecond = (values: number): number => {
      return (values * duration) / 100;
   };

   const handleProgressChange = (values: number) => {
      const second = percentToSecond(values);
      console.log(second);

      dispatch(setCurrentTime(second));
   };

   const handleProgressFinalChange = (values: number) => {
      // console.log(values);
   };

   return (
      <div className="flex-grow max-w-[40vw]">
         <div className="f-center">
            <Button tippyContent="Bật phát ngẫu nhiên" className="mx-[7px] hover:bg-alpha-color">
               <Shuffle size={16} />
            </Button>
            <Button className="mx-[7px] hover:bg-alpha-color">
               <Previous size={18} variant="Bold" />
            </Button>

            <Button className="w-[40px] h-[40px] mx-[17px] border border-black hover:border-purple-color hover:text-purple-color">
               <RiPlayMiniFill size={24} className="translate-x-[1px]" />
            </Button>

            <Button className="mx-[7px] hover:bg-alpha-color">
               <Next size={18} variant="Bold" />
            </Button>
            <Button tippyContent="Bật phát lại tất cả" className="mx-[7px] hover:bg-alpha-color">
               <Repeat size={16} variant="Bold" />
            </Button>
         </div>

         <div className="flex items-center mb-[5px] select-none">
            <span className="min-w-[45px] text-xs text-subtitle-color font-medium mr-[10px] opacity-50 text-right">
               00:13
            </span>

            <InputRange
               value={secondToPercent}
               onChange={handleProgressChange}
               onFinalChange={handleProgressFinalChange}
            />

            <span className="min-w-[45px] text-xs text-subtitle-color font-medium ml-[10px]">
               04:13
            </span>
         </div>
      </div>
   );
};

export default Control;
