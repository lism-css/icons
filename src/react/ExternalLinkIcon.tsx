// 自動生成: scripts/generate.mjs（編集元: src/svg/）
import { forwardRef, type SVGProps } from 'react';

export type ExternalLinkIconProps = SVGProps<SVGSVGElement> & { size?: number | string; weight?: 'light' | 'regular' | 'bold' };
const ExternalLinkIcon = /* @__PURE__ */ forwardRef<SVGSVGElement, ExternalLinkIconProps>(function ExternalLinkIcon(
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
      <path d="M10.5,7.5h-5.25c-1.243,0-2.25,1.007-2.25,2.25v9c0,1.243,1.007,2.25,2.25,2.25h9c1.243,0,2.25-1.007,2.25-2.25v-5.25" />
      <line x1="10.5" y1="13.5" x2="21" y2="3" />
      <path d="M15,3h6v6" />
      {children}
    </svg>
  );
});

export default ExternalLinkIcon;
