import { useEffect, useState } from 'react';
import { musicApi } from '~/axios';
import { Carousel } from '~/components/Carousel';
import { NewRelease } from '~/components/NewRelease';

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
         {homeData
            .slice(0)
            .reverse()
            .map((item: ISection, index) => {
               switch (item.sectionType) {
                  case 'album':
                     return (
                        <Carousel
                           key={index}
                           title={item.search}
                           carouselData={item.items as IAlbum[]}
                        />
                     );
                  case 'artist':
                     return (
                        <Carousel
                           key={index}
                           title={item.search}
                           carouselData={item.items as IArtist[]}
                           type="artist"
                        />
                     );
                  case 'song':
                     return (
                        <NewRelease
                           key={index}
                           title={item.search}
                           data={item.items as INewRelease}
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
