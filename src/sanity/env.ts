export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-31';

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  '❌ ERROR: Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  '❌ ERROR: Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
);

function assertValue<T>(v: T | undefined | null, errorMessage: string): T {
  if (!v) {
    console.error(errorMessage);
    throw new Error(errorMessage);
  }
  return v;
}
