import React from 'react';
import useRenderNotifyAnchor from '../hooks/useRenderNotifyAnchor';

// https://www.pumpkiinbell.com/blog/react/reusable-components
type Props = Omit<React.HTMLAttributes<HTMLFormElement>, keyof OwnProps> & OwnProps;

type OwnProps = { useRenderNotify?: boolean };

//  { useRenderNotify = true, ...props }: Props 와 같다.
export default function Form({ useRenderNotify, ...props }: Props = { useRenderNotify: true }) {
  const anchor = useRenderNotifyAnchor();

  return <form style={{ display: 'flex', flexDirection: 'column' }} ref={anchor} {...props} />;
}
