import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { Button, CustomScrollbar } from '../Commons';
import CommentItem from './CommentItem';

interface CommentModalProps {
   hide: () => any;
}

const CommentModal: React.FC<CommentModalProps> = ({ hide }) => {
   const [isClose, setIsClose] = useState<boolean>(false);

   const handleClickBackdrop = (e: React.MouseEvent<HTMLDivElement>) => {
      const { id } = e.target as HTMLDivElement;
      if (id === 'comment-modal' && isClose) hide();
   };

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
   };

   return (
      <div
         id="comment-modal"
         onMouseDown={() => setIsClose(true)}
         onMouseUp={handleClickBackdrop}
         className="fixed inset-0 bg-overlay-color z-30 f-center"
      >
         <div
            className="w-[800px] max-h-[70vh] h-full p-4 bg-primary-color rounded-lg relative flex flex-col gap-1"
            onMouseDown={(e: React.MouseEvent) => e.stopPropagation()}
         >
            <Button
               tippyContent="Đóng"
               className="absolute right-2 top-2 w-6 h-6 hover:bg-alpha-color"
               onClick={hide}
            >
               <IoMdClose size={18} />
            </Button>

            <div className="flex-1 flex flex-col">
               <h3 className="text-lg font-bold">Bình luận</h3>
               <div className="flex-1 mt-2">
                  <CustomScrollbar>
                     <div className="flex flex-col gap-2">
                        <CommentItem />
                        <CommentItem />
                        <CommentItem />
                        <CommentItem />
                        <CommentItem />
                        <CommentItem />
                        <CommentItem />
                        <CommentItem />
                        <CommentItem />
                        <CommentItem />
                        <CommentItem />
                        <CommentItem />
                     </div>
                  </CustomScrollbar>
               </div>
            </div>
            <form className="relative text-sm" onSubmit={handleSubmit}>
               <input
                  type="text"
                  className="w-full p-2 pr-24 text-sm border border-gray-300 rounded-lg bg-alpha-color focus:ring-progressbar-active focus:border-progressbar-active"
               />
               <button
                  type="submit"
                  className="text-white absolute right-2 top-1/2 -translate-y-1/2 bg-progressbar-active rounded-lg text-sm px-2 py-1"
               >
                  Bình luận
               </button>
            </form>
         </div>
      </div>
   );
};

export default CommentModal;
