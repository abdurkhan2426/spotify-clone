import SideNav from '@/app/ui/dashboard/sidenav';
import Explore from '@/app/ui/dashboard/explore';
import Options from '@/app/ui/dashboard/options';

export default function Layout() {
    return (
        <div className="flex flex-col flex-1">

            

            <div className="grow">
                <div className="flex grow">
                    <div className="  flex-none  md:overflow-hidden">
                        <div className="w-full flex-none" >      
                        <SideNav />
                        </div>
                        {/* child div here */}
                    </div>
                    <div className="flex-1   ">
                        <Explore />
                    </div>
                </div>
            </div>

            <div className="flex-none">
                <Options />
            </div>

        </div>
        
    )
}