'use client';

import useWindowStore from '@/stores/windowStore';

import AboutMe from '@/components/Folder/AboutMe';
import Projects from '@/components/Folder/Projects';
import TechStacks from '@/components/Folder/TechStacks';
import Album from '@/components/Folder/Album';
import Email from '@/components/Page/Email';
import Intro from '@/components/Page/AboutMe/Intro';
import Contact from '@/components/Page/AboutMe/Contact';
import Activity from '@/components/Page/AboutMe/Activity';
import Education from '@/components/Page/AboutMe/Education';
import Experience from './Page/AboutMe/Experience';
import Interest from '@/components/Page/AboutMe/Interest';
import FrontEnd from '@/components/Page/TechStacks/FrontEnd';
import BackEnd from '@/components/Page/TechStacks/BackEnd';
import Design from '@/components/Page/TechStacks/Design';
import GrowStory from '@/components/Page/Projects/GrowStory';
import MyPokedex from '@/components/Page/Projects/MyPokedex';
import Vinyl from '@/components/Page/Projects/Vinyl';
import PiecePlan from '@/components/Page/Projects/PiecePlan';
import BaskinRobbins from '@/components/Page/Projects/BaskinRobbins';
import France1 from '@/components/Page/Album/France1';
import France2 from '@/components/Page/Album/France2';
import Austria1 from '@/components/Page/Album/Austria1';
import Austria2 from '@/components/Page/Album/Austria2';
import Croatia1 from '@/components/Page/Album/Croatia1';
import Croatia2 from '@/components/Page/Album/Croatia2';
import Portugal1 from '@/components/Page/Album/Portugal1';
import Portugal2 from '@/components/Page/Album/Portugal2';
import Switzerland1 from '@/components/Page/Album/Switzerland1';
import Switzerland2 from '@/components/Page/Album/Switzerland2';
import Hobby from '@/components/Page/Hobby';
import Playlist from '@/components/Page/Playlist';

export default function Windows() {
  const window = useWindowStore((state) => state);

  return (
    <>
      {window['About Me'].isOpen && <AboutMe />}
      {window['Projects'].isOpen && <Projects />}
      {window['Tech Stacks'].isOpen && <TechStacks />}
      {window['Hobby'].isOpen && <Hobby />}
      {window['Playlist'].isOpen && <Playlist />}
      {window['Album'].isOpen && <Album />}

      {window['Intro'].isOpen && <Intro />}
      {window['Contact'].isOpen && <Contact />}
      {window['Activity'].isOpen && <Activity />}
      {window['Education'].isOpen && <Education />}
      {window['Experience'].isOpen && <Experience />}
      {window['Interest'].isOpen && <Interest />}

      {window['Grow Story'].isOpen && <GrowStory />}
      {window['My Pokedex'].isOpen && <MyPokedex />}
      {window['33 1/3'].isOpen && <Vinyl />}
      {window['Piece Plan'].isOpen && <PiecePlan />}
      {window['Improving BR Website'].isOpen && <BaskinRobbins />}

      {window['Front-End'].isOpen && <FrontEnd />}
      {window['Back-End'].isOpen && <BackEnd />}
      {window['Design'].isOpen && <Design />}

      {window['France_1'].isOpen && <France1 />}
      {window['France_2'].isOpen && <France2 />}
      {window['Austria_1'].isOpen && <Austria1 />}
      {window['Austria_2'].isOpen && <Austria2 />}
      {window['Croatia_1'].isOpen && <Croatia1 />}
      {window['Croatia_2'].isOpen && <Croatia2 />}
      {window['Portugal_1'].isOpen && <Portugal1 />}
      {window['Portugal_2'].isOpen && <Portugal2 />}
      {window['Switzerland_1'].isOpen && <Switzerland1 />}
      {window['Switzerland_2'].isOpen && <Switzerland2 />}

      {window['Email'].isOpen && <Email />}
    </>
  );
}
