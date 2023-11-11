import React from 'react';
import Tippy from '@tippyjs/react';
import cx from 'classnames';

interface CircleButtonProps {
   tippyContent?: string;
   className?: string;
   children?: React.ReactNode;
   [index: string]: any;
}

const CircleButton: React.FC<CircleButtonProps> = ({
   children,
   tippyContent,
   className,
   ...props
}) => {
   let TippyComponent: any = React.Fragment;
   const tippySetting: ITippySetting = {};

   if (tippyContent) {
      TippyComponent = Tippy;
      tippySetting.content = <span className="text-[11px]">{tippyContent}</span>;
      tippySetting.placement = 'top';
      tippySetting.arrow = true;
      tippySetting.duration = 300;
      tippySetting.delay = [75, 0];
   }

   return (
      <TippyComponent {...tippySetting}>
         <button
            {...props}
            className={cx('w-10 h-10 f-center rounded-full bg-alpha-color', className)}
         >
            {children}
         </button>
      </TippyComponent>
   );
};

export default CircleButton;
