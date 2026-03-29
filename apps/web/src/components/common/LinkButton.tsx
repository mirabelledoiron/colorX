import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import type { ComponentProps } from "react";

type ButtonProps = ComponentProps<typeof Button>;

interface LinkButtonProps extends ButtonProps {
  to: string;
}

export function LinkButton({ to, onClick, ...props }: LinkButtonProps) {
  const navigate = useNavigate();

  return (
    <Button
      onClick={(e) => {
        onClick?.(e);
        navigate(to);
      }}
      {...props}
    />
  );
}
