// 自動生成: scripts/generate.mjs（編集元: src/svg/）
import { forwardRef, type SVGProps } from 'react';

export type MoonIconProps = SVGProps<SVGSVGElement> & { size?: number | string; weight?: 'light' | 'regular' | 'bold' };
const MoonIcon = /* @__PURE__ */ forwardRef<SVGSVGElement, MoonIconProps>(function MoonIcon(
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
      <path d="M20.867,16.624c-1.993,3.82-6.209,5.935-10.462,5.248-4.254-.688-7.589-4.023-8.276-8.276-.688-4.254,1.427-8.47,5.248-10.462-2.019,3.873-1.292,8.607,1.796,11.695s7.822,3.815,11.695,1.796Z" />
      {children}
    </svg>
  );
});

export default MoonIcon;
