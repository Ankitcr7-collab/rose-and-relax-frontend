"use client"

import * as React from "react"
import { Dot } from "lucide-react"

import { cn } from "@/lib/utils"

// This is a simplified version that doesn't depend on input-otp
// If you need OTP input functionality, please install input-otp: npm install input-otp

// Create a simple context to mimic the original
type OTPContextType = {
  slots: Array<{
    char: string;
    hasFakeCaret: boolean;
    isActive: boolean;
  }>;
}

const OTPInputContext = React.createContext<OTPContextType>({
  slots: []
});

const InputOTP = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    containerClassName?: string;
    maxLength?: number;
  }
>(({ className, containerClassName, maxLength = 6, ...props }, ref) => {
  // Create a basic state to track input
  const [value, setValue] = React.useState<string[]>(Array(maxLength).fill(""));
  
  // Provide a simplified context
  const contextValue = React.useMemo(() => ({
    slots: value.map((char, i) => ({
      char,
      hasFakeCaret: false,
      isActive: false
    }))
  }), [value]);

  return (
    <OTPInputContext.Provider value={contextValue}>
      <div
        ref={ref}
        className={cn(
          "flex items-center gap-2 has-[:disabled]:opacity-50",
          containerClassName
        )}
        {...props}
      >
        <div className={cn("disabled:cursor-not-allowed", className)}>
          {props.children}
        </div>
      </div>
    </OTPInputContext.Provider>
  )
})
InputOTP.displayName = "InputOTP"

const InputOTPGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center", className)} {...props} />
))
InputOTPGroup.displayName = "InputOTPGroup"

const InputOTPSlot = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { index: number }
>(({ index, className, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext);
  const slot = inputOTPContext.slots[index] || { char: "", hasFakeCaret: false, isActive: false };

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
        slot.isActive && "z-10 ring-2 ring-ring ring-offset-background",
        className
      )}
      {...props}
    >
      {slot.char}
      {slot.hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
        </div>
      )}
    </div>
  )
})
InputOTPSlot.displayName = "InputOTPSlot"

const InputOTPSeparator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => (
  <div ref={ref} role="separator" {...props}>
    <Dot />
  </div>
))
InputOTPSeparator.displayName = "InputOTPSeparator"

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
