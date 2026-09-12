// 自動生成: scripts/generate.mjs（編集元: src/svg/）
import { forwardRef, type SVGProps } from 'react';

export type LinkIconProps = SVGProps<SVGSVGElement> & { size?: number | string; weight?: 'light' | 'regular' | 'bold' };
const LinkIcon = /* @__PURE__ */ forwardRef<SVGSVGElement, LinkIconProps>(function LinkIcon(
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
      <path d="M11.92,5.53l1.173-1.173c1.809-1.809,4.741-1.809,6.55,0s1.809,4.741,0,6.55l-3.275,3.275c-1.809,1.809-4.741,1.809-6.55,0-.394-.394-.714-.856-.944-1.363" />
      <path d="M12.08,18.47l-1.173,1.173c-1.809,1.809-4.741,1.809-6.55,0s-1.809-4.741,0-6.55l3.275-3.275c1.809-1.809,4.741-1.809,6.55,0,.394.394.714.856.944,1.363" />
      {children}
    </svg>
  );
});

export default LinkIcon;
