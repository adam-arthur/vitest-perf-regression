# Demonstration of performance bug in Vitest
- `npm run test` - observe that tests are instant
- `npm run test.dot` - observe that tests are very slow
- `npm run test.verbose` - observe that tests are very slow

Notes:
This demo runs an autogenerated test suite with `expect(true).toBe(true)` and `expect(false).toBe(true)`. Only difference between the different commands is the reporter used. Enabling console based reporters significantly impairs vitest performance (orders of magnitude)

