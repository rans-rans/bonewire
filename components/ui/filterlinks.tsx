"use client"
import { filterlinksprops } from '@/types/next'
import React from 'react'
import { Button } from './button'
import { cn } from '@/lib/utils'
import { UseDashboardStore } from '@/store/dashboardstore'


const FilterLinks = ({filters,filterProducts,className}:filterlinksprops) => {
  return (
    <div className={cn('',className)}>
      {filters && filters.map(item => {
        return (
            <Button 
            key={Math.random() * 0.2}
            onClick={() => 
              filterProducts(item.label.toLowerCase())}
            className='text-sm  font-extrabold md:text-sm uppercase touchbtn m-2 p-2 '
            variant="ghost"
            >
                {item.label}
            </Button>
        )
      })}
    </div>
  )
}

export default FilterLinks
