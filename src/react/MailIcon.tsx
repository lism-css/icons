// 自動生成: scripts/generate.mjs（編集元: src/svg/）
import { forwardRef, type SVGProps } from 'react';

export type MailIconProps = SVGProps<SVGSVGElement> & { size?: number | string; weight?: 'light' | 'regular' | 'bold' };
const MailIcon = /* @__PURE__ */ forwardRef<SVGSVGElement, MailIconProps>(function MailIcon(
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
      <path d="M4.75,5.667h14.5c1.243,0,2.25,1.007,2.25,2.25h0v8.167c0,1.243-1.007,2.25-2.25,2.25H4.75c-1.243,0-2.25-1.007-2.25-2.25h0V7.917c0-1.243,1.007-2.25,2.25-2.25Z" />
      <path d="M2.5,7.917l9.12,5.36c.235.138.525.138.76,0l9.12-5.36" />
      {children}
    </svg>
  );
});

export default MailIcon;
