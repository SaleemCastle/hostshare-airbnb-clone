import { AiOutlineRight } from "react-icons/ai";

interface IProps {
    className?: string
}

const RightArrow = (props: IProps) => {
    const { className } = props
    return ( 
        <div className={`w-8 h-8 border rounded-full flex items-center justify-center mr-3 bg-white ${className ? className : ''}`}>
            <AiOutlineRight className='text-xs'/>
        </div>
     );
}
 
export default RightArrow;