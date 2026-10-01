// 自動生成: scripts/generate.mjs（編集元: src/svg/）
import { forwardRef, type SVGProps } from 'react';

export type TrashIconProps = SVGProps<SVGSVGElement> & { size?: number | string; weight?: 'light' | 'regular' | 'bold' };
const TrashIcon = /* @__PURE__ */ forwardRef<SVGSVGElement, TrashIconProps>(function TrashIcon(
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
      <line x1="14.25" y1="10" x2="14.25" y2="17" />
      <line x1="9.75" y1="10" x2="9.75" y2="17" />
      <path d="M5,6v12.75c0,1.243,1.007,2.25,2.25,2.25h9.5c1.243,0,2.25-1.007,2.25-2.25V6" />
      <path d="M9,6v-2.25c0-.414.336-.75.75-.75h4.5c.414,0,.75.336.75.75v2.25" />
      <line x1="3" y1="6" x2="21" y2="6" />
      {children}
    </svg>
  );
});

export default TrashIcon;
