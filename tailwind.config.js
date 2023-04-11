/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage:{
         'hero-pattern':"url('/img/heroImage.svg')",
         'profile-picture':"url('/img/profilepic.svg')",
         'mobile-profile-picture':"url('/img/mobileviewheroimage.svg')",
         'small-profile-picture'  : "url('/img/smallprofilepicture.svg')"
      },
      margin:{
        '40':"40px"
      },
      padding:{
        '9px':'9px',
        '24px':'24px',
        '11px':'11px'
      },
      backgroundColor:{
        'light-green':'#008080',
        'section-color':'#E6F2F2',
        'darker':'#001A1A',
        'categories-section':'#E6F2F2'
      },
      borderRadius:{
        '8px':'8px'
      },
      height:{
        '504px':'504px',
        '394px':'394px',
        '384px':'384px'
      },
      boxShadow: {
        'shadow-card': '0px 0px 16px rgba(0, 128, 128, 0.16)',
      }
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
    },
  },
  plugins: [],
}
