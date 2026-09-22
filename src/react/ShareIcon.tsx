// 自動生成: scripts/generate.mjs（編集元: src/svg/）
import { forwardRef, type SVGProps } from 'react';

export type ShareIconProps = SVGProps<SVGSVGElement> & { size?: number | string; weight?: 'light' | 'regular' | 'bold' };
const ShareIcon = /* @__PURE__ */ forwardRef<SVGSVGElement, ShareIconProps>(function ShareIcon(
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
      <path d="M7.736,10.882l8.528-4.264" />
      <path d="M7.736,13.118l8.528,4.264" />
      <circle cx="5.5" cy="12" r="2.5" />
      <circle cx="18.5" cy="5.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
      {children}
    </svg>
  );
});

export default ShareIcon;
