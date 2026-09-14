// 自動生成: scripts/generate.mjs（編集元: src/svg/）
import { forwardRef, type SVGProps } from 'react';

export type EyeOffIconProps = SVGProps<SVGSVGElement> & { size?: number | string; weight?: 'light' | 'regular' | 'bold' };
const EyeOffIcon = /* @__PURE__ */ forwardRef<SVGSVGElement, EyeOffIconProps>(function EyeOffIcon(
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
      <path d="M2.835,12c1.59-3.644,5.19-6,9.165-6s7.575,2.356,9.165,6c-1.59,3.644-5.19,6-9.165,6s-7.575-2.356-9.165-6Z" />
      <circle cx="12" cy="12" r="2.5" />
      <path d="M4.929,4.929l14.142,14.142" />
      {children}
    </svg>
  );
});

export default EyeOffIcon;
