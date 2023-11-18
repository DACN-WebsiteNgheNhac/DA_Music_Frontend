import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { musicApi } from '~/axios';
import { Carousel } from '~/components/Carousel';
import { NewRelease } from '~/components/NewRelease';
import { appSelector } from '~/redux/selector';
import { setEndLoading, setError, setStartLoading } from '~/redux/slices/appSlice';

const HomePage = () => {
   const dispatch = useDispatch();
   const { loading, error } = useSelector(appSelector);
   const [homeData, setHomeData] = useState<ISection[]>([]);

   useEffect(() => {
      const fetchHomeData = async () => {
         try {
            dispatch(setStartLoading());
            const res = await musicApi.fetchHome();
            setHomeData(res.data?.metadata);
            dispatch(setEndLoading());
         } catch (error) {
            console.log(error);
            dispatch(setError());
         }
      };
      fetchHomeData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   if (homeData.length <= 0 || loading) {
      return 'Loading...';
   }
   if (error) {
      return 'Error...';
   }

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
