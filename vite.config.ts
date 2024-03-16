import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa';

const manifestForPlugin: Partial<VitePWAOptions> = {
    registerType: 'prompt',
    includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-ico.svg'],
    manifest: {
        name: 'Crypto Comparison Tool',
        short_name: 'CryptoComp',
        description:
            'A small exercise about fetching data in react using TS and now converting to a PWA',
        icons: [
            {
                src: 'manifest-icon-192.maskable.png',
                sizes: '192x192',
                type: 'image/png',
                purpose: 'any',
            },
            {
                src: 'manifest-icon-192.maskable.png',
                sizes: '192x192',
                type: 'image/png',
                purpose: 'maskable',
            },
            {
                src: 'manifest-icon-512.maskable.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'any',
            },
            {
                src: 'manifest-icon-512.maskable.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'maskable',
            },
        ],
        theme_color: '#e9dfdf',
        background_color: '#111111',
        display: 'fullscreen',
        start_url: '/',
        orientation: 'portrait',
    },
};

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), VitePWA(manifestForPlugin)],
});
