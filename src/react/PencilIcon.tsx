// 自動生成: scripts/generate.mjs（編集元: src/svg/）
import { forwardRef, type SVGProps } from 'react';

export type PencilIconProps = SVGProps<SVGSVGElement> & { size?: number | string; weight?: 'light' | 'regular' | 'bold' };
const PencilIcon = /* @__PURE__ */ forwardRef<SVGSVGElement, PencilIconProps>(function PencilIcon(
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
      <path d="M4.853,20.029c-.246.049-.5-.028-.677-.205s-.254-.432-.205-.677l.485-2.424c.029-.145.1-.279.205-.383l12.059-12.059c.141-.141.331-.22.53-.22s.39.079.53.22l1.939,1.939c.293.293.293.768,0,1.061l-12.059,12.059c-.105.105-.238.176-.383.205l-2.424.485Z" />
      <path d="M15,6l3,3" />
      {children}
    </svg>
  );
});

export default PencilIcon;
