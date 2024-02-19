interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'ReImage',
    description: `Like Audacity, but for complex samples. A fast RF IQ 
    waveform/spectrum viewer that handles over 100M samples without frame-rate issues.`,
    // imgSrc: '/static/images/google.png',
    href: 'https://github.com/icyveins7/reimage'
  },
  {
    title: 'pydsproutines',
    description: 'Python, Cython, pybinds and custom CUDA kernels for DSP. A collection I have grown over the years.',
    href: 'https://github.com/icyveins7/pydsproutines'
  },
  {
    title: 'ipp_ext',
    description: 'C++ templates for Intel Performance Primitives (IPP).',
    href: 'https://github.com/icyveins7/ipp_ext'
  }
  // {
  //   title: 'The Time Machine',
  //   description: `Imagine being able to travel back in time or to the future. Simple turn the knob
  //   to the desired date and press "Go". No more worrying about lost keys or
  //   forgotten headphones with this simple yet affordable solution.`,
  //   imgSrc: '/static/images/time-machine.jpg',
  //   href: '/blog/the-time-machine',
  // },
]

export default projectsData
