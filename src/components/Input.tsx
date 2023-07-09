import React from 'react';
import useRenderNotifyAnchor from '../hooks/useRenderNotifyAnchor';

type Props = Omit<React.InputHTMLAttributes<HTMLInputElement>, keyof OwnProps> & OwnProps;

type OwnProps = { useRenderNotify?: boolean };

export default function Input({ useRenderNotify, ...props }: Props = { useRenderNotify: true }) {
  const anchor = useRenderNotifyAnchor();

  return <input style={{ margin: '10px' }} ref={anchor} {...props} />;
}
