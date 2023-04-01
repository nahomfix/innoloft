import { FC } from 'react';
import SearchIcon from '../../../assets/icons/inno-search.svg';

interface SearchBarProps {
  placeholder?: string;
}

export const SearchBar: FC<SearchBarProps> = ({ placeholder }) => {
  return (
    <div className="hidden xl:flex bg-white items-center rounded overflow-hidden w-[500px]">
      <input
        className="rounded outline-none border-none text-black px-2 pt-[5px] pb-[6px] flex-1 placeholder-heading"
        placeholder={placeholder}
      />
      <img src={SearchIcon} alt="Search" className="h-4 w-4 mr-[14px]" />
    </div>
  );
};
