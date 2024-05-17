'use client'
import SearchForm from '@/components/SearchForm'
import React from 'react'
import { Suspense } from 'react'

export default function page() {
  return (
    <Suspense>
    <SearchForm />
    </Suspense>
  )
}
