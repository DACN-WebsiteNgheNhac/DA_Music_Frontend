import React, { useRef, useState } from 'react';
import cx from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import { searchSelector } from '~/redux/selector';
import { useOutSide } from '~/hooks';
import { clearSearch, setValue } from '~/redux/slices/searchSlice';

import { SearchNormal1 } from 'iconsax-react';
import { IoCloseOutline } from 'react-icons/io5';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import SearchList from './SearchList';

interface SearchBoxProps {}

const SearchBox: React.FC<SearchBoxProps> = () => {
   const focusRef = useRef<HTMLDivElement>(null);
   const [isFocus, setIsFocus] = useState<boolean>(false);

   const dispatch = useDispatch();
   const { value, loading } = useSelector(searchSelector);

   useOutSide(focusRef, (e: MouseEvent) => {
      // if menu profile && profile not containt e.target => close profile
      if (focusRef && focusRef.current && !focusRef.current.contains(e.target as Node)) {
         setIsFocus(false);
      }
   });

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
   };

   return (
      <div
         ref={focusRef}
         className={cx(
            'relative max-w-[440px] w-full',
            isFocus
               ? 'bg-primary-color shadow-search-top rounded-t-[20px]'
               : 'bg-alpha-color rounded-[20px]',
         )}
      >
         <form className="flex h-10" onSubmit={handleSubmit}>
            <button type="submit" className="w-10 f-center">
               <SearchNormal1 size="20" />
            </button>
            <input
               type="text"
               value={value}
               onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  dispatch(setValue(e.target.value))
               }
               onFocus={() => setIsFocus(true)}
               className="flex-1 py-[5px] text-sm bg-transparent font-normal text-search-color"
               placeholder="Tìm kiếm bài hát, nghệ sĩ lời bài hát..."
            />
            {value.length > 0 && (
               <>
                  {loading ? (
                     <div className="f-center h-10 w-10 cursor-pointer animate-spin">
                        <AiOutlineLoading3Quarters size={16} />
                     </div>
                  ) : (
                     <button
                        onClick={() => dispatch(clearSearch())}
                        className="f-center h-10 w-10 cursor-pointer"
                     >
                        <IoCloseOutline color="var(--text-placeholder)" size={20} />
                     </button>
                  )}
               </>
            )}
         </form>
         {isFocus && <SearchList />}
      </div>
   );
};

export default SearchBox;