import { AiOutlineUp } from "react-icons/ai";
import { TbWorld } from "react-icons/tb";

const Footer = () => {
    return ( 
        <div className="px-20 py-3 flex flex-row justify-between items-end border-t fixed bottom-0 bg-white w-full max-sm:hidden">
            <div className="flex flex-row items-end">
                <span className="text-sm">&copy; 2023 Hostshare</span>
                <p className="flex p-1 items-center justify-center text-sm">.</p>
                <span className="text-sm">Terms</span>
                <p className="flex p-1 items-center justify-center text-sm">.</p>
                <span className="text-sm">Sitemap</span>
                <p className="flex p-1 items-center justify-center text-sm">.</p>
                <span className="text-sm">Privacy</span>
                <p className="flex p-1 items-center justify-center text-sm">.</p>
                <span className="text-sm">Your Privacy Choices</span>
                <p className="flex p-1 items-center justify-center text-sm">.</p>
                <span className="text-sm">Destinations</span>
            </div>

            <div className="flex flex-row justify-between items-end">
                <span className='rounded-full cursor-pointer flex flex-row place-items-center pr-2'>
                    <TbWorld className="text-lg" />
                    <p className="pl-1 hover:underline underline-offset-1">{'English (US)'}</p> 
                </span>
                <span className="px-3 hover:underline underline-offset-1 cursor-pointer">USD</span>
                
                <div className="flex flex-row items-end cursor-pointer">

                    <span className="hover:underline underline-offset-1">Support & resources</span>
                    <span className="mb-[2px] pl-1"><AiOutlineUp /></span>
                </div>

            </div>
        </div>
    );
}
 
export default Footer