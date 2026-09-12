// 自動生成: scripts/generate.mjs（編集元: src/svg/）
import { forwardRef, type SVGProps } from 'react';

export type HeartProps = SVGProps<SVGSVGElement> & { size?: number | string; weight?: 'light' | 'regular' | 'bold' };
const Heart = /* @__PURE__ */ forwardRef<SVGSVGElement, HeartProps>(function Heart(
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
      <path d="M12,4.945c-1.044-1.044-2.459-1.63-3.935-1.63-3.073,0-5.565,2.492-5.565,5.565,0,.771.16,1.534.471,2.24,1.77,4.024,4.816,7.353,8.668,9.472.111.061.235.093.362.093s.251-.032.362-.093c3.852-2.119,6.898-5.448,8.668-9.472.311-.706.471-1.469.471-2.24,0-3.073-2.492-5.565-5.565-5.565-1.476,0-2.891.586-3.935,1.63Z" />
      {children}
    </svg>
  );
});

export default Heart;
