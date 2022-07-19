import Image, { ImageProps } from "next/image";

const imageWithLoader = (props: ImageProps) => {
  const myLoader = ({ src, width, quality }: { src: string; width: number; quality: number; }): string => {
    return `${src}?w=${width}&q=${quality || 75}`
  }
  return (
    <Image
      loader={myLoader}
      alt=""
      {...props}
    />
  )
}

export default imageWithLoader;
