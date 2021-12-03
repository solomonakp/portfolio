import portfolio from 'public/pictures/portfolio.png'
import atara from 'public/pictures/atara.png'
import lumia from 'public/pictures/lumia.png'
import starwars from 'public/pictures/starwars.png'

const projects = [
  {
    title: 'AtaraPay',
    description:
      'AtaraPay is an Escrow platform that allows buyers and sellers to perform transactions with zero risk.',
    tags: ['HTML', 'CSS', 'javaScript', 'bootstrap'],
    thumbnail: atara,
    site: 'https://www.atarapay.com/',
  },
  {
    title: 'Star wars Info',
    description:
      'Yes I know I am a geek, channeling my geekiness I decided to creat small web application that gives information and statistics on star wars characters and planets.',
    tags: ['React', 'SASS Modules', 'Redux', 'SWAPI'],
    thumbnail: starwars,
    repository: 'https://github.com/solomonakp/Starwars-info',
    site: 'https://starwars-info-neon.vercel.app/',
    figma:
      'https://www.figma.com/file/OEvEm5yotJwoFdaH5hdQvg/Untitled?node-id=0%3A1',
  },
  {
    title: 'Lumia.ng',
    description:
      'Lumia.ng is a web application that reduces the hassle of purchasing electricity units for millions of Nigerian.',
    tags: ['Vue', 'CSS', 'bootstrap'],
    thumbnail: lumia,
    site: 'https://lumia.ng/',
  },

  {
    title: 'Portfolio with Blog ',
    description:
      'This project was build to showcase my work and document my journey as a software engineer.',
    tags: ['TypeScript', 'Next.js', 'Strapi', 'Anime.js', 'bootstrap'],
    thumbnail: portfolio,
    repository: 'https://github.com/solomonakp/portfolio',
    site: 'https://www.devchuck.me/',
    figma:
      'figma.com/file/3lqHLfVz7F2VUKUqoSb39l/Chuki-Port-(Copy)?node-id=2215%3A408',
  },
]

export default projects
