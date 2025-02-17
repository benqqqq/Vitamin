interface Config {
	basename: string
}

export const config: Record<string, Config> = {
	development: {
		basename: ''
	},
	production: {
		basename: ''
	},
	test: {
		basename: ''
	}
}

export const getConfig = (): Config => {
	const environment = process.env.NODE_ENV ?? 'development'
	return config[environment]
}
