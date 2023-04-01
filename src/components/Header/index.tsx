import { FC } from 'react';
import DownIcon from '../../assets/icons/inno-accordion-down.svg';
import MessageIcon from '../../assets/icons/inno-messenger.svg';
import NotificationIcon from '../../assets/icons/inno-notifications.svg';
import LogoWhite from '../../assets/icons/logo-white.svg';
import { Avatar, SearchBar } from '../UI';

export const Header: FC = () => {
  return (
    <div className="bg-primary px-5 py-[14px] text-white flex items-center xl:px-60">
      <img src={LogoWhite} alt="Innoloft logo" className="h-6 mr-[170px]" />
      <SearchBar placeholder="Enter interests, keyword, company name, etc." />
      <div className="hidden xl:flex ml-auto items-center gap-5">
        <img src={MessageIcon} alt="Innoloft logo" className="h-4 w-4" />
        <div className="flex items-center gap-[9px]">
          <span>EN</span>
          <img src={DownIcon} alt="Innoloft logo" className="h-4 w-4" />
        </div>
        <img src={NotificationIcon} alt="Innoloft logo" className="h-4 w-4" />
        <div className="flex items-center gap-[9px]">
          <Avatar
            src="https://randomuser.me/api/portraits/men/75.jpg"
            alt="Image"
            size="small"
          />
          <img src={DownIcon} alt="Innoloft logo" className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
};
