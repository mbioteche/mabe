import Link from "next/link";
import { HiChevronLeft } from "react-icons/hi";

export function BackButton({ href }: { href: string }) {
	return (
		<Link
			href={href}
			className="flex items-center self-start rounded-full border-2 border-[#00AB96] pr-2 text-[#00AB96] hover:bg-[#00AB96] hover:text-white"
		>
			<HiChevronLeft className="h-6 w-6" />
			<span className="ml-0.5 text-sm font-bold capitalize">vissza</span>
		</Link>
	);
}
