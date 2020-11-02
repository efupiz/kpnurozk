self.addEventListener('install', async event => {
	console.log('Service worker has been installed');
});
self.addEventListener('fetch', event => {
	console.log(`Trying to fetch ${event.request.url}`);
	event.respondWith(checkCache(event.request));
});
