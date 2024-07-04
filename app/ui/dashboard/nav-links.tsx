
import {
    UserGroupIcon,
    HomeIcon,
    DocumentDuplicateIcon,
    MagnifyingGlassIcon,
  } from '@heroicons/react/24/solid';

const links = [
    {
        name: 'Home',
        href: '/dashboard',
        icon: HomeIcon
    },
    {
        name: 'Search',
        href: '/dashboard/search',
        icon: MagnifyingGlassIcon,
      }
    /*,
    {
        name: '',
        href: '',
        //icon: 
    }*/
];


export default function NavLinks() {
    return (
        <>
            {links.map((link) => {
                const LinkIcon = link.icon;
                return (
                    <a className="flex h-[50px]  w-[430px] grow items-center  gap-5 rounded-md   text-md font-medium  flex-none justify-start "
                        key={link.name}
                        href={link.href}>
                        
                        <LinkIcon className="w-6"/>
                        <p className="block">{link.name}</p>
                    </a>
                )
            })}
        </>
    )
}