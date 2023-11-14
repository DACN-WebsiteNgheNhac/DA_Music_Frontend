import React from 'react';
import Scrollbars from 'react-custom-scrollbars-2';
interface ISearchList {}

const SearchList: React.FC<ISearchList> = () => {
   return (
      <div className="absolute bg-primary-color inset-x-0 top-full shadow-search-bottom rounded-b-[20px] py-3 px-[10px]">
         <Scrollbars
            autoHeight
            autoHeightMax={600}
            className="!max-h-search-list"
            renderTrackHorizontal={() => <div />}
         >
            <ul>
               <div className="fx-between text-sm px-[10px] pb-2">
                  <h3 className="font-bold">Tìm kiếm gần đây</h3>
                  <button className="text-xs text-purple-color capitalize">Xoá</button>
               </div>
            </ul>
         </Scrollbars>
      </div>
   );
};

export default SearchList;
