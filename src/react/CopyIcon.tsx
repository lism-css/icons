// 自動生成: scripts/generate.mjs（編集元: src/svg/）
import { forwardRef, type SVGProps } from 'react';

export type CopyIconProps = SVGProps<SVGSVGElement> & { size?: number | string; weight?: 'light' | 'regular' | 'bold' };
const CopyIcon = /* @__PURE__ */ forwardRef<SVGSVGElement, CopyIconProps>(function CopyIcon(
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
      <path d="M15,6v-.75c0-1.243-1.007-2.25-2.25-2.25h-7.5c-1.243,0-2.25,1.007-2.25,2.25v7.5c0,1.243,1.007,2.25,2.25,2.25h.75" />
      <rect x="9" y="9" width="12" height="12" rx="2.25" ry="2.25" />
      {children}
    </svg>
  );
});

export default CopyIcon;
