import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://htmlpreview.github.io/?https://github.com/rockstarphil/rockstarphil.com/blob/docs/dist/',
  plugins: [react()],
})
