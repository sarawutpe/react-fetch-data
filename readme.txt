Install Tailwind CSS
https://tailwindcss.com/docs/installation/using-postcss

1.รันคำสั่ง
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init

2.สร้างไฟล์ postcss.config.js ใน root folder และเพิ่มโค้ดชุดนี้ในไฟล์

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}

3.แทนโค้ดชุดนี้ในไฟล์ tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

4. เพิ่มโค้ดชุดนี้ใน index.css

@tailwind base;
@tailwind components;
@tailwind utilities;


