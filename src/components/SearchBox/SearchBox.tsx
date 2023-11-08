import React from 'react';
import { SearchNormal1 } from 'iconsax-react';

interface SearchBoxProps {}

const SearchBox: React.FC<SearchBoxProps> = () => {
   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
   };

   return (
      <form
         onSubmit={handleSubmit}
         className="max-w-[440px] w-full flex lr-2 bg-alpha-color pr-[10px] rounded-full text-search-color"
      >
         <button className="w-11 f-center text-search-color">
            <SearchNormal1 size="20" />
         </button>
         <input
            type="text"
            className="flex-1 py-[5px] text-sm bg-transparent font-normal"
            placeholder="Tìm kiếm bài hát, nghệ sĩ lời bài hát..."
         />
      </form>
   );
};

export default SearchBox;
