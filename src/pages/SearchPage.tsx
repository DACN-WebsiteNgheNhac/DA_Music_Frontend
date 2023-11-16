import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { musicApi } from '~/axios';
import Carousel from '~/components/Carousel/Carousel';
import { TabItem, Tabs } from '~/components/Tabs';

const SearchPage: React.FC = () => {
   const location = useLocation();
   const searchQuery = new URLSearchParams(location.search).get('query');
   const typeQuery = new URLSearchParams(location.search).get('type');

   const [searchData, setSearchData] = useState<ISection[]>([]);

   useEffect(() => {
      const fetchSearchData = async () => {
         try {
            const res = await musicApi.fetchSearch(searchQuery, typeQuery);
            setSearchData(res.data.metadata);
         } catch (error) {
            console.log(error);
         }
      };
      fetchSearchData();
   }, [searchQuery, typeQuery]);

   return (
      <div className="pb-10">
         <nav className="mb-7 -mx-section px-section">
            <div className="fy-center border-b border-border-color">
               <h3 className="text-2xl pr-5 border-r border-border-color text-title-color font-bold leading-normal">
                  Kết Quả Tìm Kiếm
               </h3>
               <Tabs>
                  <TabItem label="Tất cả" link={`/search/all?query=${searchQuery}`} />
                  <TabItem label="Bài hát" link={`/search/song?type=1&query=${searchQuery}`} />
                  <TabItem
                     label="Playlist/Album"
                     link={`/search/album?type=2&query=${searchQuery}`}
                  />
                  <TabItem label="Nghệ sỹ" link={`/search/artist?type=3&query=${searchQuery}`} />
               </Tabs>
            </div>
         </nav>
         {searchData.map((item: ISection, index) => {
            switch (item.sectionType) {
               case 'album':
                  return (
                     <Carousel
                        title="Playlist/Album"
                        carouselData={item.items as IAlbum[]}
                        key={index}
                     />
                  );
               case 'artist':
                  return (
                     <Carousel
                        title="Nghệ Sĩ/OA"
                        carouselData={item.items as IArtist[]}
                        key={index}
                        type="artist"
                     />
                  );
               default:
                  return null;
            }
         })}
      </div>
   );
};

export default SearchPage;
