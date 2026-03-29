import { Globe } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Container, Flex, Stack } from "@/components/layout/primitives";

function ExternalLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => window.open(href, "_blank", "noopener,noreferrer")}
      aria-label={`${label} (opens in new tab)`}
    >
      {icon}
      {label}
    </Button>
  );
}

export function Footer() {
  return (
    <Container as="footer" className="py-10 text-center text-sm text-muted-foreground">
      <Separator className="mb-10" />
      <Card className="border-0 bg-transparent shadow-none ring-0">
        <CardContent>
          <Stack gap="md" className="items-center">
            <Flex as="nav" gap="xs" align="center" justify="center" wrap>
              <ExternalLink
                href="https://www.mirabelledoiron.com/"
                icon={<Globe className="h-4 w-4" aria-hidden="true" />}
                label="Portfolio"
              />
              <ExternalLink
                href="https://github.com/mirabelledoiron"
                icon={<FaGithub className="h-4 w-4" aria-hidden="true" />}
                label="GitHub"
              />
              <ExternalLink
                href="https://www.linkedin.com/in/mirabelledoiron"
                icon={<FaLinkedinIn className="h-4 w-4" aria-hidden="true" />}
                label="LinkedIn"
              />
            </Flex>
            <Separator />
            <p>
              Inspired by color-hex.com. Contrast standards from WCAG 2.1 and APCA.
            </p>
            <p className="font-medium text-foreground">
              {new Date().getFullYear()} Mirabelle Doiron. All rights reserved.
            </p>
          </Stack>
        </CardContent>
      </Card>
    </Container>
  );
}
