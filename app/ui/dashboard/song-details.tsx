import Image from 'next/image';
import { PlusCircleIcon } from '@heroicons/react/24/outline';


export default function SongDetails(){
    return(
        <div className="flex flex-row">
            
            <div className="pl-3 py-1 ">
            <Image
                src="/lala.jpeg"
                width={60}
                height={60}
                className="block"
                alt="."
            />
            </div>

            <div className=" flex pl-3 flex-col place-content-center">
                {/* name, author name */}
                <div className="text-sm">
                    <p>Rahmatun Lil'Alameen</p>
                </div>

                <div className="text-xs">
                    <p>Maher Zain</p>
                </div>


            </div>
            <div className="place-content-center ">
                <PlusCircleIcon className="h-5 pl-3 " />
            </div>
        </div>
    )
}