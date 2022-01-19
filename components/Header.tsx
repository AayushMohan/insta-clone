import Image from "next/image"

const Header = () => {
 return (
  <div>
   <div className="flex justify-between max-w-6xl">
   {/* Left */}
   <div className="relative hidden lg:inline-grid h-24 w-24">
    <Image src="https://links.papareact.com/ocw" layout="fill" objectFit="contain"/>
   </div>

   

   {/* Middle */}

   {/* Right */}

   </div>

  </div>
 )
}

export default Header
