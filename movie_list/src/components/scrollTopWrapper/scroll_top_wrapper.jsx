import React, { useEffect } from 'react';
import { useLocation } from 'react-router';

export default function ScrollTopWrapper (props) {
  let { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return (<>{props.children}</>);
}