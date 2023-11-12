import { useEffect, useState } from 'react';
import { musicApi } from '~/axios';
import Carousel from '~/components/Carousel/Carousel';

const HomePage = () => {
   const [homeData, setHomeData] = useState<IHomeData[]>([]);

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
      <div className="h-[200vh]">
         {homeData.map((item: IHomeData, index) => {
            if (item.sectionType === 'album')
               return <Carousel title={item.search} albumsData={item.items} key={index} />;

            return null;
         })}
         {/* <Carousel type="artist" /> */}
      </div>
   );
};

export default HomePage;
