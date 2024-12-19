import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';

export const routes = [
  {
    index: true,
    label: "Do Nguyen Van",
    path: '/',
  },
  {
    label: 'About',
    path: '/about',
  },
  {
    label: 'Resume',
    path: '/resume',
  },
  {
    label: 'Projects',
    path: '/projects',
  },
  {
    label: 'Contact',
    path: '/contact',
  },
];

export const contactIcons = [
    {
      link: 'https://github.com/nguyenvando0810',
      label: 'Github',
      icon: faGithub,
    },
    {
      link: 'https://facebook.com/tieutuyet10',
      label: 'Facebook',
      icon: faFacebookF,
    },
    {
      link: 'https://www.instagram.com/tieutuyet10',
      label: 'Instagram',
      icon: faInstagram,
    },
    {
      link: 'https://www.linkedin.com/in/tieutuyet10',
      label: 'LinkedIn',
      icon: faLinkedinIn,
    },
    {
      link: 'https://twitter.com',
      label: 'Twitter',
      icon: faTwitter,
    },
    {
      link: 'mailto:nguyenvando081096@gmail.com',
      label: 'Email',
      icon: faEnvelope,
    },
]