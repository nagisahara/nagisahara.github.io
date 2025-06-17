module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // 和風の色彩
        washi: '#fdeff2', // 和紙色（薄いピンク）
        sakura: '#ffdbed', // 桜色
        mizuiro: '#c8e4f5', // 水色
        momiji: '#d3381c', // 紅葉色
        snow: '#f8fbff', // 雪色
        tea: '#b4a582', // 茶色
      },
      fontFamily: {
        mincho: ['serif'], // 明朝体
      },
    },
  },
  plugins: [],
} 