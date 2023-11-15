import { Action, Control, Media } from '~/components/PlayingBar';

const PlayingBar = () => {
   return (
      <section className="fx-between w-full h-playingbar bg-playingbar-color px-5 border-t border-border-color z-30">
         <Media />
         <Control />
         <Action />
      </section>
   );
};

export default PlayingBar;
