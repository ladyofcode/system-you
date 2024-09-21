import React from 'react'

interface PageTitleProps {
  children: React.ReactNode
  className?: string
}

export function PageTitle({ children, className = '' }: PageTitleProps) {
  return <h1 className={`font-serif font-light ${className}`}>{children}</h1>
}