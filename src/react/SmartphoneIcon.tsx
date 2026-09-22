// 自動生成: scripts/generate.mjs（編集元: src/svg/）
import { forwardRef, type SVGProps } from 'react';

export type SmartphoneIconProps = SVGProps<SVGSVGElement> & { size?: number | string; weight?: 'light' | 'regular' | 'bold' };
const SmartphoneIcon = /* @__PURE__ */ forwardRef<SVGSVGElement, SmartphoneIconProps>(function SmartphoneIcon(
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
      <path d="M9.25,2h5.5c1.243,0,2.25,1.007,2.25,2.25v15.5c0,1.243-1.007,2.25-2.25,2.25h-5.5c-1.243,0-2.25-1.007-2.25-2.25V4.25c0-1.243,1.007-2.25,2.25-2.25Z" />
      <circle cx="12" cy="18.625" r=".375" />
      {children}
    </svg>
  );
});

export default SmartphoneIcon;
