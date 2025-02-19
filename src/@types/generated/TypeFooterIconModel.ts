import type {
	ChainModifiers,
	Entry,
	EntryFieldTypes,
	EntrySkeletonType,
	LocaleCode,
} from "contentful";

/**
 * Fields type definition for content type 'TypeFooterIconModel'
 * @name TypeFooterIconModelFields
 * @type {TypeFooterIconModelFields}
 * @memberof TypeFooterIconModel
 */
export interface TypeFooterIconModelFields {
	/**
	 * Field type definition for field 'icon' (icon)
	 * @name icon
	 * @localized false
	 */
	icon: EntryFieldTypes.AssetLink;
	/**
	 * Field type definition for field 'link' (link)
	 * @name link
	 * @localized false
	 */
	link?: EntryFieldTypes.Text;
}

/**
 * Entry skeleton type definition for content type 'partners' (Partners)
 * @name TypeFooterIconModelSkeleton
 * @type {TypeFooterIconModelSkeleton}
 */
export type TypeFooterIconModelSkeleton = EntrySkeletonType<
	TypeFooterIconModelFields,
	"footerIconModel"
>;
/**
 * Entry type definition for content type 'partners' (Partners)
 * @name TypeFooterIconModel
 * @type {TypeFooterIconModel}
 */
export type TypeFooterIconModel<
	Modifiers extends ChainModifiers,
	Locales extends LocaleCode,
> = Entry<TypeFooterIconModelSkeleton, Modifiers, Locales>;

export function isTypeFooterIconModel<
	Modifiers extends ChainModifiers,
	Locales extends LocaleCode,
>(
	entry: Entry<EntrySkeletonType, Modifiers, Locales>,
): entry is TypeFooterIconModel<Modifiers, Locales> {
	return entry.sys.contentType.sys.id === "footerIconModel";
}
