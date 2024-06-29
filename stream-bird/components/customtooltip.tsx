import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface customprops {
  children: React.ReactNode;
  content: string;
  placement?: "top" | "bottom" | "left" | "right";
  align?: "start" | "center" | "end";
  asChild?: boolean;
}

export const CustomToolTip = ({
  children,
  content,
  placement,
  align,
  asChild,
}: customprops) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild={asChild}>{children}</TooltipTrigger>
        <TooltipContent side={placement} align={align}>
          <p className=" font-semibold">{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
