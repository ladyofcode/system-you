# TODO

## Cleanup Tasks

- [ ] Remove `handleHttpError` and `handleUnseenRoutes` functions from `svelte.config.js` after API cleanup
  - These were temporary fixes to get the Docker build working
  - Should be removed once API routes are properly handled or removed

- [ ] Remove API routes (`/api/resources` and `/api/resources/[id]`) as they conflict with static adapter
  - Consider moving to a different adapter if API routes are needed
  - Or implement proper static data handling

## Notes

The current `svelte.config.js` has temporary workarounds:
- `strict: false` on adapter-static to ignore dynamic routes
- `handleHttpError` to ignore favicon.ico 404s
- `handleUnseenRoutes` to ignore dynamic route patterns

These should be cleaned up once the architecture is finalized.
