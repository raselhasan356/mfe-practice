import { mutate } from "swr";

export function mutateData(url) {
  return mutate(url);
}
