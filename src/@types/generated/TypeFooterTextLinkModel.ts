import type {
	ChainModifiers,
	Entry,
	EntryFieldTypes,
	EntrySkeletonType,
	LocaleCode,
} from "contentful";

/**
 * Fields type definition for content type 'TypeFooterTextLinkModel'
 * @name TypeFooterTextLinkModelFields
 * @type {TypeFooterTextLinkModelFields}
 * @memberof TypeFooterTextLinkModel
 */
export interface TypeFooterTextLinkModelFields {
	/**
	 * Field type definition for field 'label' (label)
	 * @name label
	 * @localized false
	 */
	label: EntryFieldTypes.Symbol;
	/**
	 * Field type definition for field 'link' (link)
	 * @name link
	 * @localized false
	 */
	link?: EntryFieldTypes.Text;
}

/**
 * Entry skeleton type definition for content type 'partners' (Partners)
 * @name TypeFooterTextLinkModelSkeleton
 * @type {TypeFooterTextLinkModelSkeleton}
 */
export type TypeFooterTextLinkModelSkeleton = EntrySkeletonType<
	TypeFooterTextLinkModelFields,
	"footerTextLinkModel"
>;
/**
 * Entry type definition for content type 'partners' (Partners)
 * @name TypeFooterTextLinkModel
 * @type {TypeFooterTextLinkModel}
 */
export type TypeFooterTextLinkModel<
	Modifiers extends ChainModifiers,
	Locales extends LocaleCode,
> = Entry<TypeFooterTextLinkModelSkeleton, Modifiers, Locales>;

export function isTypeFooterTextLinkModel<
	Modifiers extends ChainModifiers,
	Locales extends LocaleCode,
>(
	entry: Entry<EntrySkeletonType, Modifiers, Locales>,
): entry is TypeFooterTextLinkModel<Modifiers, Locales> {
	return entry.sys.contentType.sys.id === "footerTextLinkModel";
}
