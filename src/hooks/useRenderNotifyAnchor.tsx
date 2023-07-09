import { useEffect, useRef, useState } from 'react';

export default function useRenderNotifyAnchor() {
  const [elementRef, setElementRef] = useState<HTMLElement | null>(null);

  // ReturnType : 반환값을 추출 , typeof : 객체 데이터를 객체 타입으로 변환
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    if (elementRef == null) return;

    if (timeoutRef != null) {
      clearTimeout(timeoutRef.current);
    }

    elementRef.style.border = '5px solid red';

    timeoutRef.current = setTimeout(() => {
      elementRef.style.border = '5px solid';
    }, 300);
  });

  return setElementRef;
}
