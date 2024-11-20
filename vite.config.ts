import { defineConfig } from "vite";
import uniModule from "@dcloudio/vite-plugin-uni";
export default async () => {
	const Unocss = (await import('unocss/vite')).default
	return defineConfig({
		plugins: [
			uniModule(),
			Unocss()
		],
		css: {
			preprocessorOptions: {
				scss: {
					silenceDeprecations: ["legacy-js-api"],
				},
			}
		}
	})
}