import { PlayIcon, MicrophoneIcon, ComputerDesktopIcon, QueueListIcon, ArrowsUpDownIcon, TvIcon, SpeakerWaveIcon } from "@heroicons/react/24/solid"



export default function SideOptions(){
    return (
            <div className="flex flex-row place-content-center h-full  ">

                <div className=" w-[60px] ">

                </div>

                {/* options */}
                <div className="px-2  content-center  flex-none ">
                    {/* play/pause */}
                    <PlayIcon className="w-4" />
                </div>
                <div className="px-2  content-center flex-none">
                    {/* mic */}
                    <MicrophoneIcon  className="w-4" />
                </div>
                <div className="px-2 content-center flex-none">
                    {/* queue */}
                    <QueueListIcon  className="w-4" />
                </div>
                <div className=" px-2 content-center flex-none">
                    {/* connect to device */}
                    <ComputerDesktopIcon className="w-4" />
                </div>
                
                <div className="px-2 content-center flex-none">
                    {/* volume */}
                    <SpeakerWaveIcon className="w-4" />

                </div>

                
                <div className="accent-slate-50 py-5 hover:accent-green-600 w-[100px] h-[50px] ">
                    {/* slider */}
                    <input id="typeinp" class="w-full h-full" type="range" min="0" max="100" defaultValue="3" step=""/>
                </div>

                <div className=" px-2 content-center flex-none">
                    {/* miniplayer */}
                    <TvIcon className="w-4" />
                </div>

                <div className=" px-2 content-center flex-none">
                    {/* full screen */}
                    <ArrowsUpDownIcon className="w-4" />
                </div>
                
            </div>
    )
}