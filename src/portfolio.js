const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '',
  title: 'Miguel Tcholakian portfolio.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Miguel Tcholakian',
  role: 'Front End Engineer',
  description: 'This is my portfolio',
  resume: 'https://www.linkedin.com/in/migueltcholakian/',
  social: {
    linkedin: 'https://www.linkedin.com/in/migueltcholakian/',
    github: 'https://github.com/chorli',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'React Clean Architecture',
    description:
      'In this project you will see how to best structure your React Apps',
    stack: ['JavaScript', 'HTML', 'React'],
    sourceCode: 'https://github.com/chorli/reactCleanArchitecture',
    livePreview: 'https://github.com/chorli/reactCleanArchitecture',
  },
  {
    name: 'WebScrapper Python Sample',
    description: 'In this project Web Scrapping is tested under Clarin website',
    stack: ['Python'],
    sourceCode: 'https://github.com/chorli/clarinScrapper',
    livePreview: 'https://github.com/chorli/clarinScrapper',
  },
  {
    name: 'Coming Soon...',
    description: 'Next project will amaze you :)',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
  'Enzyme',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'mtcholakian@gmail.com',
}

export { header, about, projects, skills, contact }
