import { useParams, useLocation, useHistory, useRouteMatch } from 'react-router-dom'

export function useCustomRouter() {
  const params = useParams()
  const location = useLocation()
  const history = useHistory()
  const match = useRouteMatch()

  return {
    // For convenience add push(), replace(), pathname at top level
    push: history.push,
    replace: history.replace,
    pathname: location.pathname,
    // Merge params and parsed query string into single "query" object
    // so that they can be used interchangeably.
    // Example: /:topic?sort=popular -> { topic: "react", sort: "popular" }
    query: {
      // ...queryString.parse(location.search), // Convert string to object
      ...params
    },
    // Include match, location, history objects so we have
    // access to extra React Router functionality if needed.
    match,
    location,
    history
  }
}
