interface ImportMetaEnv extends Readonly<Record<string, string>> {
	readonly VITE_SIMPLECAST_TOKEN: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
