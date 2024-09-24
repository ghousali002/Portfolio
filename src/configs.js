import {
  displayAt,
  STOPS,
  PAGE_DEPH_MARGIN,
  SKILLS_LIST,
  EXPERIENCE,
} from './constants/pageData';

const configs = {
  title: 'Ghous Ali',
  subTitle: 'Full Stack Developer ',
  stars: {
    maxSize: 20,
    emissionIntencity: 40,
    //optionally stars can be an image
    // url: 'icons/three-js-logo.png',
    dencity: 900,
  },
  navTitle: 'Ghous Ali ',
  relevantStops: STOPS,
  pages: [
    {
      scale: 15,
      rotation: [Math.PI, 0, Math.PI],
      position: [0, 0, -PAGE_DEPH_MARGIN],
      displayAt: displayAt('About'),
      title: 'Who Am I?',
      infos: [
        "* I'm Ghous Ali, a passionate and driven MERN Stack Developer with a focus on creating user-centric web applications.",
'* Freshly Graduate (Software Engineering) from the University of Central Punjab with a CGPA of 3.48.',
'* My journey in development started with curiosity and evolved into a full-fledged career, including freelancing and personal projects.',
'* Over the past year, I’ve worked with various technologies such as React, Node.js, Python, and C/C++ to deliver quality solutions.',
      ],
    },
    // {
    //   scale: 15,
    //   displayAt: displayAt('Experience'),
    //   rotation: [0, -Math.PI / 2, 0],
    //   position: [-PAGE_DEPH_MARGIN, 0, 0],
    //   title: 'Experience',
    //   imageList: EXPERIENCE,
    //   footer: 'You can click the icons to find out more.',
    // },
    {
      scale: 15,
      displayAt: displayAt('Skills'),
      rotation: [-Math.PI / 2, 0, -Math.PI / 2],
      position: [0, PAGE_DEPH_MARGIN, 0],
      title: 'Skills',
      footer: 'And more...',
      imageList: SKILLS_LIST,
    },
    {
      scale: 15,
      displayAt: displayAt('Download CV'),
      rotation: [0, 0, 0],
      position: [0, 0, PAGE_DEPH_MARGIN],
      title: 'Here is my CV!',
      footer: 'Click the icon above to view!',
      imageList: {
        rows: 1,
        separation: 3,
        leftPadding: 0,
        topPadding: 0,
        scale: 0.8,
        items: [
          {
            url: 'icons/resume.png',
            websiteURL:
              'https://drive.usercontent.google.com/u/0/uc?id=1Y9VgaQuzlTItK-oZStQTdXxhQ6_BwGEM&export=download',
          },
        ],
      },
    },
    {
      scale: 15,
      displayAt: displayAt('Personal Projects'),
      rotation: [Math.PI / 2, 0, 0],
      position: [0, -PAGE_DEPH_MARGIN, 0],
      title: 'Personal Projects',
      footer: '(And also this web-app)',
      imageList: {
        rows: 2,
        separation: 2.5,
        leftPadding: -0.4,
        topPadding: 0.2,
        scale: 0.3,
        items: [
          {
            url: 'websites-preview/TeacherDashboard.png',
            websiteURL: 'https://github.com/ArhumCH10/Edu-Mentor-AI',
          },
          {
            url: 'websites-preview/realestate.png',
            websiteURL: 'https://github.com/ghousali002/Real-Estate-Project',
          },
          {
            url: 'websites-preview/News.png',
            websiteURL:
              'https://github.com/ghousali002/Real-Time-News-React-Project',
          },
          {
            url: 'websites-preview/MovieHax.png',
            websiteURL: 'https://github.com/ghousali002/MovieHax-React-Project-',
          },
          {
            url: 'websites-preview/Chat.png',
            websiteURL: 'https://github.com/ghousali002/KinG_Chat_Room_Project',
          },
          
        ],
      },
    },
    {
      scale: 15,
      displayAt: displayAt('Get In Touch'),
      rotation: [0, Math.PI / 2, 0],
      position: [PAGE_DEPH_MARGIN, 0, 0],
      title: 'You can find me in:',
      footer: 'Almost done but keep scrolling :)',
      imageList: {
        rows: 2,
        separation: 1.8,
        leftPadding: -0.25,
        topPadding: 0.2,
        scale: 0.3,
items: [
  
  {
    url: 'icons/linkedin.png',
    websiteURL: 'https://www.linkedin.com/in/ghousali002/',
  },
  {
    url: 'icons/github.png',
    websiteURL: 'https://github.com/ghousali002',
  },
  {
    url: 'icons/email.png',
    websiteURL: 'mailto:ghous290@gmail.com',
  },
],
      },
    },
  ],
};

export default configs;
