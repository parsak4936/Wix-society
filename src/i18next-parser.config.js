module.exports = {
  locales: ['en', 'fa', 'it', 'ru'], // زبان‌هایی که می‌خواهید پشتیبانی کنید
  output: 'public/locales/$LOCALE/translation.json', // مسیر خروجی فایل‌های ترجمه در پوشه public
  input: ['src/**/*.{js,jsx}', 'public/**/*.html'], // مسیر فایل‌های ورودی برای اسکن
  keySeparator: false, // جداکننده کلیدها
  namespaceSeparator: false, // جداکننده namespace ها
};

  //npx i18next -c src/i18next-parser.config.js "src/**/*.{js,jsx}" "public/**/*.html"

