//  # src/hooks/useNDVI.ts Exemple for a hook that calculates the NDVI (Normalized Difference Vegetation Index) value for a given area. In this example, we will simulate the NDVI calculation by returning a fixed value.

import { useEffect, useState } from 'react'

export function useNDVI() {
  const [ndvi, setNDVI] = useState(0)

  useEffect(() => {
    setNDVI(0.81)
  }, [])

  return ndvi
}