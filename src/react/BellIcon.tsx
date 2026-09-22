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
      <path d="M7,8.625c0-2.761,2.239-5,5-5s5,2.239,5,5v5.189c0,.199.079.39.22.53l2.5,2.5c.293.293.293.768,0,1.061-.141.141-.331.22-.53.22H4.811c-.414,0-.75-.336-.75-.75,0-.199.079-.39.22-.53l2.5-2.5c.141-.141.22-.331.22-.53v-5.189Z" />
      <path d="M9.75,18.125c0,1.243,1.007,2.25,2.25,2.25s2.25-1.007,2.25-2.25" />
      {children}
    </svg>
  );
});

export default BellIcon;
