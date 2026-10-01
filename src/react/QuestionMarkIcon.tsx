// 自動生成: scripts/generate.mjs（編集元: src/svg/）
import { forwardRef, type SVGProps } from 'react';

export type QuestionMarkIconProps = SVGProps<SVGSVGElement> & { size?: number | string; weight?: 'light' | 'regular' | 'bold' };
const QuestionMarkIcon = /* @__PURE__ */ forwardRef<SVGSVGElement, QuestionMarkIconProps>(function QuestionMarkIcon(
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
      <path d="M8.25,8.25c0-2.071,1.679-3.75,3.75-3.75s3.75,1.679,3.75,3.75c0,1.83-1.321,3.393-3.125,3.698-.361.061-.625.374-.625.74v3.063" />
      <circle cx="12" cy="19.125" r=".375" />
      {children}
    </svg>
  );
});

export default QuestionMarkIcon;
