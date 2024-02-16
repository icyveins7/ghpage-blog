import NextImage, { ImageProps } from 'next/image'

// const Image = ({ ...rest }: ImageProps) => <NextImage {...rest} />

// const Image = ({ src, ...rest }: ImageProps) => <NextImage src={`/tailwind-nextjs-starter-blog${src}`} {...rest} />
const Image = ({ src, ...rest }: ImageProps) => <NextImage src={`/ghpage-blog${src}`} {...rest} />

export default Image
