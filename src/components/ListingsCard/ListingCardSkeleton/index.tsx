
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const CardSkeleton = () => {
  return (
    <div className='max-w-sm flex flex-col group z-0'>
      <Skeleton width={ '100%' } height={ 300 } containerClassName="flex-1 rounded-2xl" style={{borderRadius: 25}}/>
      <Skeleton width={'100%'} className='my-3'/>
      <Skeleton width={'20%'}/>
      <Skeleton width={'20%'}/>
      <Skeleton width={'50%'}/>
    </div>
  )
}

export default CardSkeleton
