import type {
	ChainModifiers,
	Entry,
	EntryFieldTypes,
	EntrySkeletonType,
	LocaleCode,
} from "contentful";
import type { TypeFooterLinkGroupSkeleton } from "./TypeFooterLinkGroup";

/**
 * Fields type definition for content type 'TypeNewFooter'
 * @name TypeNewFooterFields
 * @type {TypeNewFooterFields}
 * @memberof TypeNewFooter
 */
export interface TypeNewFooterFields {
	/**
	 * Field type definition for field 'textLinks' (textLinks)
	 * @name textLinks
	 * @localized false
	 */
	title?: EntryFieldTypes.Symbol;
	/**
	 * Field type definition for field 'links' (links)
	 * @name links
	 * @localized false
	 */
	linkGroups?: EntryFieldTypes.Array<
		EntryFieldTypes.EntryLink<TypeFooterLinkGroupSkeleton>
	>;
}

/**
 * Entry skeleton type definition for content type 'partners' (Partners)
 * @name TypeNewFooterSkeleton
 * @type {TypeNewFooterSkeleton}
 */
export type TypeNewFooterSkeleton = EntrySkeletonType<
	TypeNewFooterFields,
	"newFooter"
>;
/**
 * Entry type definition for content type 'partners' (Partners)
 * @name TypeNewFooter
 * @type {TypeNewFooter}
 */
export type TypeNewFooter<
	Modifiers extends ChainModifiers,
	Locales extends LocaleCode,
> = Entry<TypeNewFooterSkeleton, Modifiers, Locales>;

export function isTypeNewFooter<
	Modifiers extends ChainModifiers,
	Locales extends LocaleCode,
>(
	entry: Entry<EntrySkeletonType, Modifiers, Locales>,
): entry is TypeNewFooter<Modifiers, Locales> {
	return entry.sys.contentType.sys.id === "newFooter";
}
