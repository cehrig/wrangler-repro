import data from './config.json';

export default {
	async fetch(request, env, ctx): Promise<Response> {
		return new Response(JSON.stringify(data));
	},
} satisfies ExportedHandler<Env>;
