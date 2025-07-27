/**
 * Centralized timeout configuration for API calls and resource loading
 */

export const TimeoutConfig = {
  // Image loading timeouts
  IMAGE_LOAD_TIMEOUT: 5000,
  EXTERNAL_IMAGE_TIMEOUT: 3000,

  // API call timeouts
  API_REQUEST_TIMEOUT: 10000,
  API_RETRY_ATTEMPTS: 3,
  API_RETRY_DELAY: 1000,

  // Font loading timeouts
  FONT_LOAD_TIMEOUT: 3000,

  // Navigation timeouts
  PAGE_TRANSITION_TIMEOUT: 2000,

  // Test timeouts
  TEST_TIMEOUT: 10000,
  TEST_ASYNC_TIMEOUT: 5000,
} as const;

/**
 * Utility function to create a timeout promise
 */
export function createTimeoutPromise<T>(
  promise: Promise<T>,
  timeoutMs: number,
  errorMessage?: string,
): Promise<T> {
  return Promise.race([
    promise,
    new Promise<T>((_, reject) =>
      setTimeout(
        () =>
          reject(
            new Error(
              errorMessage || `Operation timed out after ${timeoutMs}ms`,
            ),
          ),
        timeoutMs,
      ),
    ),
  ]);
}

/**
 * Utility function for retrying failed operations
 */
export async function retryWithTimeout<T>(
  operation: () => Promise<T>,
  maxAttempts = TimeoutConfig.API_RETRY_ATTEMPTS,
  timeoutMs = TimeoutConfig.API_REQUEST_TIMEOUT,
  delay = TimeoutConfig.API_RETRY_DELAY,
): Promise<T> {
  let lastError: Error;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await createTimeoutPromise(
        operation(),
        timeoutMs,
        `Operation timed out on attempt ${attempt}/${maxAttempts}`,
      );
    } catch (error) {
      lastError = error as Error;

      if (attempt === maxAttempts) {
        throw lastError;
      }

      // Wait before retrying
      await new Promise((resolve) => setTimeout(resolve, delay * attempt));
    }
  }

  throw lastError!;
}

/**
 * Utility for safe fetch with timeout
 */
export async function fetchWithTimeout(
  url: string,
  options: RequestInit = {},
  timeoutMs = TimeoutConfig.API_REQUEST_TIMEOUT,
): Promise<Response> {
  const controller = new AbortController();

  const timeoutId = setTimeout(() => {
    controller.abort();
  }, timeoutMs);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });

    clearTimeout(timeoutId);
    return response;
  } catch (error) {
    clearTimeout(timeoutId);

    if ((error as Error).name === "AbortError") {
      throw new Error(`Request to ${url} timed out after ${timeoutMs}ms`);
    }

    throw error;
  }
}
