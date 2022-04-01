<template>
	<nav
		class="flex justify-between items-center h-24 px-mobile lg:px-desktop mx-auto dark:text-gray-200"
	>
		<ul class="md:flex space-x-6 hidden">
			<li
				v-for="(l, i) in links"
				class="group cursor-pointer"
				:key="`link${i}`"
			>
				<nuxt-link class="text-sm group-hover:text-primary-600" to="#">{{
					l
				}}</nuxt-link>
				<div
					class="h-0.5 mt-1 bg-primary-600 scale-x-0 group-hover:scale-x-100 transition-all duration-300 w-10/12"
				></div>
			</li>
		</ul>
		<h1 class="text-3xl cursor-pointer font-medium">
			Fress<span class="text-green-600">hh</span>
		</h1>
		<!-- Menu & theme button for mobile -->
		<div class="md:hidden space-x-4">
			<button
				@click="toggleTheme"
				class="md:hidden focus:outline-none focus:shadow-outline p-2 border rounded-md"
			>
				<SunIcon class="h-5 w-5 hover:text-primary-600" />
			</button>
			<button
				@click="mobileMenu = !mobileMenu"
				class="focus:outline-none focus:shadow-outline p-2 border rounded-md"
			>
				<MenuIcon v-if="!mobileMenu" class="h-5 w-5 hover:text-primary-600" />
				<CloseIcon v-else class="h-5 w-5 hover:text-primary-600" />
			</button>
		</div>

		<div class="md:flex items-center space-x-6 hidden">
			<ul class="flex space-x-6">
				<li
					v-for="(l, i) in links2"
					class="group cursor-pointer"
					:key="`link2${i}`"
				>
					<nuxt-link class="text-sm group-hover:text-primary-600" to="#">{{
						l
					}}</nuxt-link>
					<div
						class="h-0.5 mt-1 bg-primary-600 scale-x-0 group-hover:scale-x-100 transition-all duration-300 w-10/12"
					></div>
				</li>
			</ul>
			<button @click="toggleTheme">
				<SunIcon class="h-5 w-5 hover:text-primary-600" />
			</button>
			<div class="relative flex flex-col justify-center group">
				<button @click="showUserMenu = !showUserMenu">
					<UserIcon
						v-if="!showUserMenu"
						class="h-5 w-5 hover:text-primary-600"
					/>
					<CloseIcon
						v-else
						class="h-5 w-5 hover:text-primary-600 hover:rotate-180 transition-all duration-500"
					/>
				</button>
				<div
					:class="{ 'opacity-0': !showUserMenu }"
					class="bg-white z-50 space-y-1 transition-all duration-300 min-w-[100px] rounded p-1 text-gray-700 absolute -bottom-[172px] -left-[58px]"
				>
					<nuxt-link
						@click="showUserMenu = !showUserMenu"
						v-for="(u, i) in users"
						:key="`user-${i}`"
						to="#"
						class="text-sm block px-3 py-1 hover:bg-slate-200 rounded transition-all duration-300"
					>
						{{ u }}</nuxt-link
					>
				</div>
			</div>
		</div>

		<!-- Side nav -->
		<div
			:class="{ 'w-3/4': mobileMenu, 'w-0': !mobileMenu }"
			class="absolute md:hidden pl-5 inset-y-0 left-0 h-full z-[100] transition-all duration-300 dark:text-gray-200 bg-gradient-to-b from-white/90 dark:from-gray-800/95 dark:via-gray-800/95 dark:to-primary-900 via-primary-200/95 to-blue-100/95"
		>
			<div
				v-if="mobileMenu"
				class="transition-all duration-300 opacity-0"
				:class="{ 'opacity-100': mobileMenu }"
			>
				<h1 class="text-3xl cursor-pointer font-medium mt-5">
					Fress<span class="text-green-600">hh</span>
				</h1>
			</div>
		</div>
	</nav>
</template>

<script setup>
	const users = ["Profile", "Settings", "Account", "Orders", "Logout"];
	const links = ["Home", "About", "Contact", "Products"];
	const links2 = ["Farms", "Blog", "Collections"];
	import SunIcon from "@/assets/icons/sun.svg?component";
	import UserIcon from "@/assets/icons/user.svg?component";
	import MenuIcon from "@/assets/icons/menu.svg?component";
	import CloseIcon from "@/assets/icons/close.svg?component";
	const showUserMenu = useState("showUserMenu", () => false);
	const mobileMenu = useState("mobileMenu", () => false);

	const toggleTheme = () => {
		const colorMode = useColorMode();
		switch (colorMode.value) {
			case "dark":
				colorMode.preference = "light";
				break;
			case "light":
				colorMode.preference = "dark";
				break;

			default:
				break;
		}
	};
</script>
