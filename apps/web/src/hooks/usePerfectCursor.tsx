import * as React from 'react'
import * as PerfectCursorsPkg from 'perfect-cursors'

const { PerfectCursor } = PerfectCursorsPkg

export function usePerfectCursor(cb: (point: any) => void, point?: any) {
  const [perfectCursor] = React.useState(() => new PerfectCursor(cb))

  React.useLayoutEffect(() => {
    if (point) perfectCursor.addPoint(point)
    return () => perfectCursor.dispose()
  }, [perfectCursor])

  const onPointChange = React.useCallback(
    (point) => perfectCursor.addPoint(point),
    [perfectCursor],
  )

  return onPointChange
}
