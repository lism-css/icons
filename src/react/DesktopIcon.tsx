// 自動生成: scripts/generate.mjs（編集元: src/svg/）
import { forwardRef, type SVGProps } from 'react';

export type DesktopIconProps = SVGProps<SVGSVGElement> & { size?: number | string; weight?: 'light' | 'regular' | 'bold' };
const DesktopIcon = /* @__PURE__ */ forwardRef<SVGSVGElement, DesktopIconProps>(function DesktopIcon(
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
      <path d="M4.75,4.281h14.5c1.243,0,2.25,1.007,2.25,2.25v6.188c0,1.243-1.007,2.25-2.25,2.25H4.75c-1.243,0-2.25-1.007-2.25-2.25h0v-6.188c0-1.243,1.007-2.25,2.25-2.25Z" />
      <line x1="12" y1="14.969" x2="12" y2="19.719" />
      <line x1="7.25" y1="19.719" x2="16.75" y2="19.719" />
      {children}
    </svg>
  );
});

export default DesktopIcon;
