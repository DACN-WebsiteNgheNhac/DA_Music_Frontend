import React from 'react';
import { Line } from '../Commons';

interface CommentItemProps {}

const CommentItem: React.FC<CommentItemProps> = () => {
   return (
      <div className="flex">
         <div className="w-10 h-10 rounded-full bg-purple-400/50 flex-shrink-0 flex items-center justify-center">
            <img
               className="h-9 w-9 rounded-full object-cover"
               src="https://randomuser.me/api/portraits/men/43.jpg"
               alt=""
            />
         </div>

         <div className="ml-2 text-sm">
            <div className="fy-center">
               <span className="font-medium text-title-color">Thắng Trần</span>
               <Line type="vertical" className="mx-2" />
               <span className="text-subtitle-color text-xs">2023-10-02 14:30</span>
            </div>
            <p className="text-subtitle-color">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, quas. Perspiciatis
               corrupti necessitatibus modi molestiae sunt, ut enim animi blanditiis, omnis libero
               nobis doloremque facere. Mollitia iure aliquid ipsa ea.
            </p>
         </div>
      </div>
   );
};

export default CommentItem;
