import { FC } from 'react';

type TSize = 'large' | 'medium' | 'small';

interface AvatarProps {
  src: string;
  alt: string;
  size: TSize;
}

const getDimensions = (size: TSize) => {
  if (size === 'small') {
    return 'h-[25px] w-[25px]';
  }

  if (size === 'medium') {
    return 'h-[60px] w-[60px]';
  }

  return 'h-[70px] w-[70px]';
};

export const Avatar: FC<AvatarProps> = ({ src, alt, size = 'medium' }) => {
  return (
    <img
      className={`${getDimensions(
        size
      )} rounded-full object-cover border border-white`}
      src={src}
      alt={alt}
    />
  );
};
