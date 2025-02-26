import type {
	ChainModifiers,
	Entry,
	EntryFieldTypes,
	EntrySkeletonType,
	LocaleCode,
} from "contentful";

/**
 * Fields type definition for content type 'TypeMainPageOurGoal'
 * @name TypeMainPageOurGoalFields
 * @type {TypeMainPageOurGoalFields}
 * @memberof TypeMainPageOurGoal
 */
export interface TypeMainPageOurGoalFields {
	/**
	 * Field type definition for field 'title' (title)
	 * @name title
	 * @localized false
	 */
	title: EntryFieldTypes.Symbol;
	/**
	 * Field type definition for field 'image' (image)
	 * @name image
	 * @localized false
	 */
	image?: EntryFieldTypes.AssetLink;
}

/**
 * Entry skeleton type definition for content type 'partners' (Partners)
 * @name TypeMainPageOurGoalSkeleton
 * @type {TypeMainPageOurGoalSkeleton}
 */
export type TypeMainPageOurGoalSkeleton = EntrySkeletonType<
	TypeMainPageOurGoalFields,
	"mainPageOurGoal"
>;
/**
 * Entry type definition for content type 'partners' (Partners)
 * @name TypeMainPageOurGoal
 * @type {TypeMainPageOurGoal}
 */
export type TypeMainPageOurGoal<
	Modifiers extends ChainModifiers,
	Locales extends LocaleCode,
> = Entry<TypeMainPageOurGoalSkeleton, Modifiers, Locales>;

export function isTypeMainPageOurGoal<
	Modifiers extends ChainModifiers,
	Locales extends LocaleCode,
>(
	entry: Entry<EntrySkeletonType, Modifiers, Locales>,
): entry is TypeMainPageOurGoal<Modifiers, Locales> {
	return entry.sys.contentType.sys.id === "mainPageOurGoal";
}
