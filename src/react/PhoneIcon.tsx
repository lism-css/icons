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
      <path d="M9.757,10.125l-2.091-6.602c-.048-.152-.143-.285-.272-.379s-.284-.145-.443-.145h-2.451c-.398,0-.779.158-1.061.439s-.439.663-.439,1.061c0,9.113,7.387,16.5,16.5,16.5.398,0,.779-.158,1.061-.439s.439-.663.439-1.061v-2.451c0-.159-.051-.315-.145-.443s-.227-.224-.379-.272l-6.602-2.091c-1.71-.987-3.13-2.408-4.118-4.118Z" />
      {children}
    </svg>
  );
});

export default PhoneIcon;
