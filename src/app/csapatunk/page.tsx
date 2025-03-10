import type { Metadata } from "next";

import { MemberCard } from "@/components/members/MemberCard";
import { getMembers } from "@/utils/contentful";

export const metadata: Metadata = {
	title: "Csapatunk | Magyar Biotechnológus-hallgatók Egyesülete",
};

export default async function MembersPage() {
	const members = await getMembers();
	return (
		<>
			<h1 className="mb-12 font-ss3 text-5xl">Csapatunk</h1>
			<section className="grid grid-cols-1 place-items-center items-center gap-8 lg:gap-16 xl:grid-cols-2">
				{members.items.map((member) => (
					<MemberCard key={member.sys.id} {...member.fields} />
				))}
			</section>
		</>
	);
}
