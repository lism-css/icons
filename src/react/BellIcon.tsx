// 自動生成: scripts/generate.mjs（編集元: src/svg/）
import { forwardRef, type SVGProps } from 'react';

export type BellIconProps = SVGProps<SVGSVGElement> & { size?: number | string; weight?: 'light' | 'regular' | 'bold' };
const BellIcon = /* @__PURE__ */ forwardRef<SVGSVGElement, BellIconProps>(function BellIcon(
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
      <path d="M4.5,11.25c0-4.142,3.358-7.5,7.5-7.5s7.5,3.358,7.5,7.5v5.25l1.5,1.5H3l1.5-1.5v-5.25Z" />
      <path d="M9.75,18c0,1.243,1.007,2.25,2.25,2.25s2.25-1.007,2.25-2.25" />
      {children}
    </svg>
  );
});

export default BellIcon;
