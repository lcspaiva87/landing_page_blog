import logo from "../../../public/logo/Brand-Logo.png";
export default function Footer() {
  const links = [
    {
      name: "Termos de Uso",
      href: "/terms",
    },
    {
      name: "Politica de Privacidade",
      href: "/privacy",
    },
    {
      name: "Enviar feedback",
      href: "/feedback",
    },
  ]
  return (
    <div className="bg-gray-500 w-full flex  px-52 items-center justify-between">
      <img src={logo.src} alt="logo" width={100} height={100} />
      <div className="flex flex-col md:flex-row items-center gap-8">
        {links.map((link) => (
          <a href={link.href} key={link.name} className="text-blue-100">{link.name}</a>
        ))}
      </div>
    </div>
  )
}