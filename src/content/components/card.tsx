import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function CardPreview() {
  return (
    <Card className="max-w-sm">
      <CardHeader>
        <CardTitle>Starter Plan</CardTitle>
        <CardDescription>Great for launching new products quickly.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Badge variant="secondary">Popular</Badge>
        <Button className="w-full">Choose Plan</Button>
      </CardContent>
    </Card>
  );
}
