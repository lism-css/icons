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
      <path d="M10.375,6.133c4.515-.743,8.959,1.673,10.79,5.867-.477,1.093-1.145,2.091-1.974,2.949" />
      <path d="M13.625,17.867c-4.515.743-8.959-1.673-10.79-5.867.477-1.093,1.145-2.091,1.974-2.949" />
      <path d="M4.929,4.929l14.142,14.142" />
      {children}
    </svg>
  );
});

export default EyeOffIcon;
