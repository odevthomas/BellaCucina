import React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface ToastSuccessProps {
  title: string;
  description?: string;
  className?: string;
  onClose?: () => void;
}

const ToastSuccess = ({
  title,
  description,
  className,
  onClose,
}: ToastSuccessProps) => {
  return (
    <div
      className={cn(
        "fixed top-4 right-4 z-50 flex w-full max-w-md animate-in slide-in-from-top-full fade-in-20 items-start gap-4 rounded-lg border bg-white p-6 shadow-lg duration-200",
        className,
      )}
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
        <Check className="h-4 w-4 text-green-600" />
      </div>
      <div className="flex-1">
        <h3 className="font-medium text-gray-900">{title}</h3>
        {description && (
          <p className="mt-1 text-sm text-gray-500">{description}</p>
        )}
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="inline-flex h-6 w-6 items-center justify-center rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
        >
          <span className="sr-only">Close</span>
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default ToastSuccess;
