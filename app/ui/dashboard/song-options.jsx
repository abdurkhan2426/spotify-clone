import { ArrowsRightLeftIcon, BackwardIcon, PlayCircleIcon, ForwardIcon, ArrowPathIcon } from "@heroicons/react/24/solid"

export default function SongOptions(){
    return (

        <div className="flex flex-col ">
            <div className="flex flex-row place-content-center py-1">
                {/* options */}
                <div className="place-content-center px-3 light-grey">
                    {/* mix */}
                    <ArrowsRightLeftIcon  className="w-5" />
                </div>
                <div className="place-content-center px-3">
                    {/* privious */}
                    <BackwardIcon className="w-8" />
                </div>
                <div className="place-content-center px-3">
                    {/* play/pause */}
                    <PlayCircleIcon className="w-10" />
                </div>
                <div className="place-content-center px-3">
                    {/* next */}
                    <ForwardIcon className="w-8" />
                </div>
                <div className="place-content-center px-3 ">
                    {/* repeat */}
                    <ArrowPathIcon className="w-5" />
                </div>
                
            </div>


            <div className="text-xs flex flex-row place-content-center">
                <div className="px-1">
                    <p>0:00</p>
                </div>

                


                <div className="accent-slate-50  hover:accent-green-600 w-[550px] h-[4px] ">
                <input id="typeinp" class="w-full h-full" type="range" min="0" max="100" defaultValue="3" step="1"/>

                </div>

                <div className="px-1">
                <p>4:00</p>
                </div>

            </div>

        </div>
    )
}