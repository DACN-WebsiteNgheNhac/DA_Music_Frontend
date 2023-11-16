import { useEffect, useState } from 'react';
import { musicApi } from '~/axios';
import Carousel from '~/components/Carousel/Carousel';

const HomePage = () => {
   const [homeData, setHomeData] = useState<ISection[]>([]);

   const fetchHomeData = async () => {
      try {
         const res = await musicApi.fetchHome();
         setHomeData(res.data.metadata);
      } catch (error) {
         console.log(error);
      }
   };

   useEffect(() => {
      fetchHomeData();
   }, []);

   return (
      <div className="pb-10">
         {homeData.map((item: ISection, index) => {
            switch (item.sectionType) {
               case 'album':
                  return (
                     <Carousel
                        title={item.search}
                        carouselData={item.items as IAlbum[]}
                        key={index}
                     />
                  );
               case 'artist':
                  return (
                     <Carousel
                        title={item.search}
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

export default HomePage;
