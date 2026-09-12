// 自動生成: scripts/generate.mjs（編集元: src/svg/）
import { forwardRef, type SVGProps } from 'react';

export type UploadIconProps = SVGProps<SVGSVGElement> & { size?: number | string; weight?: 'light' | 'regular' | 'bold' };
const UploadIcon = /* @__PURE__ */ forwardRef<SVGSVGElement, UploadIconProps>(function UploadIcon(
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
      <polyline points="8 7 12 3 16 7" />
      <line x1="12" y1="15" x2="12" y2="3" />
      <path d="M3,15v3.75c0,1.243,1.007,2.25,2.25,2.25h13.5c1.243,0,2.25-1.007,2.25-2.25v-3.75" />
      {children}
    </svg>
  );
});

export default UploadIcon;
