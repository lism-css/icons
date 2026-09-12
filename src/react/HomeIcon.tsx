// 自動生成: scripts/generate.mjs（編集元: src/svg/）
import { forwardRef, type SVGProps } from 'react';

export type HomeIconProps = SVGProps<SVGSVGElement> & { size?: number | string; weight?: 'light' | 'regular' | 'bold' };
const HomeIcon = /* @__PURE__ */ forwardRef<SVGSVGElement, HomeIconProps>(function HomeIcon(
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
      <path d="M3,12L11.47,3.53c.141-.141.331-.22.53-.22s.39.079.53.22l8.47,8.47" />
      <path d="M4.8,10.2v10.05c0,.414.336.75.75.75h3.3c.414,0,.75-.336.75-.75v-5.7c0-.414.336-.75.75-.75h3.3c.414,0,.75.336.75.75v5.7c0,.414.336.75.75.75h3.3c.414,0,.75-.336.75-.75v-10.05" />
      {children}
    </svg>
  );
});

export default HomeIcon;
