import React from 'react';
import { MediaItem, MediaArtistItem, MediaAlbumItem } from '../Media';
import { Line } from '../Commons';
import { useSelector } from 'react-redux';
import { searchSelector } from '~/redux/selector';

interface ISearchList {}

const SearchList: React.FC<ISearchList> = () => {
   const { result } = useSelector(searchSelector);

   return (
      <div className="absolute bg-primary-color inset-x-0 top-full shadow-search-bottom rounded-b-[20px] py-3 px-[10px]">
         <div className="overflow-y-auto max-h-search-list">
            {result.length > 0 && (
               <>
                  <ul>
                     <div className="fx-between text-sm px-[10px] pb-2">
                        <h3 className="font-bold">Gợi ý kết quả</h3>
                     </div>
                     {result.map((section, index) => {
                        switch (section.sectionType) {
                           case 'song':
                              return (
                                 <React.Fragment key={index}>
                                    {(section.items as ISong[]).map((song) => (
                                       <li key={song.id}>
                                          <MediaItem data={song} />
                                       </li>
                                    ))}
                                 </React.Fragment>
                              );
                           case 'album':
                              return (
                                 <React.Fragment key={index}>
                                    {(section.items as IAlbum[]).map((album) => (
                                       <li key={album.id}>
                                          <MediaAlbumItem data={album} />
                                       </li>
                                    ))}
                                 </React.Fragment>
                              );
                           case 'artist':
                              return (
                                 <React.Fragment key={index}>
                                    {(section.items as IArtist[]).map((artist) => (
                                       <li key={artist.id}>
                                          <MediaArtistItem data={artist} />
                                       </li>
                                    ))}
                                 </React.Fragment>
                              );
                           default:
                              return null;
                        }
                     })}
                  </ul>
                  <Line />
               </>
            )}
            <ul>
               <div className="fx-between text-sm px-[10px] pb-2">
                  <h3 className="font-bold">Tìm kiếm gần đây</h3>
                  <button className="text-xs text-purple-color capitalize">Xoá</button>
               </div>
               <li className="text-xs px-[10px] text-search-color">
                  <span>Không có lịch sử tìm kiếm</span>
               </li>
            </ul>
         </div>
      </div>
   );
};

export default SearchList;
