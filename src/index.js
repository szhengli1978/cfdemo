/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
	async fetch(request, env, ctx) {

		let value = await env.TODO.get("to-do:123");
		if (!value) {
			console.log("No value found, setting to Hello World!");
			await env.TODO.put("to-do:123", "Hello World!");
		}

		return new Response("Hello World!, from pre!!");
	},
};
