import { useRef } from 'react'

/**
 * useInitialized
 * @param check
 */
export function useInitialized(check?: boolean) {
  const initializedRef = useRef(check)
  if (check) {
    initializedRef.current = true
  }
  return !!initializedRef.current
}
