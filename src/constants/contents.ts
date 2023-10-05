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

export const ALBUM_CONTENTS = [
  'Austria_1',
  'Austria_2',
  'Croatia_1',
  'Croatia_2',
  'France_1',
  'France_2',
  'Portugal_1',
  'Portugal_2',
  'Switzerland_1',
  'Switzerland_2',
];

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

export const GROW_STORY_INFO = {
  date: '2023.08.24 ~ 2023.09.19',
  logoUrl: '/assets/img/intro_growstory.png',
  stacks: [
    'Next.js',
    'TypeScript',
    'React-Query',
    'Zustand',
    'React Hook Form',
    'TailwindCSS',
    'Framer Motion',
  ],
  features: [
    '로그인, 회원가입 기능',
    '정원 기능',
    '식물 카드 기능',
    '커뮤니티 기능',
    '정보 수정 및 조회 기능',
  ],
  roles: [
    'FE 팀장으로서 일정 및 업무 조율, 칸반 보드 관리',
    'Git 관련 컨벤션, FE 코딩 컨벤션 제안 및 적용',
    '기획 전반 참여',
    'Figma를 활용한 디자인 시스템, 프로토타입 제작',
    'Atomic Design을 적용한 bottom-up 방식의 컴포넌트, 페이지 구현',
    '정원 페이지 및 관련 기능 전담하여 개발',
    '게시글 등록, 수정, 삭제 기능 전담하여 개발',
    'React-Query로 서버 상태 관리, 로딩 및 에러 처리',
    'Zustand로 클라이언트 상태 관리',
    'TypeScript로 에러 상황을 미연에 방지, 수월한 디버깅 가능',
    'TailwindCSS로 Utility-First 방식의 스타일링',
    'Framer Motion으로 페이지 전반의 애니메이션 구현',
    '반응형 디자인 구현',
    'Vercel을 이용한 배포',
    'README.md 작성',
  ],
  imgs: [
    {
      name: '로그인 페이지',
      url: '/assets/img/growstory_signin.gif',
    },
    {
      name: '정원 페이지',
      url: '/assets/img/growstory_garden.gif',
    },
    {
      name: '식물 카드 페이지',
      url: '/assets/img/growstory_plant.gif',
    },
    {
      name: '커뮤니티 페이지',
      url: '/assets/img/growstory_post.gif',
    },
  ],
};

export const MY_POKEDEX_INFO = {
  date: '2023.08.01 ~ 진행 중',
  logoUrl: '/assets/img/intro_pokedex.png',
  stacks: [
    'Next.js',
    'TypeScript',
    'GraphQL',
    'Apollo-Client',
    'Zustand',
    'TailwindCSS',
    'Framer Motion',
  ],
  features: [
    'PokeAPI를 이용한 포켓몬 검색 기능',
    'PokeAPI를 이용한 포켓몬 상세 정보 조회 기능',
    '포켓몬 타입별 상성 정보 조회 기능',
  ],
  roles: [
    '일정 및 업무, 칸반 보드 관리',
    'Git 관련 컨벤션, FE 코딩 컨벤션 적용',
    '기획 전반 참여',
    'Figma를 활용한 디자인 시스템, 프로토타입 제작',
    'Atomic Design을 적용한 bottom-up 방식의 컴포넌트, 페이지 구현',
    '포켓몬 검색 시 무한 스크롤 방식으로 페이지네이션 구현',
    'Apollo-Client로 서버 상태 관리, 로딩 및 에러 처리',
    'Zustand로 클라이언트 상태 관리',
    'TypeScript로 에러 상황을 미연에 방지, 수월한 디버깅 가능',
    'TailwindCSS로 Utility-First 방식의 스타일링',
    'Framer Motion으로 페이지 전반의 애니메이션 구현',
    '반응형 디자인 구현',
    'Vercel을 이용한 배포',
  ],
  imgs: [
    {
      name: '메인 페이지',
      url: '/assets/img/pokedex_main.png',
    },
    {
      name: '포켓몬 검색 결과 페이지',
      url: '/assets/img/pokedex_list.gif',
    },
    {
      name: '포켓몬 상세 정보 페이지',
      url: '/assets/img/pokedex_detail.gif',
    },
    {
      name: '포켓몬 타입별 상성 페이지',
      url: '/assets/img/pokedex_compatibility.gif',
    },
  ],
};

export const VINYL_INFO = {
  date: '2022.11.28 ~ 2022.12.23',
  logoUrl: '/assets/img/intro_vinyl.png',
  stacks: [
    'React',
    'React Router',
    'TypeScript',
    'Recoil',
    'styled-components',
    'Framer Motion',
    'Storybook',
    'Vite',
    'Node.js',
    'Express.js',
    'mongoDB',
  ],
  features: [
    '로그인, 회원가입 기능',
    'discogs API를 활용한 LP 검색 기능',
    'discogs API를 활용한 LP 상세 정보 조회 기능',
    'LP 콜렉션 생성 및 공유 기능',
  ],
  roles: [
    'Git 관련 컨벤션, FE 코딩 컨벤션 적용',
    '기획 전반 참여',
    'Figma를 활용한 디자인 시스템, 프로토타입 제작',
    'Atomic Design을 적용한 bottom-up 방식의 컴포넌트, 페이지 구현',
    'JWT로 인증, 인가 구현',
    'LP 검색 시 무한 스크롤 방식으로 페이지네이션 구현',
    'Recoil을 사용하여 클라이언트 상태 관리',
    'TypeScript로 에러 상황을 미연에 방지, 수월한 디버깅 가능',
    'styled-components로 css-in-js 방식의 스타일링',
    'Framer Motion으로 페이지 전반의 애니메이션 구현',
    '반응형 디자인 구현',
    'Storybook으로 컴포넌트 기반 테스트, 문서화',
    'Webpack 대신 Vite를 도입하여 빠른 번들링',
  ],
  imgs: [
    {
      name: '메인 페이지',
      url: '/assets/img/33.3_main.png',
    },
    {
      name: 'LP 검색 결과 페이지',
      url: '/assets/img/33.3_result.png',
    },
    {
      name: '콜렉션 추가 모달 페이지',
      url: '/assets/img/33.3_modal.png',
    },
    {
      name: '콜렉션 페이지',
      url: '/assets/img/33.3_collection.png',
    },
  ],
};

export const PIECE_PLAN_INFO = {
  date: '2022.10.09 ~ 2022.10.21',
  logoUrl: '/assets/img/intro_pieceplan.png',
  stacks: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js'],
  features: [
    '로그인, 회원가입 기능',
    '전체 일정 조회 기능',
    '일별 일정 조회 기능',
    '피스 등록, 삭제 기능',
    '피스 검색, 필터 기능',
    '피스 즐겨찾기, 비공개 기능',
  ],
  roles: [
    '기획 전반 참여',
    'Figma를 활용한 프로토타입 제작',
    'Vanilla JS로 CBD-SPA Library의 Diffing 알고리즘을 유사하게 구현 및 프로젝트에 적용',
    'JWT로 인증, 인가 구현',
    'pjax 방식으로 Routing 구현',
    'GCP를 이용한 배포',
  ],
  imgs: [
    {
      name: '회원 가입 페이지',
      url: '/assets/img/pieceplan_signup.gif',
    },
    {
      name: '전체 캘린더 페이지',
      url: '/assets/img/pieceplan_calendar.gif',
    },
    {
      name: '피스 추가 및 삭제 페이지',
      url: '/assets/img/pieceplan_add.gif',
    },
    {
      name: '피스 검색 및 필터 페이지',
      url: '/assets/img/pieceplan_search.gif',
    },
  ],
};

export const BR_INFO = {
  date: '2022.07.30 ~ 2022.08.05',
  logoUrl: '/assets/img/intro_br.png',
  stacks: ['HTML', 'CSS', 'JavaScript'],
  features: [
    '접근성을 고려하여 UI를 개선한 메인 페이지',
    '아이스크림 상세 페이지의 반응형 디자인',
  ],
  roles: [
    '기획 전반 참여',
    'Figma를 활용한 프로토타입 제작',
    '웹 접근성을 준수한 마크업 구현',
    'Image Sprite 방식을 사용하여 이미지 렌더링 속도 개선',
    'Google Lighthouse로 Web Vital 지표 측정 및 개선',
    'GitHub Pages를 이용한 배포',
  ],
  imgs: [
    {
      name: '메인 페이지',
      url: '/assets/img/baskin_main.png',
    },
    {
      name: 'UI & UX 개선',
      url: '/assets/img/baskin_ui.png',
    },
    {
      name: '상세 페이지',
      url: '/assets/img/baskin_detail.png',
    },
    {
      name: '반응형 디자인',
      url: '/assets/img/baskin_responsive.png',
    },
  ],
};
