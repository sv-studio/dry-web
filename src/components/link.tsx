import * as Headless from '@headlessui/react'
import NextLink, { type LinkProps } from 'next/link'
import { forwardRef } from 'react'

export const Link = forwardRef(function Link(
  props: LinkProps & React.ComponentPropsWithoutRef<'a'>,
  ref: React.ForwardedRef<HTMLAnchorElement>,
) {
  const { className, ...rest } = props
  return (
    <Headless.DataInteractive>
      <NextLink
        ref={ref}
        className={`focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-primary ${className ?? ''}`}
        {...rest}
      />
    </Headless.DataInteractive>
  )
})
