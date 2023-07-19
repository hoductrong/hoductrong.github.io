<script lang="ts">
	import { onMount } from 'svelte';
	import {
		ArrowUpSFillSYSTEM,
		ArrowDownSFillSYSTEM,
		ArrowLeftSFillSYSTEM,
		ArrowRightSFillSYSTEM
	} from 'svelte-remix';

	onMount(() => {
		console.log(2222);
		reset();
		document.addEventListener('keydown', listenForKeyboard);
	});

	interface Position {
		x: number;
		y: number;
	}

	interface Fruit {
		x: number;
		y: number;
	}

	const canvasSize = 240;
	const canvasHeight = 410;
	const snakeSize = 10;

	enum GAME {
		INIT = 'INITIALIZING',
		READY = 'GAME_READY',
		SETUP = 'GAME_SETUP',
		PLAYING = 'GAME_PLAYING',
		OVER = 'GAME_OVER'
	}

	enum DIRECTION {
		RIGHT = 'RIGHT',
		LEFT = 'LEFT',
		UP = 'UP',
		DOWN = 'DOWN'
	}

	const keys: { [key: string]: DIRECTION } = {
		arrowup: DIRECTION.UP,
		arrowright: DIRECTION.RIGHT,
		arrowdown: DIRECTION.DOWN,
		arrowleft: DIRECTION.LEFT,
		w: DIRECTION.UP,
		a: DIRECTION.LEFT,
		s: DIRECTION.DOWN,
		d: DIRECTION.RIGHT
	};

	const acceptableKeys = Object.keys(keys);

	function listenForKeyboard(e: KeyboardEvent) {
		e.preventDefault();
		const key = e.key.toLowerCase();
		if (acceptableKeys.includes(key)) {
			changeDirection(keys[key]);
		}
	}

	let gameState: GAME = GAME.INIT;
	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D;
	let speedMs: number;
	let direction: DIRECTION;
	let bodyPositions: Position[] = [];
	let fruit: Fruit | undefined;

	let score: number;
	let highScore: number;

	$: score = (bodyPositions.length - 4) * 10;
	$: highScore = score > highScore ? score : highScore || 0;

	$: {
		if (highScore !== 0) {
			localStorage.setItem('snakeHighScore', highScore.toString());
		}
	}

	onMount(() => {
		const hs = localStorage.getItem('snakeHighScore');
		if (hs) {
			highScore = parseInt(hs);
		}
	});

	function reset() {
		if (ctx) {
			ctx.clearRect(0, 0, canvasSize, canvasSize);
		}
		speedMs = 200;
		direction = DIRECTION.RIGHT;
		bodyPositions = [
			{ x: 50, y: 50 },
			{ x: 40, y: 50 },
			{ x: 30, y: 50 }
		];
		gameState = GAME.READY;
		fruit = undefined;
	}

	function setupGame() {
		console.log(1111);
		canvas = document.getElementById('canvas') as HTMLCanvasElement;
		ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
		gameState = GAME.PLAYING;
		drawSnake();
	}

	function drawSnake() {
		bodyPositions = bodyPositions.map(({ x, y }, i) => {
			const isHead = i === 0;
			let nextX: number;
			let nextY: number;

			switch (direction) {
				case DIRECTION.RIGHT:
					nextX = isHead ? x + snakeSize : bodyPositions[i - 1].x;
					nextY = isHead ? y : bodyPositions[i - 1].y;
					break;
				case DIRECTION.LEFT:
					nextX = isHead ? x - snakeSize : bodyPositions[i - 1].x;
					nextY = isHead ? y : bodyPositions[i - 1].y;
					break;
				case DIRECTION.DOWN:
					nextX = isHead ? x : bodyPositions[i - 1].x;
					nextY = isHead ? y + snakeSize : bodyPositions[i - 1].y;
					break;
				case DIRECTION.UP:
				default:
					nextX = isHead ? x : bodyPositions[i - 1].x;
					nextY = isHead ? y - snakeSize : bodyPositions[i - 1].y;
					break;
			}

			let bitesSelf = false;
			if (isHead) {
				const bitten = bodyPositions.find((part) => part.x === nextX && part.y === nextY);
				bitesSelf = !!bitten;
			}
			if (
				nextX >= canvasSize ||
				nextX <= 0 - snakeSize ||
				nextY >= canvasSize ||
				nextY <= 0 - snakeSize ||
				bitesSelf
			) {
				gameState = GAME.OVER;
			}

			if (isHead && fruit && nextX === fruit.x && nextY === fruit.y) {
				fruit = undefined;
			}

			return {
				x: nextX,
				y: nextY
			};
		});

		if (!fruit) {
			const currentTail = bodyPositions[bodyPositions.length - 1];
			bodyPositions = [...bodyPositions, { ...currentTail }];
			speedMs *= 0.95;
		}

		createAndDrawFruit();

		ctx.fillStyle = 'green';
		bodyPositions.forEach(({ x, y }) => {
			ctx.fillRect(x, y, snakeSize, snakeSize);
		});

		setTimeout(() => {
			if (gameState !== GAME.OVER) {
				ctx.clearRect(0, 0, canvasSize, canvasSize);
				drawSnake();
			}
		}, speedMs);
	}

	function generateFruitCoords(): Fruit {
		const x = Math.floor(Math.random() * (canvasSize / 10)) * 10;
		const y = Math.floor(Math.random() * (canvasSize / 10)) * 10;

		const conflictsWithSnake = bodyPositions.find((part) => part.x === x && part.y === y);
		if (conflictsWithSnake) {
			return generateFruitCoords();
		}
		return { x, y };
	}

	function createAndDrawFruit() {
		if (!fruit) {
			fruit = generateFruitCoords();
		}
		ctx.fillStyle = 'red';
		ctx.fillRect(fruit.x, fruit.y, snakeSize, snakeSize);
	}

	function changeDirection(nextDirection: DIRECTION) {
		switch (nextDirection) {
			case DIRECTION.LEFT:
				if (direction !== DIRECTION.RIGHT) {
					direction = nextDirection;
				}
				break;
			case DIRECTION.RIGHT:
				if (direction !== DIRECTION.LEFT) {
					direction = nextDirection;
				}
				break;
			case DIRECTION.UP:
				if (direction !== DIRECTION.DOWN) {
					direction = nextDirection;
				}
				break;
			case DIRECTION.DOWN:
				if (direction !== DIRECTION.UP) {
					direction = nextDirection;
				}
				break;
		}
	}
</script>

<main
	class="main text-white flex flex-col items-start justify-center p-4 rounded bg-[#173735FF] w-[510px] mx-auto"
>
	<header>
		<div>
			Score: {bodyPositions.length !== 3 ? score : '0'}
		</div>
		<div>
			High score: {highScore}
		</div>
	</header>
	<div class="screen-container flex flex-row items-end gap-6">
		<div class="canvasContainer">
			<canvas id="canvas" width={canvasSize} height={canvasSize} />
			{#if gameState === GAME.OVER || gameState === GAME.READY}
				<div class="gameDialog">
					{#if gameState === GAME.READY}
						SNAKE
					{:else}
						GAME OVER
					{/if}
					<button
						class="rounded bg-[#FEA55F] px-3 py-2 transition-all text-[#01080E] hover:text-[white] active:opacity-70"
						on:click={() => {
							reset();
							setupGame();
						}}
					>
						{#if gameState === GAME.READY}
							start-game
						{:else}
							start-again
						{/if}
					</button>
				</div>
			{/if}
		</div>
		<div class="w-48 h-36 px-3 py-4 flex flex-col justify-center rounded-lg bg-[#01142330]">
			<span>// use keyboard</span>
			<span>// arrows to play</span>
			<div class="buttons grid grid-cols-3 gap-1">
				<div />
				<button
					on:click={() => changeDirection(DIRECTION.UP)}
					class="rounded-lg flex flex-row justify-center items-center bg-[#010C15] button"
					><ArrowUpSFillSYSTEM /></button
				>
				<div />
				<button
					on:click={() => changeDirection(DIRECTION.LEFT)}
					class="rounded-lg flex flex-row justify-center items-center bg-[#010C15] button"
					><ArrowLeftSFillSYSTEM /></button
				>
				<button
					on:click={() => changeDirection(DIRECTION.DOWN)}
					class="rounded-lg flex flex-row justify-center items-center bg-[#010C15] button"
					><ArrowDownSFillSYSTEM /></button
				>
				<button
					on:click={() => changeDirection(DIRECTION.RIGHT)}
					class="rounded-lg flex flex-row justify-center items-center bg-[#010C15] button"
					><ArrowRightSFillSYSTEM /></button
				>
			</div>
		</div>
	</div>
</main>

<style>
	.main {
		border-radius: 8px;
		border: 1px solid #0c1616;
		background: linear-gradient(154deg, rgba(23, 85, 83, 0.7) 0%, rgba(67, 217, 173, 0.09) 100%);
		box-shadow: 0px 2px 0px 0px rgba(255, 255, 255, 0.3) inset;
		backdrop-filter: blur(32px);
	}

	header {
		width: 100%;
		height: 42px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	#canvas {
		/* border: 1px solid #000; */
		border-radius: 8px;
		background: rgba(1, 22, 39, 0.84);
		box-shadow: 1px 5px 11px 0px rgba(2, 18, 27, 0.71) inset;
	}

	.canvasContainer {
		position: relative;
	}

	.gameDialog {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		/* background: rgba(255, 255, 255, 0.7); */
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border-radius: 8px;
		background: rgba(1, 22, 39, 0.84);
		box-shadow: 1px 5px 11px 0px rgba(2, 18, 27, 0.71) inset;
	}

	.gameDialog button {
		margin: 8px 0;
	}
</style>
