// NotificationBell.tsx
import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

interface NotificationBellProps extends SvgProps {
  fill?: string;
}

const NotificationBell = ({ fill = '#000000', ...props }: NotificationBellProps) => (
  <Svg width={18} height={20} viewBox="0 0 18 20" fill="none" {...props}>
    <Path
      d="M17.794 14.494c-.52-.896-1.294-3.432-1.294-6.744 0-1.989-.79-3.897-2.197-5.303C12.897 1.04 10.99.25 9 .25S5.103 1.04 3.697 2.447C2.29 3.853 1.5 5.76 1.5 7.75c0 3.313-.774 5.848-1.295 6.744a1.5 1.5 0 0 0 1.295 2.256h3.826a3.751 3.751 0 0 0 7.348 0H16.5a1.5 1.5 0 0 0 1.294-2.256ZM9 18.25a2.252 2.252 0 0 1-2.12-1.5h4.24a2.252 2.252 0 0 1-2.12 1.5ZM1.5 15.25c.722-1.241 1.5-4.117 1.5-7.5a6 6 0 0 1 12 0c0 3.38.776 6.256 1.5 7.5H1.5Z"
      fill={fill}
    />
  </Svg>
);

export default NotificationBell;