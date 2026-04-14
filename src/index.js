/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import { Hono } from 'hono'

const app = new Hono()

app.get('/', async(c) => {

	//c.env.demo.put("company", "urs corp");
	const value = await c.env.demo.get('place');
	return c.text(value)
})

export default app


/*
export default {
	async fetch(request, env, ctx) {

		let value = await env.demo.get("place");
		if (!value) {
			console.log("No value found, setting to Hello World!");
			await env.demo.put("place", "suzhou");
		}

		return new Response("Hello World!, from pre!!");
	},
};


 */
