<template>
	<div>
		<div
			class="min-h-screen dark:bg-slate-900 dark:text-gray-200 bg-gradient-to-b from-transparent dark:from-transparent dark:via-gray-800 dark:to-primary-900 via-primary-200 to-blue-100"
		>
			<Nav />
			<div
				class="lg:px-desktop px-[20px] md:px-mobile mx-auto h-full w-full pt-20 relative"
			>
				<h1
					class="animate-fadeDown md:text-7xl text-4xl font-bold text-center z-10 relative group"
				>
					Fresh salads for the <br />
					<span
						class="text-transparent bg-gradient-to-r from-primary-800 via-teal-600 to-blue-400 bg-clip-text"
						>Entire Family</span
					>
				</h1>
				<img
					src="/h2.png"
					alt="Lovely Freshh Salad"
					class="object-cover h-full w-auto mt-10 mx-auto transition-all duration-1000"
				/>
				<!-- Reviews card for desktop only -->
				<div
					class="hidden group hover:scale-105 hover:shadow-2xl lg:block absolute top-[50%] left-[20%] p-4 px-6 rounded-lg dark:hover:bg-slate-700 dark:bg-slate-800 shadow-md transition-all duration-300 cursor-pointer"
				>
					<p class="font-medium mb-5">Customer reviews</p>
					<div class="flex justify-between -space-x-2">
						<div
							v-for="(img, i) in images"
							:key="`user${i}`"
							class="border-2 border-white rounded-full"
						>
							<img :src="img" class="w-12 h-12 rounded-full" alt="" />
						</div>
					</div>
					<p class="flex mt-4 text-sm">
						<StarIcon class="w-5 h-5 text-amber-400 mr-1" /> Over 5k reviews
					</p>
				</div>
				<!-- Free delivery card for desktop only -->
				<div
					class="hidden group hover:scale-110 hover:shadow-2xl xl:block absolute top-[30%] right-[10%] p-4 px-6 rounded-lg dark:hover:bg-slate-700 dark:bg-slate-800 shadow-md transition-all duration-500 cursor-pointer"
				>
					<div class="flex items-center space-x-8">
						<img
							src="/free_delivery.png"
							alt="Free Delivery Image"
							class="w-16 h-16 object-cover"
						/>
						<div>
							<p class="font-medium text-lg">Free Delivery every Friday!</p>
							<p class="font-semibold text-2xl text-red-700">TGIF</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	useMeta({
		title: "Fresshh",
		description:
			"Fresshh is a family-friendly salad restaurant in the heart of the city.",
	});
	import StarIcon from "@/assets/icons/star.svg?component";
	definePageMeta({
		title: "Fresshh",
		description: "Fresh salads for the entire family",
	});
	const images = [
		"https://randomuser.me/api/portraits/men/75.jpg",
		"https://randomuser.me/api/portraits/women/75.jpg",
		"https://randomuser.me/api/portraits/men/85.jpg",
		"https://randomuser.me/api/portraits/women/85.jpg",
	];
</script>
