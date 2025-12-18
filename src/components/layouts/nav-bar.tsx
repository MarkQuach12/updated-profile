import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { Sun, Moon, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Me" },
  { to: "/blog", label: "Blog" },
  { to: "/projects", label: "Projects" },
];

export const NavBar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = mounted ? theme : "light";

  const ThemeToggle = () => (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(currentTheme === "light" ? "dark" : "light")}
      className="cursor-pointer"
    >
      {currentTheme === "light" ? <Moon /> : <Sun />}
    </Button>
  );

  return (
    <nav className="w-full mb-4">
      <NavigationMenu className="flex justify-between items-center w-full max-w-full">
        <NavigationMenuList className="hidden md:flex justify-center items-center">
          {navLinks.map((link) => (
            <NavigationMenuItem key={link.to}>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link to={link.to}>{link.label}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>

        <div className="flex items-center gap-2 md:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64">
              <SheetHeader>
                <SheetTitle>Navigation</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 ml-4 mt-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-medium hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          <ThemeToggle />
        </div>

        {/* Theme Toggle - Desktop */}
        <NavigationMenuList className="ml-auto hidden md:flex">
          <NavigationMenuItem>
            <ThemeToggle />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};
