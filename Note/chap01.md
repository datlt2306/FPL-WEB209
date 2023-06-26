# Setup

## Bước 1

```create vite@latest vite-project -- --template react-ts

```

## Bước 2

-   Cấu hình file ts.config.json
    ```"baseUrl": "./",
    "paths": {
    "@/_": ["src/_"]
    }
    ```
-   Cài đặt package vite-tsconfig-paths : https://www.npmjs.com/package/vite-tsconfig-paths
    `pnpm i -D vite-ts-config-paths `

-   Thêm code trong file vite.config.json

```import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths()],
})
```

```

```
