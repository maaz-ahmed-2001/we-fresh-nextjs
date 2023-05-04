import Image from 'next/image'

type SvgWrapperProps = {
    className: string
    src: string
    fill?: boolean
    alt?: string
}

const index = ({ className, src, fill=true, alt }: SvgWrapperProps) => {
    const splittedSrc = src && (src.split("/"))
    const generatedAlt = splittedSrc[splittedSrc.length - 1].split(".")[0]
    return (
        <div className={className} >
            <Image src={src}  fill={fill} alt={alt ? alt : generatedAlt} />
        </div>
    )
}

export default index;