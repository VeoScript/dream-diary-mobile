import React from 'react';
import {Path, Svg} from 'react-native-svg';

interface SvgIconProps {
  width: number;
  height: number;
  iconName: string;
  strokeWidth?: number;
  strokeColor?: string;
  viewBoxWidth?: number;
  viewBoxHeight?: number;
  fill?: string;
  customStyle?: any;
}

// Usage...
// <SvgIcon
//   iconName="search"
//   strokeColor="#333"
//   width={25}
//   height={25}
//   viewBoxHeight={20}
//   viewBoxWidth={20}
// />

export default function SvgIcon({
  width = 24,
  height = 24,
  iconName,
  viewBoxWidth = 24,
  viewBoxHeight = 24,
  fill = 'none',
  strokeColor = 'black',
  strokeWidth = 1.5,
  customStyle,
}: SvgIconProps): JSX.Element {
  return (
    <Svg
      fill={fill}
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      strokeWidth={`${strokeWidth}`}
      stroke={`${strokeColor}`}
      width={width}
      height={height}
      style={customStyle}>
      {iconMapper(iconName)}
    </Svg>
  );
}

const iconMapper = (iconName: string) => {
  switch (iconName) {
    case 'search':
      return (
        <Path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      );
    default:
      <></>;
  }
};
