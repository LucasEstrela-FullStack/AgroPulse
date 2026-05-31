export function useFeatureFlag(flagName: string) {
  return {
    enabled: flagName === "mock-data"
  };
}
