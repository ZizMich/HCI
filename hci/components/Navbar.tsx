import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export const title = "Simple Navigation";

const menuItems = [
  {
    type: "link" as const,
    label: "Activity 1",
    href: "/activities/1",
    trigger: "Products",
  },
  {
    type: "link" as const,
    trigger: "Solutions",
    label: "Activity 2",
    href: "/activities/2",
  },
  {
    type: "link" as const,
    label: "Activity 3",
    href: "/activities/3",
  },
  {
    type: "link" as const,
    label: "Activity 4",
    href: "/activities/4",
  },
  {
    type: "link" as const,
    label: "Activity 5",
    href: "/activities/5",
  },
  {
    type: "link" as const,
    label: "Activity 6",
    href: "/activities/6",
  },
];

const Navigation = () => (
  <div
    style={{ justifyItems: "center" }}
    className="rounded-md border bg-background p-px"
  >
    <NavigationMenu>
      <NavigationMenuList>
        {menuItems.map((item, index) => (
          <NavigationMenuItem key={index}>
            <NavigationMenuLink href={item.href}>
              {item.label}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  </div>
);

export default Navigation;
