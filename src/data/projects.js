// Featured Projects Data
import somethingFeelsDifferentImg from '../images/Something Feels Different.png';
import solarSystemImg from '../images/Interactive Animation Solar System.png';
import planetAnimationsImg from '../images/Interactive Planet Animations.png';

export const featuredProjects = [
  // Project entries...
  {
    id: 'something-feels-different',
    title: 'Something Feels Different...',
    description: 'A narrative-driven interactive game built in Godot Engine with custom pixel art graphics, exploring themes of memory and emotional presence through thoughtful gameplay mechanics.',
    image: somethingFeelsDifferentImg,
    tags: ['Game Development', 'Narrative Design', 'Godot Engine'],
    links: [
      { 
        type: 'itch', 
        url: 'https://falling-fetch.itch.io/something-feels-different', 
        label: 'Itch.io' 
      },
      { 
        type: 'external', 
        url: 'https://html-classic.itch.zone/html/14711993-1358688/index.html', 
        label: 'Play Demo',
        desktopOnly: true
      }
    ]
  },
  {
    id: 'reclaiming-the-night-sky',
    title: 'Reclaiming the Night Sky: Beyond City Lights',
    description: 'An interactive animation about space and the effects of light pollution using JavaScript and Adobe Animate, with custom Illustrator-designed assets that and a complete interactive solar system.',
    image: ReclaimingtheNightSkyImg,
    tags: ['Adobe Animate', 'JavaScript', 'Interactive Design'],
    links: [
      { 
        type: 'github', 
        url: 'https://github.com/FallingFetch/reclaiming-the-night-sky', 
        label: 'GitHub' 
      },
      { 
        type: 'external', 
        url: 'https://fallingfetch.github.io/reclaiming-the-night-sky/', 
        label: 'Live Demo' 
      }
    ]
  },
  {
    id: 'planet-animations',
    title: 'Interactive Planet Animations',
    description: 'An interactive technical demonstration integrating After Effects motion graphics with JavaScript through Lottie, featuring hand-crafted Illustrator artwork in reversible planetary animations triggered by click interactions.',
    image: planetAnimationsImg,
    tags: ['Adobe After Effects', 'Lottie', 'JavaScript'],
    links: [
      { 
        type: 'github', 
        url: 'https://github.com/FallingFetch/interactive-planet-animations-GDI3100.1', 
        label: 'GitHub' 
      },
      { 
        type: 'external', 
        url: 'https://fallingfetch.github.io/interactive-planet-animations-GDI3100.1/', 
        label: 'Live Demo' 
      }
    ]
  }
];