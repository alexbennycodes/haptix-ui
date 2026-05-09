import assert from "node:assert/strict";
import test from "node:test";

import { getAllComponentSlugs } from "@/content/registry";
import { getComponentRoute } from "@/lib/routes";

test("component routing: builds canonical route", () => {
  assert.equal(getComponentRoute("button"), "/components/button");
});

test("component routing: all slugs map to /components/:slug", () => {
  for (const slug of getAllComponentSlugs()) {
    assert.equal(getComponentRoute(slug), `/components/${slug}`);
  }
});
