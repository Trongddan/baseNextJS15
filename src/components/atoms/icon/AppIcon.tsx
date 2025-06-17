

import React from 'react';


import { TLiteralUnion } from '@/interfaces';

import { IconMap } from './IconMap';
import Image from 'next/image';


interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: TLiteralUnion<keyof typeof IconMap>;
  size?: string | number;
  color?: string;
}

export const AppIcon: React.FC<IconProps> = ({
  name,
  width = '24',
  height = '24',
  size,
  color,
  ...rest
}) => {
  const MatchIcon = IconMap?.[name as keyof typeof IconMap];
  console.log(MatchIcon)
  if (!MatchIcon) return null;

  // ✅ Handle case where MatchIcon is an SVG URL string
  if (typeof MatchIcon === 'string') {
    return (
      <Image
        src={MatchIcon}
        alt={name}
        width={Number(size || width)}
        color={color}
        height={Number(size || height)}
      />
    );
  }

  return (
    <MatchIcon
      data-test="app-icon"
      width={size || width}
      height={size || height}
      color={color}
      {...rest}
    />
  );
};
