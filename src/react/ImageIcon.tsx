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
      <path d="M4.75,4.875h14.5c1.243,0,2.25,1.007,2.25,2.25v9.75c0,1.243-1.007,2.25-2.25,2.25H4.75c-1.243,0-2.25-1.007-2.25-2.25V7.125c0-1.243,1.007-2.25,2.25-2.25Z" />
      <path d="M2.5,16.875l4.47-4.47c.293-.293.768-.293,1.061,0l1.189,1.189c.293.293.768.293,1.061,0l3.439-3.439c.293-.293.768-.293,1.061,0l6.72,6.72" />
      <circle cx="7.5" cy="8.25" r=".375" />
      {children}
    </svg>
  );
});

export default ImageIcon;
