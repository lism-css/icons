// 自動生成: scripts/generate.mjs（編集元: src/svg/）
import { forwardRef, type SVGProps } from 'react';

export type QuestionIconProps = SVGProps<SVGSVGElement> & { size?: number | string; weight?: 'light' | 'regular' | 'bold' };
const QuestionIcon = /* @__PURE__ */ forwardRef<SVGSVGElement, QuestionIconProps>(function QuestionIcon(
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
      <circle cx="12" cy="12" r="10" />
      <path d="M9.5,9.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5c0,1.158-.796,2.165-1.923,2.433-.338.08-.577.382-.577.73v.588" />
      <circle cx="12" cy="16.625" r=".375" />
      {children}
    </svg>
  );
});

export default QuestionIcon;
