import type {
	ChainModifiers,
	Entry,
	EntryFieldTypes,
	EntrySkeletonType,
	LocaleCode,
} from "contentful";
import type { TypeFooterIconModelSkeleton } from "./TypeFooterIconModel";
import type { TypeFooterTextLinkModelSkeleton } from "./TypeFooterTextLinkModel";

/**
 * Fields type definition for content type 'TypeFooterLinkGroup'
 * @name TypeFooterLinkGroupFields
 * @type {TypeFooterLinkGroupFields}
 * @memberof TypeFooterLinkGroup
 */
export interface TypeFooterLinkGroupFields {
	/**
	 * Field type definition for field 'title' (title)
	 * @name title
	 * @localized false
	 */
	title?: EntryFieldTypes.Symbol;
	/**
	 * Field type definition for field 'textLinks' (textLinks)
	 * @name textLinks
	 * @localized false
	 */
	textLinks?: EntryFieldTypes.Boolean;
	/**
	 * Field type definition for field 'links' (links)
	 * @name links
	 * @localized false
	 */
	links?: EntryFieldTypes.Array<
		EntryFieldTypes.EntryLink<
			TypeFooterIconModelSkeleton | TypeFooterTextLinkModelSkeleton
		>
	>;
}

/**
 * Entry skeleton type definition for content type 'partners' (Partners)
 * @name TypeFooterLinkGroupSkeleton
 * @type {TypeFooterLinkGroupSkeleton}
 */
export type TypeFooterLinkGroupSkeleton = EntrySkeletonType<
	TypeFooterLinkGroupFields,
	"footerLinkGroup"
>;
/**
 * Entry type definition for content type 'partners' (Partners)
 * @name TypeFooterLinkGroup
 * @type {TypeFooterLinkGroup}
 */
export type TypeFooterLinkGroup<
	Modifiers extends ChainModifiers,
	Locales extends LocaleCode,
> = Entry<TypeFooterLinkGroupSkeleton, Modifiers, Locales>;

export function isTypeFooterLinkGroup<
	Modifiers extends ChainModifiers,
	Locales extends LocaleCode,
>(
	entry: Entry<EntrySkeletonType, Modifiers, Locales>,
): entry is TypeFooterLinkGroup<Modifiers, Locales> {
	return entry.sys.contentType.sys.id === "footerLinkGroup";
}
