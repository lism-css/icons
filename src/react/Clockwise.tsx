// 自動生成: scripts/generate.mjs（編集元: src/svg/）
import { forwardRef, type SVGProps } from 'react';

export type ClockwiseProps = SVGProps<SVGSVGElement> & { size?: number | string; weight?: 'light' | 'regular' | 'bold' };
const Clockwise = /* @__PURE__ */ forwardRef<SVGSVGElement, ClockwiseProps>(function Clockwise(
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
      <path d="M21.659,14.588c-1.171,4.372-5.133,7.412-9.659,7.412-5.523,0-10-4.477-10-10S6.477,2,12,2c2.652,0,5.196,1.054,7.071,2.929l2.929,2.929" />
      <path d="M18.25,7.858h3.75v-3.75" />
      <path d="M12,6v6l3.354,1.677" />
      {children}
    </svg>
  );
});

export default Clockwise;
