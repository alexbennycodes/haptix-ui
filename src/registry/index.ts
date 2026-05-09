import badge from "@/registry/components/badge.json";
import button from "@/registry/components/button.json";
import card from "@/registry/components/card.json";
import input from "@/registry/components/input.json";

export const registryItems = {
  badge,
  button,
  card,
  input,
};

export type RegistryItemName = keyof typeof registryItems;

export function getRegistryItem(name: string) {
  return registryItems[name as RegistryItemName];
}
