'use client'
import { Button } from "@/components/ui/button";
import logo from "../../../public/logo/Brand-Logo.png";
import { usePathname } from "next/navigation";
import { tv } from "tailwind-variants";
export function Header() {
  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Blog",
      href: "/blog",
      isActive: true,
    },
    {
      name: "Começar",
      href: "/start",
    },
  ]

  const pathname = usePathname();
  const isActive = tv({
    base: "text-gray-100",
    variants: {
      isActive: {
        true: "text-blue-100",
      },
    },
  });
  return (
    <header className=" border-b border-gray-300 px-52 flex items-center justify-between h-24 " >
      <img src={logo.src} alt="logo" width={100} height={100} />
      <div className="flex items-center gap-4">
        {links.map((link) => (
          <Button variant="ghost" key={link.name} className={
            isActive({ isActive: pathname === link.href })
          }>{link.name}</Button>
        ))}
      </div>
    </header>
  )
}