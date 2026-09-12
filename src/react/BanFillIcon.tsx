// 自動生成: scripts/generate.mjs（編集元: src/svg/）
import { forwardRef, type SVGProps } from 'react';

export type BanFillIconProps = SVGProps<SVGSVGElement> & { size?: number | string; weight?: 'light' | 'regular' | 'bold' };
const BanFillIcon = /* @__PURE__ */ forwardRef<SVGSVGElement, BanFillIconProps>(function BanFillIcon(
  { children, size = '1em', width = size, height = size, weight, strokeWidth = weight && { light: 1, regular: 1.5, bold: 2 }[weight], ...props },
  ref
) {
  const labelled = Boolean(props['aria-label'] || props['aria-labelledby']);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      width={width}
      height={height}
      strokeWidth={strokeWidth ?? '1.5'}
      focusable="false"
      aria-hidden={labelled ? undefined : true}
      role={labelled ? 'img' : undefined}
      {...props}
      ref={ref}
    >
      <path
        d="M19.5,12c0,1.801-.635,3.454-1.693,4.747L7.253,6.193c1.293-1.058,2.946-1.693,4.747-1.693,4.142,0,7.5,3.358,7.5,7.5ZM6.193,7.253l10.554,10.554c-1.293,1.058-2.946,1.693-4.747,1.693-4.142,0-7.5-3.358-7.5-7.5,0-1.801.635-3.454,1.693-4.747Z"
        fill="currentColor"
        stroke="none"
      />
      <path d="M12,2c5.523,0,10,4.477,10,10s-4.477,10-10,10S2,17.523,2,12,6.477,2,12,2Z" />
      {children}
    </svg>
  );
});

export default BanFillIcon;
