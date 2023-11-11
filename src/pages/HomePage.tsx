import Carousel from '~/components/Carousel/Carousel';

const HomePage = () => {
   return (
      <div className="h-[200vh]">
         <Carousel />
         <Carousel type="artist" />
      </div>
   );
};

export default HomePage;
