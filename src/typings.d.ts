import type { AttributifyAttributes } from '@unocss/preset-attributify';

declare module 'react' {
  interface HTMLAttributes<T> extends AttributifyAttributes {}
}

declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

