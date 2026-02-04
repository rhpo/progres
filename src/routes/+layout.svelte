<script>
	import "../app.css";
	import { page } from "$app/state";
	import { navigating } from "$app/stores";
	import { fly, fade } from "svelte/transition";

	import sveltTilt from "vanilla-tilt-svelte";

	import { isCardExpanded, selectedCard } from "$lib/stores.js";
	import { Calendar, Home, Sheet, University, User } from "@lucide/svelte";

	let { children } = $props();

	const navItems = [
		{
			id: "home",
			label: "Home",
			path: "/",
			icon: Home,
		},
		{
			id: "calendar",
			label: "Courses",
			path: "/calendar",
			icon: Calendar,
		},
		{
			id: "docs",
			label: "University",
			path: "/docs",
			icon: University,
		},
		{
			id: "results",
			label: "Results",
			path: "/results",
			icon: Sheet,
		},
		{
			id: "profile",
			label: "Profile",
			path: "/profile",
			icon: User,
		},
	];

	let time = $state(
		new Date().toLocaleTimeString([], {
			hour: "2-digit",
			minute: "2-digit",
		}),
	);
	let islandExpanded = $state(false);
	let islandText = $state("Face ID");

	function triggerIsland(text = "Face ID", duration = 3000) {
		islandText = text;
		islandExpanded = true;
		setTimeout(() => (islandExpanded = false), duration);
	}

	$effect(() => {
		const timeInt = setInterval(() => {
			time = new Date().toLocaleTimeString([], {
				hour: "2-digit",
				minute: "2-digit",
			});
		}, 1000);

		const islandInt = setInterval(() => {
			if (!islandExpanded && Math.random() > 0.7) {
				const activities = [
					"New Grade!",
					"Class in 15m",
					"Message from Prof",
					"Assignment Due",
				];
				triggerIsland(
					activities[Math.floor(Math.random() * activities.length)],
					4000,
				);
			}
		}, 12000);

		return () => {
			clearInterval(timeInt);
			clearInterval(islandInt);
		};
	});
</script>

<div class="iphone-container" class:landscape={$isCardExpanded}>
	<div
		class="iphone-frame"
		use:sveltTilt={{
			glare: false,
			glarePosition: "center",
			glareColor: "#ffffff",
			maxGlare: 0.3,
			scale: 1.02,
			max: 5,
			reverse: true,
			tiltMax: 25,
			tiltReset: true,
		}}
	>
		<div class="button mute"></div>
		<div class="button vol-up"></div>
		<div class="button vol-down"></div>
		<div class="button power"></div>

		<div class="screen">
			<div class="status-bar">
				<div class="time">{time}</div>
				<div class="status-icons">
					<img src="/status-ios.png" height="15" alt="" />
				</div>
			</div>

			<div class="dynamic-island-container">
				<button
					class="dynamic-island"
					class:expanded={islandExpanded}
					onclick={() => triggerIsland()}
					aria-label="Dynamic Island"
				>
					{#if islandExpanded}
						<div class="island-content">
							<div class="pulse"></div>
							<span>{islandText}</span>
						</div>
					{:else}
						<div class="island-camera"></div>
					{/if}
				</button>
			</div>

			{#if $navigating}
				<div
					class="loading-overlay"
					transition:fade={{ duration: 200 }}
				>
					<div class="spinner"></div>
				</div>
			{/if}

			<main class="content-area">
				{#key page.url.pathname}
					<div
						class="page-wrapper"
						in:fly={{ x: 20, duration: 400, delay: 100 }}
						out:fly={{ x: -20, duration: 300 }}
					>
						{@render children()}
					</div>
				{/key}
			</main>

			{#if $isCardExpanded}
				<div
					class="card-overlay"
					transition:fade={{ duration: 450 }}
					onclick={() => isCardExpanded.set(false)}
					onkeydown={(e) =>
						e.key === "Escape" && isCardExpanded.set(false)}
					role="button"
					tabindex="0"
					aria-label="Close expanded card"
				>
					<div
						class="landscape-notice"
						in:fly={{ y: -30, delay: 500 }}
					>
						Click anywhere to close
					</div>

					<img
						src={$selectedCard}
						alt="Expanded Card"
						class="expanded-img"
					/>
				</div>
			{/if}

			{#if page.url.pathname !== "/login" && page.url.pathname !== "/forgot-password" && page.url.pathname !== "/scan" && (page.url.pathname === "/results" || !page.url.pathname.includes("/results/"))}
				<nav class="bottom-nav">
					{#each navItems as item}
						<a
							href={item.path}
							class="nav-item"
							class:active={page.url.pathname === item.path ||
								(item.path !== "/" &&
									page.url.pathname.startsWith(item.path))}
						>
							<item.icon />
							<span>{item.label}</span>
						</a>
					{/each}
					<div class="home-indicator"></div>
				</nav>
			{:else}
				<div class="home-indicator dark"></div>
			{/if}
		</div>
	</div>
</div>

<style>
	:global(body) {
		background: #f0f0f5;
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
		margin: 0;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
			Helvetica, Arial, sans-serif;
	}

	.iphone-container {
		position: relative;
		padding: 20px;

		transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.iphone-frame {
		width: 393px;
		height: 852px;
		background: #1c1c1e;
		border-radius: 55px;
		border: 8px solid #3a3a3c;
		position: relative;
		box-shadow: 0 50px 100px -20px rgba(0, 0, 0, 0.3);
		padding: 8px;
		box-sizing: border-box;
		transform-origin: center center;
	}

	.landscape {
		transform: rotate(90deg) scale(1.5) !important;
	}

	.card-overlay {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.95);
		z-index: 200;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}

	.expanded-img {
		max-width: 90%;
		max-height: 90%;
		border-radius: 20px;
		box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
		transform: rotate(270deg) scale(1.5);
	}

	.landscape-notice {
		position: absolute;
		top: 60px;
		color: white;
		font-size: 14px;
		font-weight: 500;
		opacity: 0.7;
	}

	.button {
		position: absolute;
		background: #3a3a3c;
		border-radius: 2px;
	}

	.mute {
		width: 3px;
		height: 26px;
		left: -11px;
		top: 180px;
	}
	.vol-up {
		width: 3px;
		height: 60px;
		left: -11px;
		top: 240px;
	}
	.vol-down {
		width: 3px;
		height: 60px;
		left: -11px;
		top: 310px;
	}
	.power {
		width: 3px;
		height: 90px;
		right: -11px;
		top: 280px;
	}

	.screen {
		width: 100%;
		height: 100%;
		background: #f8f9fa;
		border-radius: 47px;
		overflow: hidden;
		position: relative;
		display: flex;
		flex-direction: column;
		transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.status-bar {
		height: 60px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 36px;
		font-size: 14px;
		font-weight: 600;
		z-index: 10;
	}

	.status-icons {
		display: flex;
		align-items: center;
		transform: translateX(8px);
	}

	.dynamic-island-container {
		position: absolute;
		top: 11px;
		left: 0;
		right: 0;
		display: flex;
		justify-content: center;
		z-index: 20;
	}

	.dynamic-island {
		background: #000;
		width: 120px;
		z-index: 9999999999;
		height: 36px;
		border-radius: 20px;
		transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
		display: flex;
		align-items: center;
		justify-content: center;
		border: none;
		cursor: pointer;
		color: white;
		overflow: hidden;
	}

	.dynamic-island.expanded {
		width: 320px;
		height: 80px;
		border-radius: 40px;
	}

	.island-content {
		display: flex;
		align-items: center;
		gap: 12px;
		padding: 0 20px;
		animation: fadeIn 0.3s ease;
	}

	.pulse {
		width: 12px;
		height: 12px;
		background: #34c759;
		border-radius: 50%;
		animation: pulse 1.5s infinite;
	}

	@keyframes pulse {
		0% {
			transform: scale(0.95);
			box-shadow: 0 0 0 0 rgba(52, 199, 89, 0.7);
		}
		70% {
			transform: scale(1);
			box-shadow: 0 0 0 10px rgba(52, 199, 89, 0);
		}
		100% {
			transform: scale(0.95);
			box-shadow: 0 0 0 0 rgba(52, 199, 89, 0);
		}
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: scale(0.9);
		}
		to {
			opacity: 1;
			transform: scale(1);
		}
	}

	.island-camera {
		width: 12px;
		height: 12px;
		background: #1a1a1a;
		border-radius: 50%;
		margin-left: 60px;
		box-shadow: inset 0 0 2px rgba(255, 255, 255, 0.2);
		position: relative;
	}

	.island-camera::after {
		content: "";
		position: absolute;
		top: 3px;
		right: 3px;
		width: 4px;
		height: 4px;
		background: rgba(255, 255, 255, 0.1);
		border-radius: 50%;
	}

	.content-area {
		flex: 1;
		overflow-y: auto;
		background: #f8f9fa;
		padding-bottom: 20px;
		position: relative;
	}
	.page-wrapper {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
	}

	.bottom-nav {
		height: 84px;
		background: #ffffff;
		border-top: 1px solid #f2f2f7;
		display: flex;
		justify-content: space-around;
		align-items: center;
		padding: 0 16px;
		padding-bottom: 18px;
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 30;
	}

	.nav-item {
		display: flex;
		align-items: center;
		justify-content: center;
		text-decoration: none;
		color: #114a32;
		height: 48px;
		border-radius: 24px;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		padding: 0 14px;
		min-width: 48px;
	}

	.nav-item.active {
		background: #d4e9df;
		padding: 0 22px;
		gap: 10px;
	}

	.nav-item svg {
		width: 24px;
		height: 24px;
		stroke: currentColor;
		stroke-width: 1.8;
		fill: none;
	}

	.nav-item.active svg {
		fill: #114a32;
		stroke-width: 0;
	}

	.nav-item span {
		display: none;
		font-size: 15px;
		font-weight: 600;
	}

	.nav-item.active span {
		display: block;
	}

	.home-indicator {
		position: absolute;
		bottom: 8px;
		width: 134px;
		height: 5px;
		background: #000;
		border-radius: 100px;
		left: 50%;
		transform: translateX(-50%);
		pointer-events: none;
	}

	.home-indicator.dark {
		background: #000;
		bottom: 8px;
		z-index: 100;
	}

	.loading-overlay {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(4, 88, 26, 0.78);
		z-index: 1000;
		display: flex;
		align-items: center;
		justify-content: center;
		backdrop-filter: blur(1px);
	}

	.spinner {
		width: 40px;
		height: 40px;
		border: 4px solid rgba(255, 255, 255, 0.793);
		border-top: 4px solid #34c759;
		border-radius: 50%;
		animation: spin 0.8s linear infinite;
	}

	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}
</style>
