import React from "react";

// 1. Define allowed visual variants using a TypeScript Union Type.
// This provides strict autocomplete and prevents passing invalid variants like 'warning'.
export type ButtonVariant = "primary" | "secondary" | "danger";

// 2. Extend native HTML button props to inherit standard attributes (onClick, type, disabled, etc.)
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  isLoading?: boolean;
  fullWidth?: boolean;
}

export const Button = ({
  children,
  variant = "primary", // Default to primary
  isLoading = false,
  fullWidth = false,
  className = "", // Allow passing external Tailwind classes for edge cases
  disabled,
  ...props // Capture the rest of the native attributes
}: ButtonProps) => {
  // Using Object mapping to define Tailwind classes for each variant. This avoids long ternary chains
  const variantClasses: Record<ButtonVariant, string> = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: "bg-gray-700 hover:bg-gray-600 text-white",
    danger: "bg-red-600 hover:bg-red-700 text-white",
  };

  // Construct the final class string
  const baseClasses =
    "font-medium py-2 px-4 rounded-md transition duration-200 ease-in-out flex justify-center items-center gap-2";
  const widthClass = fullWidth ? "w-full" : "";
  const stateClasses =
    disabled || isLoading ? "opacity-50 cursor-not-allowed" : "";

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${widthClass} ${stateClasses} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {/* Conditionally render a loading spinner SVG if isLoading is true */}
      {isLoading && (
        <svg
          className="animate-spin h-5 w-5 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}

      {/* Render the button content */}
      {children}
    </button>
  );
};
