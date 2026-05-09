import { NextResponse } from "next/server";

import { getRegistryItem } from "@/registry";

type RouteProps = {
  params: Promise<{ name: string }>;
};

export async function GET(_: Request, { params }: RouteProps) {
  const { name } = await params;
  const item = getRegistryItem(name);

  if (!item) {
    return NextResponse.json({ error: "Registry item not found" }, { status: 404 });
  }

  return NextResponse.json(item);
}
