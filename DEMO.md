# Blastgraph demo

Dependency: `test-service-1 -> test-service-2` via `GET /greet`.
The original npm library example remains available.

## Run the HTTP demo

Requires Node.js 18 or newer. No npm install is needed for the HTTP demo.

In test-service-2:

```sh
node server.js
```

In test-service-1, in another terminal:

```sh
node demo.js Prasanna
```

Output: `Hello, Prasanna!`

## Analyse impact

Select both repositories and build a new baseline. Use:

- Origin service: `test-service-2`
- Change type: API contract (`API_CONTRACT_CHANGED`)
- Changed node ID: `api:test-service-2:GET:/greet`
- Transitive impact: off

Expected affected service: `test-service-1`.
This represents potential impact, not confirmed breakage. Keep declarations and evidence line numbers in sync with source changes.
