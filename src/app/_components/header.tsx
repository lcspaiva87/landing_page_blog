import { Button } from "@/components/ui/button";
import logo from "../../../public/logo/Brand-Logo.png";
export function Header() {
  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Home",
      href: "/",
      isActive: true,
    },
    {
      name: "Home",
      href: "/",
    },
  ]
  return (
    <header className=" border-b border-gray-300 px-52 flex items-center justify-between h-24" >
      <img src={logo.src} alt="logo" width={100} height={100} />
      <div className="flex items-center gap-4">
        {links.map((link) => (
          <Button variant="ghost" key={link.name} className={`${link.isActive ? "text-blue-100" : "text-gray-100"}`}>{link.name}</Button>
        ))}
      </div>
    </header>
  )
}