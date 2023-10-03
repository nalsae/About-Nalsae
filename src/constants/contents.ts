export const SCREENS_INFO = [
  'About Me',
  '',
  '',
  '',
  '',
  '',
  'Hobby',
  'Playlist',
  'Projects',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  'Tech Stacks',
  '',
  '',
  '',
  '',
  '',
  '',
  'Album',
];

export const ABOUT_ME_CONTENTS = [
  'Intro',
  'Contact',
  'Activity',
  'Education',
  'Interest',
];

export const PROJECTS_CONTENTS = [
  'Grow Story',
  'My Pokedex',
  '33 1/3',
  'Piece Plan',
  'Improving BR Website',
];

export const TECH_STACKS_CONTENTS = ['Front-End', 'Back-End', 'Design'];

export const FRONT_END_STACKS_INFO = [
  [
    { name: 'HTML5', imgUrl: '/assets/img/logo_html.png' },
    { name: 'CSS3', imgUrl: '/assets/img/logo_css.png' },
    { name: 'JavaScript', imgUrl: '/assets/img/logo_js.png' },
    { name: 'TypeScript', imgUrl: '/assets/img/logo_ts.png' },
  ],
  [
    { name: 'React', imgUrl: '/assets/img/logo_react.png' },
    { name: 'React Router', imgUrl: '/assets/img/logo_router.png' },
    { name: 'React Hook Form', imgUrl: '/assets/img/logo_hookform.png' },
    { name: 'Next.js', imgUrl: '/assets/img/logo_next.png' },
  ],
  [
    { name: 'Axios', imgUrl: '/assets/img/logo_axios.png' },
    { name: 'React-Query', imgUrl: '/assets/img/logo_query.png' },
    { name: 'GraphQL', imgUrl: '/assets/img/logo_graphql.png' },
    { name: 'Apollo-Client', imgUrl: '/assets/img/logo_apollo.png' },
  ],
  [
    { name: 'Redux', imgUrl: '/assets/img/logo_redux.png' },
    { name: 'Recoil', imgUrl: '/assets/img/logo_recoil.png' },
    { name: 'Zustand', imgUrl: '/assets/img/logo_zustand.png' },
  ],
  [
    { name: 'Sass', imgUrl: '/assets/img/logo_sass.png' },
    { name: 'TailwindCSS', imgUrl: '/assets/img/logo_tail.png' },
    { name: 'styled-components', imgUrl: '/assets/img/logo_styled.png' },
  ],
  [
    { name: 'Three.js', imgUrl: '/assets/img/logo_three.png' },
    { name: 'Framer Motion', imgUrl: '/assets/img/logo_framer.png' },
    { name: 'GSAP', imgUrl: '/assets/img/logo_gsap.png' },
  ],
  [
    { name: 'Jest', imgUrl: '/assets/img/logo_jest.png' },
    { name: 'Storybook', imgUrl: '/assets/img/logo_story.png' },
  ],
  [
    { name: 'Webpack', imgUrl: '/assets/img/logo_webpack.png' },
    { name: 'Vite', imgUrl: '/assets/img/logo_vite.png' },
  ],
];

export const BACK_END_STACKS_INFO = [
  [
    { name: 'Node.js', imgUrl: '/assets/img/logo_node.png' },
    { name: 'Express.js', imgUrl: '/assets/img/logo_express.png' },
    { name: 'mongoDB', imgUrl: '/assets/img/logo_mongo.png' },
  ],
  [
    { name: 'AWS', imgUrl: '/assets/img/logo_aws.png' },
    { name: 'Google Cloud Platform', imgUrl: '/assets/img/logo_gcp.png' },
    { name: 'Vercel', imgUrl: '/assets/img/logo_vercel.png' },
  ],
];

export const DESIGN_STACKS_INFO = [
  [
    { name: 'Figma', imgUrl: '/assets/img/logo_figma.png' },
    { name: 'XD', imgUrl: '/assets/img/logo_xd.png' },
  ],
  [
    { name: 'Photoshop', imgUrl: '/assets/img/logo_photoshop.png' },
    { name: 'Illustrator', imgUrl: '/assets/img/logo_illustrator.png' },
    { name: 'Premiere Pro', imgUrl: '/assets/img/logo_premiere.png' },
    { name: 'After Effect', imgUrl: '/assets/img/logo_aftereffect.png' },
  ],
];

export const ICONS_URL = {
  'About Me': "bg-[url('/assets/icon/folder_lightpink.png')]",
  Hobby: "bg-[url('/assets/icon/heart_purple.png')]",
  Playlist: "bg-[url('/assets/icon/heart_pink.png')]",
  Projects: "bg-[url('/assets/icon/folder_pink.png')]",
  'Tech Stacks': "bg-[url('/assets/icon/folder_mint.png')]",
  Album: "bg-[url('/assets/icon/note_mint.png')]",
  Intro: "bg-[url('/assets/icon/note_mint.png')]",
  Contact: "bg-[url('/assets/icon/note_white.png')]",
  Activity: "bg-[url('/assets/icon/note_mint.png')]",
  Education: "bg-[url('/assets/icon/note_white.png')]",
  Interest: "bg-[url('/assets/icon/heart_purple.png')]",
  'Grow Story': "bg-[url('/assets/icon/paper_growstory.png')]",
  'My Pokedex': "bg-[url('/assets/icon/paper_pokedex.png')]",
  '33 1/3': "bg-[url('/assets/icon/paper_33.png')]",
  'Piece Plan': "bg-[url('/assets/icon/paper_pieceplan.png')]",
  'Improving BR Website': "bg-[url('/assets/icon/paper_br.png')]",
} as { [key: string]: string };
