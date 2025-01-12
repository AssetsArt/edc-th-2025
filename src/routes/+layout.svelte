<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

{@render children()}

<!-- Footer -->
<footer class="bg-white py-6 text-gray-700 shadow-sm">
	<div class="container mx-auto px-4">
		<div class="flex flex-col items-center space-y-4 md:flex-row md:justify-between md:space-y-0">
			<!-- Logo and Brand -->
			<div class="flex items-center space-x-2">
				<img src="/asset-l.png" alt="AssetsArt Logo" class="h-12" />
			</div>
			<!-- Powered By -->
			<div class="text-center">
				<p class="text-sm text-gray-500">
					Powered by
					<a
						href="https://assetsart.com"
						class="font-semibold text-blue-600 hover:text-blue-400"
						target="_blank"
						rel="noopener noreferrer"
					>
						AssetsArt
					</a>
				</p>
			</div>
		</div>

		<div class="flex justify-center space-x-4">
			<div class="flex items-center space-x-4">
				<a href="https://github.com/AssetsArt" title="Github AssetsArt" style="margin-right: 10px;"
					target="_blank"
					><img
						src="https://img.shields.io/badge/github - AssetsArt-blue?logo=github&amp;logoColor=white"
						alt="Github - AssetsArt"
					/></a
				><a href="mailto:trust@assetsart.com" title="Email Me"
					><img
						src="https://img.shields.io/badge/Email - trust@assetsart.com-blue?logo=gmail&amp;logoColor=white"
						alt=":trust@assetsart.com"
					/></a
				>
			</div>
		</div>
	</div>
</footer>
