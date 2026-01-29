import { cn } from "@/lib/utils";
import { forwardRef, type HTMLAttributes } from "react";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "primary" | "secondary" | "outline";
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-full",
          {
            "bg-surface text-text-secondary": variant === "default",
            "bg-primary text-white": variant === "primary",
            "bg-primary/10 text-primary": variant === "secondary",
            "border border-border text-text-secondary bg-transparent": variant === "outline",
          },
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";

export { Badge };
