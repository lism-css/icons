// 自動生成: scripts/generate.mjs（編集元: src/svg/）
import { forwardRef, type SVGProps } from 'react';

export type TranslateIconProps = SVGProps<SVGSVGElement> & { size?: number | string; weight?: 'light' | 'regular' | 'bold' };
const TranslateIcon = /* @__PURE__ */ forwardRef<SVGSVGElement, TranslateIconProps>(function TranslateIcon(
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
      <path d="M2.5,6h9.5" />
      <path d="M7.25,3v3" />
      <path d="M10.25,6c-.92,3.91-3.735,7.1-7.5,8.5" />
      <path d="M4.25,6c.92,3.91,3.735,7.1,7.5,8.5" />
      <path d="M12.5,21.5l4.5-9,4.5,9" />
      <path d="M14,18.5h6" />
      {children}
    </svg>
  );
});

export default TranslateIcon;
