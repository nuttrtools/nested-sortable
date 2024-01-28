// vite.config.ts
import { defineConfig } from "file:///Users/akhil/code/projects/component-creator/nested-sortable/node_modules/vite/dist/node/index.js";
import react from "file:///Users/akhil/code/projects/component-creator/nested-sortable/node_modules/@vitejs/plugin-react/dist/index.mjs";
import path from "node:path";
import { libInjectCss } from "file:///Users/akhil/code/projects/component-creator/nested-sortable/node_modules/vite-plugin-lib-inject-css/dist/index.mjs";
import dts from "file:///Users/akhil/code/projects/component-creator/nested-sortable/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "/Users/akhil/code/projects/component-creator/nested-sortable";
var vite_config_default = defineConfig({
  plugins: [react(), libInjectCss(), dts({ include: "src" })],
  build: {
    lib: {
      entry: path.resolve(__vite_injected_original_dirname, "src/index.ts"),
      name: "nested-sortable",
      formats: ["es", "umd"],
      fileName: (format) => `ns.${format}.js`
    },
    rollupOptions: {
      external: ["react", "react-dom", "styled-components"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "styled-components": "styled"
        }
      }
    }
  },
  esbuild: {
    minifyIdentifiers: false,
    minifySyntax: false,
    minifyWhitespace: false
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvYWtoaWwvY29kZS9wcm9qZWN0cy9jb21wb25lbnQtY3JlYXRvci9uZXN0ZWQtc29ydGFibGVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9ha2hpbC9jb2RlL3Byb2plY3RzL2NvbXBvbmVudC1jcmVhdG9yL25lc3RlZC1zb3J0YWJsZS92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvYWtoaWwvY29kZS9wcm9qZWN0cy9jb21wb25lbnQtY3JlYXRvci9uZXN0ZWQtc29ydGFibGUvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiXG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCJcbmltcG9ydCBwYXRoIGZyb20gXCJub2RlOnBhdGhcIlxuaW1wb3J0IHsgbGliSW5qZWN0Q3NzIH0gZnJvbSBcInZpdGUtcGx1Z2luLWxpYi1pbmplY3QtY3NzXCJcbmltcG9ydCBkdHMgZnJvbSBcInZpdGUtcGx1Z2luLWR0c1wiXG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbcmVhY3QoKSwgbGliSW5qZWN0Q3NzKCksIGR0cyh7IGluY2x1ZGU6IFwic3JjXCIgfSldLFxuICBidWlsZDoge1xuICAgIGxpYjoge1xuICAgICAgZW50cnk6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjL2luZGV4LnRzXCIpLFxuICAgICAgbmFtZTogXCJuZXN0ZWQtc29ydGFibGVcIixcbiAgICAgIGZvcm1hdHM6IFtcImVzXCIsIFwidW1kXCJdLFxuICAgICAgZmlsZU5hbWU6IChmb3JtYXQpID0+IGBucy4ke2Zvcm1hdH0uanNgLFxuICAgIH0sXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgZXh0ZXJuYWw6IFtcInJlYWN0XCIsIFwicmVhY3QtZG9tXCIsIFwic3R5bGVkLWNvbXBvbmVudHNcIl0sXG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgZ2xvYmFsczoge1xuICAgICAgICAgIHJlYWN0OiBcIlJlYWN0XCIsXG4gICAgICAgICAgXCJyZWFjdC1kb21cIjogXCJSZWFjdERPTVwiLFxuICAgICAgICAgIFwic3R5bGVkLWNvbXBvbmVudHNcIjogXCJzdHlsZWRcIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgZXNidWlsZDoge1xuICAgIG1pbmlmeUlkZW50aWZpZXJzOiBmYWxzZSxcbiAgICBtaW5pZnlTeW50YXg6IGZhbHNlLFxuICAgIG1pbmlmeVdoaXRlc3BhY2U6IGZhbHNlLFxuICB9LFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBc1csU0FBUyxvQkFBb0I7QUFDblksT0FBTyxXQUFXO0FBQ2xCLE9BQU8sVUFBVTtBQUNqQixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFKaEIsSUFBTSxtQ0FBbUM7QUFPekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE1BQU0sR0FBRyxhQUFhLEdBQUcsSUFBSSxFQUFFLFNBQVMsTUFBTSxDQUFDLENBQUM7QUFBQSxFQUMxRCxPQUFPO0FBQUEsSUFDTCxLQUFLO0FBQUEsTUFDSCxPQUFPLEtBQUssUUFBUSxrQ0FBVyxjQUFjO0FBQUEsTUFDN0MsTUFBTTtBQUFBLE1BQ04sU0FBUyxDQUFDLE1BQU0sS0FBSztBQUFBLE1BQ3JCLFVBQVUsQ0FBQyxXQUFXLE1BQU0sTUFBTTtBQUFBLElBQ3BDO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDYixVQUFVLENBQUMsU0FBUyxhQUFhLG1CQUFtQjtBQUFBLE1BQ3BELFFBQVE7QUFBQSxRQUNOLFNBQVM7QUFBQSxVQUNQLE9BQU87QUFBQSxVQUNQLGFBQWE7QUFBQSxVQUNiLHFCQUFxQjtBQUFBLFFBQ3ZCO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxtQkFBbUI7QUFBQSxJQUNuQixjQUFjO0FBQUEsSUFDZCxrQkFBa0I7QUFBQSxFQUNwQjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
