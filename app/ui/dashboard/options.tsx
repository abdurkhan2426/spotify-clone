import SongDetails from "./song-details"
import SongOptions from "./song-options"
import SideOptions from "./side-options"
import  { fetchCurrentSongDetails } from '@/app/lib/data';


export default async function Options(){
    const songs = await fetchCurrentSongDetails();

    return(
        <div className="flex  flex-row h-[70px] overflow-hidden  rounded-lg m-1.5">
            <div className=" flex-none">
                <SongDetails songs={songs} />
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