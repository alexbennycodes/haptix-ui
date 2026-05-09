import assert from "node:assert/strict";
import test from "node:test";

import { componentRegistry, getComponentBySlug } from "@/content/registry";
import { getRegistryItem } from "@/registry";

test("registry payloads: exposes shadcn items for each documented component", () => {
  for (const component of componentRegistry) {
    const item = getRegistryItem(component.slug);
    assert.ok(item);
    assert.equal(item.name, component.slug);
    assert.ok(item.files.length > 0);
  }
});

test("registry payloads: returns component entry by slug", () => {
  const button = getComponentBySlug("button");
  assert.ok(button);
  assert.equal(button.title, "Button");
});
