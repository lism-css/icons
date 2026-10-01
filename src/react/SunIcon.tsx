// 自動生成: scripts/generate.mjs（編集元: src/svg/）
import { forwardRef, type SVGProps } from 'react';

export type SunIconProps = SVGProps<SVGSVGElement> & { size?: number | string; weight?: 'light' | 'regular' | 'bold' };
const SunIcon = /* @__PURE__ */ forwardRef<SVGSVGElement, SunIconProps>(function SunIcon(
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
      <circle cx="12" cy="12" r="5" />
      <path d="M20,12h2" />
      <path d="M17.657,17.657l1.414,1.414" />
      <path d="M12,20v2" />
      <path d="M6.343,17.657l-1.414,1.414" />
      <path d="M4,12h-2" />
      <path d="M6.343,6.343l-1.414-1.414" />
      <path d="M12,4v-2" />
      <path d="M17.657,6.343l1.414-1.414" />
      {children}
    </svg>
  );
});

export default SunIcon;
