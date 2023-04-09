import * as esbuild from "esbuild";

await esbuild.build({
    entryPoints: ["src/index.ts"],
    outfile: "dist/esm/index.min.js",
    minify: true,
    sourcemap: true,
    bundle: true,
    target: ["chrome88", "edge88", "firefox85", "safari14"],
    format: "esm"
});
