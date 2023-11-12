import React from 'react';
import cx from 'classnames';

interface ImageProps {
   className?: string;
   overlay?: boolean;
   children?: React.ReactNode;
   src: string;
}

const Image: React.FC<ImageProps> = ({ src, className, overlay = true, children }) => {
   return (
      <figure
         className={cx('relative rounded overflow-hidden cursor-pointer group/image', className)}
      >
         <img
            className="w-full h-full object-cover group-hover/image:scale-110 transition-all ease-[ease] duration-700"
            src={src}
            alt=""
         />
         {overlay && (
            <div className="absolute inset-0 hidden group-hover/image:block bg-overlay-color" />
         )}
         {children && (
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[50px] hidden justify-evenly items-center group-hover/image:flex text-primary-color">
               {children}
            </div>
         )}
      </figure>
   );
};

export default Image;
