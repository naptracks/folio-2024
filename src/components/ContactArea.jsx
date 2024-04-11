import React from "react"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "./ui/navigation-menu"
import { cn } from "../lib/utils"

export default function ContactArea(props) {

    return (
        <div {...props}>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className='text-[1rem] mr-[-1rem] text-cyan-800'>
                            Contact</NavigationMenuTrigger>
                        <NavigationMenuContent >
                            <NavigationMenuLink>

                                <ul className="flex flex-col  p-4 md:w-[300px] lg:w-[400px] ">
                                    <ListItem href="tel:+33666034403" title="Par téléphone">
                                        06 66 03 44 03
                                    </ListItem>
                                    <ListItem href="mailto:cesarmarteldev@gmail.com?subject=Premier Contact" title="Par email">
                                        cesarmarteldev@gmail.com  
                                    </ListItem>
                                    <ListItem target='_blank' href="https://www.linkedin.com/in/cesar-martel-250309157/" title="LinkedIn">
                                        César Martel
                                    </ListItem>
                                    <ListItem target='_blank' href="https://github.com/naptracks" title="GitHub">
                                        @naptracks
                                    </ListItem>
                                    {/* <ListItem href="" title="Malt">
                                        César Martel
                                    </ListItem> */}
                                    {/* <ListItem href="" title="Freelance Republik">
                                        César Martel
                                    </ListItem> */}
                                </ul>

                            </NavigationMenuLink>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}

const ListItem = React.forwardRef(({ className, title, children,target,  ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a target={target}
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 font-light rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-cyan-600/10 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm text-cyan-700 font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})


ListItem.displayName = "ListItem"