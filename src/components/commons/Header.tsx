import React from 'react';
import cx from 'classnames';

interface HeaderProps {
   isFixed: boolean;
}

const Header: React.FC<HeaderProps> = ({ isFixed }) => {
   return (
      <section
         className={cx('h-header w-full fixed', isFixed && 'bg-header-color shadow-header z-30')}
      >
         Header
      </section>
   );
};

export default Header;
