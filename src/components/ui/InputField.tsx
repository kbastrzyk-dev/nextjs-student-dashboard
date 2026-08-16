import { UseFormRegisterReturn, FieldError } from "react-hook-form";

// Define the props for the InputField component
interface InputFieldProps {
  label: string;
  type?: "text" | "email" | "password";
  placeholder?: string;
  registration: UseFormRegisterReturn;
  error?: FieldError;
}

export const InputField = ({
  label,
  type = "text",
  placeholder,
  registration,
  error,
}: InputFieldProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={registration.name}
        className="text-sm font-medium text-gray-300"
      >
        {label}
      </label>
      <input
        id={registration.name}
        type={type}
        placeholder={placeholder}
        {...registration}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? `${registration.name}-error` : undefined}
        className="bg-gray-800 text-white placeholder:text-gray-500 border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none rounded-md px-3 py-2 transition-colors"
      />
      {error && (
        <span
          id={`${registration.name}-error`}
          className="text-red-500 text-sm mt-1"
          role="alert"
        >
          {error.message}
        </span>
      )}
    </div>
  );
};
