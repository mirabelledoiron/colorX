import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { LinkButton } from "@/components/common/LinkButton";
import { Container, Flex } from "@/components/layout/primitives";

export function NotFoundPage() {
  return (
    <Container as="article" className="py-20">
      <Card className="mx-auto max-w-lg">
        <CardHeader>
          <CardTitle className="text-4xl font-extrabold">404</CardTitle>
          <CardDescription>
            This page doesn't exist. Maybe you were looking for the generator?
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Flex gap="sm">
            <LinkButton to="/" variant="secondary">
              Home
            </LinkButton>
            <LinkButton to="/generator">
              Open Generator
            </LinkButton>
          </Flex>
        </CardContent>
      </Card>
    </Container>
  );
}
