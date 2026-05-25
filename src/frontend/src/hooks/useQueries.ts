import { createActor } from "@/backend";
import { useActor } from "@caffeineai/core-infrastructure";

export function useBackendStatus() {
  const { actor, isFetching } = useActor(createActor);
  return { actor, isFetching };
}
