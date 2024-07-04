"use client";

import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import { useTransition } from "react";
import updateStream from "@/actions/stream";
type FieldTypes = "isChatEnabled" | "isChatDelayed" | "isChatFollowersOnly";

interface ToggleCardProps {
  label: string;
  value: boolean;
  field: FieldTypes;
}

const ToggleCard = ({ label, value = false, field }: ToggleCardProps) => {
  const [isPending, startTransition] = useTransition();
  const onChange = async () => {
    startTransition(() => {
      updateStream({ [field]: !value })
        .then(() => {
          toast.success("Updated successfully");
        })
        .catch(() => {
          toast.error("Failed to update");
        });
    });
  };
  return (
    <div className="rounded-xl bg-muted p-6">
      <div className="flex items-center justify-between">
        <p className="font-semibold shrink-0">{label}</p>
        <div className="space-y-2">
          <Switch
            disabled={isPending}
            onCheckedChange={onChange}
            checked={value}
          >
            {value ? "On" : "Off"}
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default ToggleCard;