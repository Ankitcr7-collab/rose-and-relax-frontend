"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

// This is a placeholder component that doesn't depend on recharts
// If you need chart functionality, please install recharts: npm install recharts
export const Chart = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div 
      className={cn("flex aspect-video items-center justify-center border rounded-lg p-4 text-center", className)} 
      {...props}
    >
      <p>Charts require the recharts library.</p>
      <p>Please install it with: npm install recharts</p>
      {children}
    </div>
  )
}

// Export a simplified API that matches the original
export {
  Chart as ChartContainer,
  Chart as ChartTooltip,
  Chart as ChartTooltipContent,
  Chart as ChartLegend,
  Chart as ChartLegendContent,
  Chart as ChartStyle,
}
