// 自動生成: scripts/generate.mjs（編集元: src/svg/）
import { forwardRef, type SVGProps } from 'react';

export type PhoneIconProps = SVGProps<SVGSVGElement> & { size?: number | string; weight?: 'light' | 'regular' | 'bold' };
const PhoneIcon = /* @__PURE__ */ forwardRef<SVGSVGElement, PhoneIconProps>(function PhoneIcon(
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
      <path d="M5.25,3h1.815c.269,0,.518.144.651.378l2.527,4.422c.155.271.126.61-.073.85l-2.121,2.564c-.207.251-.229.606-.055.881,1.002,1.575,2.337,2.91,3.912,3.912.274.175.63.152.881-.055l2.564-2.121c.241-.199.579-.228.85-.073l4.422,2.527c.234.134.378.382.378.651v1.815c0,1.243-1.007,2.25-2.25,2.25-8.698,0-15.75-7.052-15.75-15.75,0-1.243,1.007-2.25,2.25-2.25Z" />
      {children}
    </svg>
  );
});

export default PhoneIcon;
