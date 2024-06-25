import {
    UserGroupIcon,
    HomeIcon,
    DocumentDuplicateIcon,
    MagnifyingGlassIcon,
    RectangleStackIcon,
    PlusIcon,
    ArrowRightIcon,
    Bars3Icon
  } from '@heroicons/react/24/outline';

  import PlayLists from './play-lists';

  const links = [
    {
        name: 'Your Library',
        href: '/dashboard',
        icon: RectangleStackIcon
    },
    
    {
        name: 'Search',
        href: '/dashboard/search',
        icon: MagnifyingGlassIcon,
      }
];

export default function YourLibrary(){
    return (
        <div className="flex flex-col">

        <div className="basis-1/4 pl-6 flex grow items-center justify-center  rounded-md   text-md font-medium  md:flex-none md:justify-start ">
        <div>
            <a className="flex h-[60px] w-[145px] gap-3 items-center "
                        key={links[0].name}
                        href={links[0].href}>
                        <RectangleStackIcon className="w-6"/>
                        <p className="hidden md:block">{links[0].name}</p>
                    </a>
        </div>
        <div className="basis-1/2 "></div>
            <button className="basis-1/8 rounded-full hover:bg-light-black size-10 h-[20px] w-[20px] ">
                <PlusIcon />
            </button>
            <button className="basis-1/8 rounded-full hover:bg-light-black h-[20px] w-[20px] ">
                <ArrowRightIcon />
            </button>
        </div>

        <div className="flex flex-row">
            <button className="basis-1/8  rounded-full hover:bg-light-black h-[20px] w-[20px] ">
                <MagnifyingGlassIcon />
            </button>
        <div className="basis-3/4 "></div>
        <div className="flex flex-row">
        
            <button className="basis-1/8 flex flex-row rounded-full text-sm hover:bg-light-black ">
                <p>Recents</p>
                <Bars3Icon className="w-5" />
            </button>
        </div>

        </div>

        <div>
            <PlayLists />
        </div>

        </div>
    )
}