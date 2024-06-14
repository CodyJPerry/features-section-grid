import {
  RiDownload2Line,
  RiBrush2Line,
  RiCopyrightLine,
  RiRefund2Fill,
  RiTeamLine,
  RiRefreshLine,
} from 'react-icons/ri';

const features = [
  {
    id: 1,
    icon: <RiDownload2Line className='h-6 w-6 text-indigo-700' />,
    title: 'Infinite Download',
    description: `Once you subscribe to our plans, they're all yours. Download as many as you want and use them for work presentations, wallpapers, and much more.`,
  },
  {
    id: 2,
    icon: <RiBrush2Line className='h-6 w-6 text-indigo-700' />,
    title: 'Purely Handcrafted',
    description: `No AI, no generic images. Crafted from various chemicals, fabrics, clouds, or even particles as small as dust.`,
  },
  {
    id: 3,
    icon: <RiCopyrightLine className='h-6 w-6 text-indigo-700' />,
    title: 'All Are Under licensed',
    description: `The only limitation with these abstract images is that you are not able to sell them in any form, whether digital or hard copy (such as paintings or prints on paper).`,
  },
  {
    id: 4,
    icon: <RiRefund2Fill className='h-6 w-6 text-indigo-700' />,
    title: 'Cancel Anytime',
    description: `Subscribe at your own pace, and cancel when you feel it's enough.`,
  },
  {
    id: 5,
    icon: <RiTeamLine className='h-6 w-6 text-indigo-700' />,
    title: 'Feature 5',
    description: `We support multiple seats at once, requiring only a single payment.`,
  },
  {
    id: 6,
    icon: <RiRefreshLine className='h-6 w-6 text-indigo-700' />,
    title: 'No Limitations',
    description: `Use as many as you want, from Dribbble presentations to PowerPoint presentations.`,
  },
];

export default features;
