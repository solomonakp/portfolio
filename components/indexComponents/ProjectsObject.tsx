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
    repository: '/',
    site: '/',
  },
  {
    title: 'Star wars Info',
    description:
      'Yes I know I am a geek, channeling my geekiness I decided to creat small web application that gives information and statistics on star wars characters and planets.',
    tags: ['React', 'SASS Modules', 'Redux', 'SWAPI'],
    thumbnail: starwars,
    repository: '/',
    site: '/',
  },
  {
    title: 'Lumia.ng',
    description:
      'Lumia.ng is a web application that reduces the hassle of purchasing electricity units for millions of Nigerian.',
    tags: ['Vue', 'CSS', 'bootstrap'],
    thumbnail: lumia,
    repository: '/',
    site: '/',
  },

  {
    title: 'Portfolio with Blog ',
    description:
      'This project was build to showcase my work and document my journey as a software engineer.',
    tags: ['TypeScript', 'Next.js', 'Strapi', 'Anime.js', 'bootstrap'],
    thumbnail: portfolio,
    repository: '/',
    site: '/',
  },
]

export default projects
