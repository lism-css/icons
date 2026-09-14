// 自動生成: scripts/generate.mjs（編集元: src/svg/）
import { forwardRef, type SVGProps } from 'react';

export type RefreshIconProps = SVGProps<SVGSVGElement> & { size?: number | string; weight?: 'light' | 'regular' | 'bold' };
const RefreshIcon = /* @__PURE__ */ forwardRef<SVGSVGElement, RefreshIconProps>(function RefreshIcon(
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
      <path d="M2.341,14.588c-1.171-4.372.74-8.985,4.659-11.248s8.871-1.611,12.071,1.589l2.929,2.929" />
      <path d="M18.25,7.858h3.75v-3.75" />
      <path d="M21.659,9.412c1.171,4.372-.74,8.985-4.659,11.248s-8.871,1.611-12.071-1.589l-2.929-2.929" />
      <path d="M5.75,16.142h-3.75v3.75" />
      {children}
    </svg>
  );
});

export default RefreshIcon;
