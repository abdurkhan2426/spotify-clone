import YourLibrary from "./your-library";
import NavLinks from '@/app/ui/dashboard/nav-links';

export default function SideNav() {
    return (
        <>
        <div className="flex py-4 pl-6 bg-black h-[120px] rounded-lg m-1.5 w-[420px]  grow flex-row space-x-2 md:flex-col md:space-x-0 md:space-y-2">
            <NavLinks />
        </div>
        <div className="h-[710px] rounded-lg m-1.5 w-[420px] bg-black">
            <YourLibrary />
        </div>
        </>
    )
}
