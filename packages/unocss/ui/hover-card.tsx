import { cn } from "@/libs/cn";
import { HoverCard as HoverCardPrimitive } from "@kobalte/core";
import { splitProps } from "solid-js";

export const HoverCard = HoverCardPrimitive.Root;
export const HoverCardTrigger = HoverCardPrimitive.Trigger;

export const HoverCardContent = (props: HoverCardPrimitive.HoverCardContentProps) => {
  const [local, rest] = splitProps(props, ["class"]);

  return (
    <HoverCardPrimitive.Portal>
      <HoverCardPrimitive.Content
        class={cn(
          "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[expanded]:(animate-in fade-in-0 zoom-in-95) data-[closed]:(animate-out fade-out-0 zoom-out-95)",
          local.class
        )}
        {...rest}
      />
    </HoverCardPrimitive.Portal>
  );
};
