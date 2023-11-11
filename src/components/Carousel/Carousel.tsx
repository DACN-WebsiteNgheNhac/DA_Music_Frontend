import React, { useCallback, useRef } from 'react';
import { ArrowLeft2, ArrowRight2 } from 'iconsax-react';
import { Link } from 'react-router-dom';
import AlbumCard from './AlbumCard';
import { Button } from '../Commons';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import ArtistCard from './ArtistCard';

interface CarouselProps {
   type?: 'album' | 'artist';
}

const Carousel: React.FC<CarouselProps> = ({ type = 'album' }) => {
   const swiperRef = useRef<any>(null);

   const handlePrev = useCallback(() => {
      if (!swiperRef.current) return;
      swiperRef.current.swiper.slidePrev();
   }, []);

   const handleNext = useCallback(() => {
      if (!swiperRef.current) return;
      swiperRef.current.swiper.slideNext();
   }, []);

   return (
      <div className="mt-12">
         <h3 className="mb-5 fx-between text-xl font-bold capitalize">
            Có Thể Bạn Muốn Nghe
            <Link
               to="/"
               className="fy-center text-xs font-medium uppercase text-navigation-color hover:text-hover-color"
            >
               Tất cả <ArrowRight2 size={16} className="ml-[6px]" />
            </Link>
         </h3>
         <div className="relative">
            <Swiper
               slidesPerView={5}
               spaceBetween={28}
               loop={true}
               modules={[Navigation]}
               ref={swiperRef}
            >
               {type === 'album' ? (
                  <>
                     <SwiperSlide>
                        <AlbumCard />
                     </SwiperSlide>
                     <SwiperSlide>
                        <AlbumCard />
                     </SwiperSlide>
                     <SwiperSlide>
                        <AlbumCard />
                     </SwiperSlide>
                     <SwiperSlide>
                        <AlbumCard />
                     </SwiperSlide>
                     <SwiperSlide>
                        <AlbumCard />
                     </SwiperSlide>
                     <SwiperSlide>
                        <AlbumCard />
                     </SwiperSlide>
                  </>
               ) : (
                  <>
                     <SwiperSlide>
                        <ArtistCard />
                     </SwiperSlide>
                     <SwiperSlide>
                        <ArtistCard />
                     </SwiperSlide>
                     <SwiperSlide>
                        <ArtistCard />
                     </SwiperSlide>
                  </>
               )}
            </Swiper>
            <Button
               onClick={handlePrev}
               className="next absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 rounded-full bg-primary-color shadow-primary z-10"
            >
               <ArrowRight2 size="22" />
            </Button>
            <Button
               onClick={handleNext}
               className="prev absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 rounded-full bg-primary-color shadow-primary z-10"
            >
               <ArrowLeft2 size="22" />
            </Button>
         </div>
      </div>
   );
};

export default Carousel;
