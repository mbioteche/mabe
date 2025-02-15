import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

type HeaderLinkProps = {
	text: string;
	href: string;
};

// eslint-disable-next-line import/prefer-default-export
export function HeaderLink({ text, href }: HeaderLinkProps) {
	const pathname = usePathname();

	return (
		<li className="mt-[1px]">
			<Link
				href={href}
				className={clsx(
					"inline-block w-full font-bold hover:text-[#00AB96] text-[18px] leading-[24px]",
					pathname === href ? "text-[#00AB96]" : "text-[#222222]",
				)}
			>
				{text}
			</Link>
		</li>
	);
}
