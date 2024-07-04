import YourLibrary from "./your-library";
import NavLinks from '@/app/ui/dashboard/nav-links';

export default function SideNav() {
    return (
        <div className="flex flex-col flex-none">
        <div className=" py-4 pl-6 bg-black h-[120px] rounded-lg ml-1.5 mt-2 w-[420px]  grow  ">
            <NavLinks />
        </div>
        <div className="h-[710px] rounded-lg m-1.5 w-[420px] bg-black">
            <YourLibrary />
        </div>
        </div>
    )
}
