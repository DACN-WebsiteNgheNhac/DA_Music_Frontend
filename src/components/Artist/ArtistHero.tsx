import React from 'react';
import { Image } from '../Commons';
import { convertDateTimeToShortDate, replaceBio } from '~/helpers';

interface ArtistHeroProps {
   data: IArtist;
}

const ArtistHero: React.FC<ArtistHeroProps> = ({ data }) => {
   return (
      <div className="flex gap-6">
         <Image src={data?.image} className="w-36 h-36 rounded-full flex-shrink-0" />
         <div>
            <h1 className="text-5xl font-bold text-title-color mb-2">{data?.artistName}</h1>
            <div className="grid grid-cols-2 gap-x-5 gap-y-2 text-xs">
               <div>
                  <span className="font-bold">Họ tên: </span> {data?.name}
               </div>
               <div>
                  <span className="font-bold">Giới tính: </span> {data?.gender}
               </div>
               <div>
                  <span className="font-bold">Ngày sinh: </span>
                  {data?.birthDay ? convertDateTimeToShortDate(data?.birthDay) : 'Đang cập nhật'}
               </div>
               <div>
                  <span className="font-bold">Ngày ra mắt: </span>
                  {data?.debutDate ? convertDateTimeToShortDate(data?.debutDate) : 'Đang cập nhật'}
               </div>
            </div>
            <div className="text-xs mt-2">
               <span className="font-bold">Tiểu sử: </span>
               {/* <span
                  className="text-subtitle-color line-clamp-3"
                  dangerouslySetInnerHTML={{
                     __html: replaceAll(data?.description, `\n`.toString(), ''),
                  }}
               /> */}
               {replaceBio(data?.description)}
            </div>
         </div>
      </div>
   );
};

export default ArtistHero;
