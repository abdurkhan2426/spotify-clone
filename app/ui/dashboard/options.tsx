import SongDetails from "./song-details"
import SongOptions from "./song-options"
import SideOptions from "./side-options"

export default function Options(){
    return(
        <div className="flex  flex-row h-[70px] overflow-hidden  rounded-lg m-1.5">
            <div className=" flex-none">
                <SongDetails />
            </div>

            <div className="flex-none w-[1000px]">
                <SongOptions />
            </div>

            <div className=" grow">
            <SideOptions />
            </div>

        </div>
    )
}