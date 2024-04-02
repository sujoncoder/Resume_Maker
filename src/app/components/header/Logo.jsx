import Image from "next/image";
import Link from "next/link";
import logo from "/public/logo.png";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src={logo}
        alt="logo image"
        width={200}
        height={200}
        className="md:w-40 w-24"
      />
    </Link>
  );
};

export default Logo;
