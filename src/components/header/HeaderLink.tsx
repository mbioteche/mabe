import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

type HeaderLinkProps = {
	text: string;
	href: string;
	onClick?: React.MouseEventHandler<HTMLElement>;
};

// eslint-disable-next-line import/prefer-default-export
export function HeaderLink({ text, href, onClick }: HeaderLinkProps) {
	const pathname = usePathname();

	return (
		<li className="mt-[1px]">
			<Link
				href={href}
				className={clsx(
					"inline-block w-full text-[18px] font-bold leading-[24px] hover:text-[#00AB96]",
					pathname === href ? "text-[#00AB96]" : "text-[#222222]",
				)}
				onClick={onClick}
			>
				{text}
			</Link>
		</li>
	);
}
