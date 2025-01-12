<script lang="ts">
	import { writable } from 'svelte/store';
	import * as Tabs from '$lib/components/ui/tabs/index.js';
	import * as Resizable from '$lib/components/ui/resizable/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { PaneResizer } from 'paneforge';
	import dayjs from 'dayjs';
	import { cn } from '@/utils';

	// types
	type Artist = {
		artist: string;
		start_time: string;
		end_time: string;
		stage: string;
	};
	type Lineup = {
		date: string;
		stage: string;
		performances: {
			artist: string;
			start_time: string;
			end_time: string;
		}[];
	};

	// Data store for the lineup
	const lineups = writable<Lineup[]>([]);

	// State
	let selectedDate = '2025-01-17';
	let days = $state<string[]>([]);
	let timeSlots: string[] = $state([]);
	let performances: {
		[stage: string]: Artist[];
	} = $state({});
	let currentTime = writable(dayjs().format('HH:mm'));
	let currentLivePosition = writable(0);
	let pins = writable<string[]>([]);
	let pinWord = [
		'Turn It Up!',
		'Feel the Beat!',
		'Party On!',
		'Join the Vibe!',
		'Dance Now!',
		'Hit the Floor!',
		'Get Hyped!',
		'EDC Mode On!',
		'Glow Time!',
		'Move It!'
	];
	let openDialog = writable({
		value: false,
		artist: null as Artist | null
	});

	// hooks
	$effect.root(() => {
		fetch('https://raw.githubusercontent.com/AssetsArt/edc-th-2025/refs/heads/main/static/lineup.json').then(async (res) => {
			const data = await res.json();
			lineups.set(data);
			// console.log(data);
			SelectedLineups();
			// group by date
			days = Array.from(new Set($lineups.map((lineup) => lineup.date)));
			// sort by date
			days.sort((a, b) => new Date(a).getTime() - new Date(b).getTime());
			// console.log(days);

			// get pins
			let Artists = $lineups.flatMap((lineup) => lineup.performances.map((p) => p.artist));
			let pinLocal = localStorage.getItem('pins_artists');
			try {
				let pinsData = JSON.parse(pinLocal || '[]') as string[];
				// validate pins
				pinsData = pinsData.filter((pin) => Artists.includes(pin));
				pins.set(pinsData);
			} catch (error) {
				console.log(error);
			}
		});
	});
	$effect(() => {
		CurrentLivePosition();
		let timeInterval = setInterval(() => {
			CurrentLivePosition();
		}, 1000);
		return () => clearInterval(timeInterval);
	});

	// Methods
	function SelectedLineups() {
		const selectedLineups = $lineups.filter((lineup) => lineup.date === selectedDate);
		if (selectedLineups.length > 0) {
			// console.log(selectedLineups
			// 	.flatMap((lineup) => lineup.performances.map((p) => p.start_time))
			// 	.sort());
			const minTime = selectedLineups
				.flatMap((lineup) => lineup.performances.map((p) => p.start_time))
				.sort()[0];
			const maxTime = selectedLineups
				.flatMap((lineup) => lineup.performances.map((p) => p.start_time))
				.sort()
				.slice(-1)[0];
			// console.log(minTime, maxTime);
			timeSlots = generateTimeSlots(minTime, maxTime);

			performances = selectedLineups.reduce(
				(acc, lineup) => {
					acc[lineup.stage] = lineup.performances.map((performance) => ({
						...performance,
						stage: lineup.stage
					}));
					return acc;
				},
				{} as typeof performances
			);
		}
	}

	function generateTimeSlots(minTime: string, maxTime: string): string[] {
		const slots: string[] = [];
		let [hours, minutes] = minTime.split(':').map(Number);
		const [endHours, endMinutes] = maxTime.split(':').map(Number);

		while (hours < endHours || (hours === endHours && minutes <= endMinutes)) {
			slots.push(`${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`);
			minutes += 30;
			if (minutes >= 60) {
				minutes = 0;
				hours += 1;
			}
		}
		return slots;
	}

	function findPosition(
		performance: { start_time: string; end_time: string },
		previousPerformance?: { end_time: string }
	) {
		let top = 0;
		let height = 0;
		// find show time range like 45 minutes
		let start = performance.start_time.split(':').map(Number);
		const end = performance.end_time.split(':').map(Number);
		if (end[0] === 0) {
			end[0] = 24;
		}
		const duration = (end[0] - start[0]) * 60 + (end[1] - start[1]);
		// console.log(performance, duration);
		// find the height
		height = (duration / 30) * 5;
		if (previousPerformance) {
			let prevEnd = previousPerformance.end_time.split(':').map(Number);
			if (prevEnd[0] === 0) prevEnd[0] = 24;
			const gap = start[0] * 60 + start[1] - (prevEnd[0] * 60 + prevEnd[1]);
			if (gap > 0) {
				top += (gap / 15) * 2.5;
			}
		}

		return {
			top: `${top}rem`,
			height: `${height}rem`
		};
	}

	function onSelectedDay(day: string) {
		// console.log(day);
		selectedDate = days[Number(day)];
		SelectedLineups();
		CurrentLivePosition();
	}

	function CurrentLivePosition() {
		currentTime.set(dayjs().format('HH:mm'));

		// debug
		// let selectedDate = dayjs().format('YYYY-MM-DD');

		const dayStart = dayjs(`${selectedDate} 15:00`, 'YYYY-MM-DD HH:mm');
		const dayEnd = dayjs(`${selectedDate} 23:59`, 'YYYY-MM-DD HH:mm').add(1, 'minute');
		const durationOfDay = dayEnd.diff(dayStart, 'minute');
		const djStart = dayjs();
		let paneMinutes = djStart.diff(dayStart, 'minute');
		let pane = (paneMinutes / durationOfDay) * 100;
		pane = Number(pane.toFixed(6));
		if (pane !== $currentLivePosition) {
			currentLivePosition.set(0);
			setTimeout(() => {
				console.log('Set live position', pane);
				currentLivePosition.set(pane);
			}, 10);
		}
	}
</script>

<svelte:head>
	<title>EDC Thailand 2025</title>
	<meta name="description" content="Electric Daisy Carnival Thailand 2025 lineup and schedule" />
	<meta name="keywords" content="EDC, Thailand, 2025, Lineup" />
	<meta property="og:image" content="/edth_2025.jpg" />
</svelte:head>

<!-- openDialog -->
{#if $openDialog.value}
	<Dialog.Root
		open={$openDialog.value}
		onOpenChange={(v) =>
			openDialog.set({
				...$openDialog,
				value: v
			})}
	>
		<!-- Content -->
		<Dialog.Content>
			<div class="p-4">
				{#if $openDialog.artist}
					<div class="mb-2 text-lg font-bold text-gray-800">
						{$openDialog.artist.artist}
					</div>
					<div class="mb-2">
						<span class="text-sm font-medium text-gray-500">Stage:</span>
						<span class="ml-1 text-sm text-gray-700">
							{$openDialog.artist.stage}
						</span>
					</div>
					<div class="mb-4">
						<span class="text-sm font-medium text-gray-500">Time:</span>
						<span class="ml-1 text-sm text-gray-700">
							{$openDialog.artist.start_time} - {$openDialog.artist.end_time}
						</span>
					</div>
				{/if}
			</div>

			<!-- Action Buttons -->
			<div class="flex justify-between">
				{#if $pins.includes($openDialog.artist?.artist || '')}
					<Button
						variant="destructive"
						onclick={() => {
							let newPins = $pins.filter((pin) => pin !== $openDialog.artist?.artist);
							localStorage.setItem('pins_artists', JSON.stringify(newPins));
							pins.set(newPins);
							openDialog.set({
								artist: null,
								value: false
							});
						}}
					>
						Turn Off Spotlight
					</Button>
				{:else}
					<Button
						onclick={() => {
							let newPins = [...$pins, $openDialog.artist?.artist || ''];
							localStorage.setItem('pins_artists', JSON.stringify(newPins));
							pins.set(newPins);
							openDialog.set({
								artist: null,
								value: false
							});
						}}
					>
						Spotlight
					</Button>
				{/if}

				<!-- Close Button -->
				<Button
					variant="outline"
					onclick={() =>
						openDialog.set({
							artist: null,
							value: false
						})}
				>
					Close
				</Button>
			</div>
		</Dialog.Content>
	</Dialog.Root>
{/if}

<!-- UI -->
{#if $lineups.length === 0}
	<div class="flex h-screen items-center justify-center">
		<div class="text-2xl font-bold text-gray-500">Loading...</div>
	</div>
{:else}
	<div class="p-4">
		<h1 class="mb-4 text-2xl font-bold">Electric Daisy Carnival Thailand 2025</h1>
		<div class="mb-4 flex justify-center">
			<Tabs.Root value="0" class="w-[400px]" onValueChange={onSelectedDay}>
				<Tabs.List>
					{#each days as day, index (day)}
						<Tabs.Trigger value={`${index}`}>
							{dayjs(day).format('dddd, MMM DD')}
						</Tabs.Trigger>
					{/each}
				</Tabs.List>
			</Tabs.Root>
		</div>
		<div class="flex">
			<!-- Time slots -->
			<div>
				<div class="absolute h-[1440px] w-14">
					{#if $currentLivePosition > 0}
						<Resizable.PaneGroup direction="vertical" class="timeline-wrapper">
							<Resizable.Pane defaultSize={$currentLivePosition} />
							<PaneResizer class="relative flex h-2 items-center justify-center" disabled>
								<div class="absolute left-0 h-1 w-[96.6vw] bg-red-500">
									<div
										class="absolute left-0 top-0 flex h-5 w-14 items-center justify-center bg-red-500 text-xs text-white font-bold"
									>
										{$currentTime}
									</div>
								</div>
							</PaneResizer>
							<!-- Fixed Pane -->
							<Resizable.Pane></Resizable.Pane>
						</Resizable.PaneGroup>
					{/if}
				</div>
				<div class="rounded-sm bg-[var(--edc-primary)]">
					{#each timeSlots as slot (slot)}
						<div class="flex h-20 w-14 justify-center p-2 text-xs text-white font-bold">
							{slot}
						</div>
					{/each}
					<div class="flex h-20 w-14 items-center justify-center p-2 text-xs text-white font-bold">End</div>
				</div>
			</div>

			<!-- Stages -->
			<div class="flex w-full justify-between gap-2 overflow-x-auto">
				{#each Object.keys(performances) as stage, index (stage)}
					<div
						class={cn('w-full', {
							'border-l': index > 0
						})}
					>
						{#each performances[stage] as performance, i (i)}
							<Card.Root
								onclick={() => {
									openDialog.set({
										value: true,
										artist: performance
									});
								}}
								style="
            margin-top: calc({findPosition(performance, performances[stage][i - 1]).top});
            height: calc({findPosition(performance, performances[stage][i - 1]).height});
            box-shadow: unset;
            border: unset;
            border-left: {$pins.includes(performance.artist)
									? '4px solid var(--edc-red)'
									: 'unset'};
            border-radius: 0;
            margin-left: 1rem;
            "
							>
								<Card.Header class="p-0 pl-4">
									<Card.Title>
										{#if i === 0}
											<div
												class="mb-2 min-w-40 rounded-sm bg-[var(--edc-blue)] p-1 text-xs text-white"
											>
												{performance.stage}
											</div>
										{:else}
											<div class="mb-2 rounded-sm bg-[var(--edc-pd)] p-1 text-xs text-white">
												Start {performance.start_time}
											</div>
										{/if}
										{performance.artist}
									</Card.Title>
									<Card.Description>
										{performance.start_time} - {performance.end_time}
									</Card.Description>
								</Card.Header>
								<Card.Content class="p-4">
									{#if $pins.includes(performance.artist)}
										<div class="flex items-center justify-between">
											<div class="rounded-sm bg-[var(--edc-red)] p-1 text-xs text-white">
												{pinWord[Math.floor(Math.random() * pinWord.length)]}
											</div>
										</div>
									{/if}
								</Card.Content>
							</Card.Root>
						{/each}
					</div>
				{/each}
			</div>
		</div>
	</div>
{/if}
