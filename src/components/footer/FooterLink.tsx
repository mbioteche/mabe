import type { Entry } from "contentful";
import Image from "next/image";
import Link from "next/link";

import type {
	TypeFooterIconModelSkeleton,
	TypeFooterTextLinkModelSkeleton,
} from "../../@types/generated";

type FooterLinkType =
	| Entry<TypeFooterTextLinkModelSkeleton | TypeFooterIconModelSkeleton>
	| undefined;

type FooterLinkProps = {
	link: FooterLinkType;
};

function isTextLink(
	link: FooterLinkType,
): link is Entry<TypeFooterTextLinkModelSkeleton> {
	return link?.sys?.contentType?.sys?.id === "footerTextLinkModel";
}

function isIconLink(
	link: FooterLinkType,
): link is Entry<TypeFooterIconModelSkeleton> {
	return link?.sys?.contentType?.sys?.id === "footerIconModel";
}

// eslint-disable-next-line import/prefer-default-export
export async function FooterLink({ link }: FooterLinkProps) {
	if (link === undefined) {
		return null;
	}

	if (isTextLink(link)) {
		return (
			<Link href={link.fields.link ?? ""} className="mabe-h5sb text-[#00AB96]">
				{link.fields.label.toString()}
			</Link>
		);
	}

	if (isIconLink(link)) {
		const { icon } = link.fields;
		const iconFile = (icon as any)?.fields?.file?.url;

		return (
			<Link href={link.fields.link ?? ""} className="">
				<div className="size-[30px] p-[3px]">
					<Image
						src={iconFile ? `https:${iconFile}` : ""}
						className="size-[24px]"
						alt="Közösségi oldal ikon"
						width={24}
						height={24}
					/>
				</div>
			</Link>
		);
	}

	return null;
}
