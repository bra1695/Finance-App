import { cn } from "@/lib/utils";

// Add color prop to the interface
interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  color?: string;  // Add this line
}

export function Progress({ 
  value = 0, 
  color,  // Add this
  className,
  ...props
}: ProgressProps) {
  return (
    <div className={cn("relative h-2 w-full overflow-hidden rounded-full bg-secondary", className)} {...props}>
      <div
        className="h-full w-full flex-1 bg-primary transition-all"
        style={{ 
          transform: `translateX(-${100 - (value || 0)}%)`,
          backgroundColor: color || undefined  // Apply custom color
        }}
      />
    </div>
  );
}