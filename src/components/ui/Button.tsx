import { cn } from "@/lib/utils";
import { BaseProps } from "@/types";

interface ButtonProps extends BaseProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  onClick?: () => void;
}

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
}: ButtonProps) {
  const baseStyles = "rounded-lg font-medium transition-colors";
  
  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-600 text-white hover:bg-gray-700",
    outline: "border-2 border-gray-300 hover:bg-gray-100",
  };
  
  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      {children}
    </button>
  );
}
