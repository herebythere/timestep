interface TimestepContext {
	timestamp: number;
	delta: number;
	physicsInterval: number;
	physicsAccumulator: number;
	renderInterval: number;
	renderAccumulator: number;
}

interface RenderInterface {
	integrate: (ctx: TimestepContext) => void;
	render: (ctx: TimestepContext) => void;
}

interface TimestepInterface {
	start(): void;
	stop(): void;
	loop(): void;
}

export { RenderInterface, TimestepContext, TimestepInterface }