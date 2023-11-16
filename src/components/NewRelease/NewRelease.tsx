import React, { useState } from 'react';
import Button from './Button';
import { MediaItem } from '../Media';
import { SectionTitle } from '../Commons';

interface ITags {
   id: 'all' | 'vpop' | 'other';
   tagLabel: string;
}

const TAGS: ITags[] = [
   { id: 'all', tagLabel: 'Tất cả' },
   { id: 'vpop', tagLabel: 'Việt Nam' },
   { id: 'other', tagLabel: 'Quốc tế' },
];

interface NewReleaseProps {
   title: string;
   data: INewRelease;
}

const NewRelease: React.FC<NewReleaseProps> = ({ title, data }) => {
   const [tagActive, setTagActive] = useState<'all' | 'vpop' | 'other'>(TAGS[0].id);

   return (
      <div className="w-full mt-12">
         <SectionTitle title={title} />
         <div className="mb-4 fx-between">
            <div className="flex">
               {TAGS.map((tag) => (
                  <Button
                     key={tag.id}
                     active={tag.id === tagActive}
                     onClick={() => setTagActive(tag.id)}
                  >
                     {tag.tagLabel}
                  </Button>
               ))}
            </div>
         </div>
         <div className="grid grid-cols-3 gap-x-4">
            {data[tagActive].slice(0, 12).map((item) => (
               <MediaItem
                  key={item.id}
                  data={item}
                  albumData={
                     {
                        id: item.id, // gán tạm để tìm index bài hát
                        name: 'Mới Phát Hành',
                        songs: data[tagActive],
                     } as IAlbum
                  }
               />
            ))}
         </div>
      </div>
   );
};

export default NewRelease;
