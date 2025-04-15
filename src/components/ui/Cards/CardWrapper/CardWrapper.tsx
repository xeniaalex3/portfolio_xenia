import Image from 'next/image';
import { CardWrapperProps } from '@/@types/wrapper';

function CardWrapper({imageSrc, text, width, height, className}: CardWrapperProps){
  return(
    <div className='rounded-lg flex flex-col justify-center items-center gap-3 w-[7rem] p-3 bg-[var(--surface-secondary)] shadow-lg cursor-pointer border border-transparent hover:border-[var(--secondary-color)]'>
      <Image src={imageSrc as string} alt={text as string} width={width} height={height} className={className}/>
      <p className='text-sm font-normal text-[var(--text-base)] text-center'>{text}</p>
    </div>
  )
}

export default CardWrapper;