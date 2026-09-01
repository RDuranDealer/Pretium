const RELOAD_FLAG = "pretium_stale_build_reload";

const STALE_BUILD_PATTERNS = [
  /Failed to find Server Action/i,
  /ChunkLoadError/i,
  /Loading chunk [\d\w-]+ failed/i,
  /Failed to fetch dynamically imported module/i,
  /Importing a module script failed/i,
];

export function isStaleBuildError(error: Error) {
  const text = `${error.name} ${error.message}`;
  return STALE_BUILD_PATTERNS.some((pattern) => pattern.test(text));
}

/**
 * A stale build error means the browser is still holding JS from a
 * deploy that Railway has since replaced. One reload fetches the
 * current bundle; a sessionStorage flag stops a reload loop if the
 * error turns out to be something else entirely.
 */
export function reloadOnceForStaleBuild(error: Error) {
  if (typeof window === "undefined" || !isStaleBuildError(error)) return false;
  if (window.sessionStorage.getItem(RELOAD_FLAG)) return false;

  window.sessionStorage.setItem(RELOAD_FLAG, "1");
  window.location.reload();
  return true;
}
