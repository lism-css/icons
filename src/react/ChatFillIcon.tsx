// 自動生成: scripts/generate.mjs（編集元: src/svg/）
import { forwardRef, type SVGProps } from 'react';

export type ChatFillIconProps = SVGProps<SVGSVGElement> & { size?: number | string; weight?: 'light' | 'regular' | 'bold' };
const ChatFillIcon = /* @__PURE__ */ forwardRef<SVGSVGElement, ChatFillIconProps>(function ChatFillIcon(
  { children, size = '1em', width = size, height = size, weight, strokeWidth = weight && { light: 1, regular: 1.5, bold: 2 }[weight], ...props },
  ref
) {
  const labelled = Boolean(props['aria-label'] || props['aria-labelledby']);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      width={width}
      height={height}
      strokeWidth={strokeWidth}
      focusable="false"
      aria-hidden={labelled ? undefined : true}
      role={labelled ? 'img' : undefined}
      {...props}
      ref={ref}
    >
      <path d="M1.75,5.625c0-2,1-3,3-3h14.5c2,0,3,1,3,3v9.75c0,2-1,3-3,3H6.373l-2.062,2.062c-.472.472-1.017.581-1.635.325-.617-.256-.926-.718-.926-1.386V5.625ZM13.125,10.5c0-.621-.504-1.125-1.125-1.125s-1.125.504-1.125,1.125.504,1.125,1.125,1.125,1.125-.504,1.125-1.125ZM17.875,10.5c0-.621-.504-1.125-1.125-1.125s-1.125.504-1.125,1.125.504,1.125,1.125,1.125,1.125-.504,1.125-1.125ZM8.375,10.5c0-.621-.504-1.125-1.125-1.125s-1.125.504-1.125,1.125.504,1.125,1.125,1.125,1.125-.504,1.125-1.125Z" />
      {children}
    </svg>
  );
});

export default ChatFillIcon;
