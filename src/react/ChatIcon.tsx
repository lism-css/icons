// 自動生成: scripts/generate.mjs（編集元: src/svg/）
import { forwardRef, type SVGProps } from 'react';

export type ChatIconProps = SVGProps<SVGSVGElement> & { size?: number | string; weight?: 'light' | 'regular' | 'bold' };
const ChatIcon = /* @__PURE__ */ forwardRef<SVGSVGElement, ChatIconProps>(function ChatIcon(
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
      <path d="M2.5,5.625c0-1.243,1.007-2.25,2.25-2.25h14.5c1.243,0,2.25,1.007,2.25,2.25v9.75c0,1.243-1.007,2.25-2.25,2.25H6.373c-.199,0-.39.079-.53.22l-2.062,2.062c-.214.214-.537.279-.817.163s-.463-.39-.463-.693V5.625Z" />
      <circle cx="7.25" cy="10.5" r=".375" />
      <circle cx="12" cy="10.5" r=".375" />
      <circle cx="16.75" cy="10.5" r=".375" />
      {children}
    </svg>
  );
});

export default ChatIcon;
