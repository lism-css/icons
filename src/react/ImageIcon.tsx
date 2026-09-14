// 自動生成: scripts/generate.mjs（編集元: src/svg/）
import { forwardRef, type SVGProps } from 'react';

export type ImageIconProps = SVGProps<SVGSVGElement> & { size?: number | string; weight?: 'light' | 'regular' | 'bold' };
const ImageIcon = /* @__PURE__ */ forwardRef<SVGSVGElement, ImageIconProps>(function ImageIcon(
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
      <rect x="2.5" y="4.875" width="19" height="14.25" rx="2.25" ry="2.25" />
      <polyline points="2.5 16.875 7.5 11.875 9.75 14.125 14.25 9.625 21.5 16.875" />
      <circle cx="7.5" cy="8.25" r=".375" />
      {children}
    </svg>
  );
});

export default ImageIcon;
