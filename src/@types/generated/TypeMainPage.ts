import type {
	ChainModifiers,
	Entry,
	EntryFieldTypes,
	EntrySkeletonType,
	LocaleCode,
} from "contentful";
import type { TypeMainPageEventSkeleton } from "./TypeMainPageEvent";
import type { TypeMainPageOurGoalSkeleton } from "./TypeMainPageOurGoal";

/**
 * Fields type definition for content type 'TypeMainPage'
 * @name TypeMainPageFields
 * @type {TypeMainPageFields}
 * @memberof TypeMainPage
 */
export interface TypeMainPageFields {
	/**
	 * Field type definition for field 'title' (title)
	 * @name title
	 * @localized false
	 */
	title: EntryFieldTypes.Symbol;
	/**
	 * Field type definition for field 'subTitle' (subTitle)
	 * @name subTitle
	 * @localized false
	 */
	subTitle: EntryFieldTypes.Symbol;
	/**
	 * Field type definition for field 'ourGoalsTitle' (ourGoalsTitle)
	 * @name ourGoalsTitle
	 * @localized false
	 */
	ourGoalsTitle: EntryFieldTypes.Symbol;
	/**
	 * Field type definition for field 'ourGoals' (ourGoals)
	 * @name ourGoals
	 * @localized false
	 */
	ourGoals: EntryFieldTypes.Array<
		EntryFieldTypes.EntryLink<TypeMainPageOurGoalSkeleton>
	>;
	/**
	 * Field type definition for field 'joinUsText' (joinUsText)
	 * @name joinUsText
	 * @localized false
	 */
	joinUsText: EntryFieldTypes.Text;
	/**
	 * Field type definition for field 'joinUsButton' (joinUsButton)
	 * @name joinUsButton
	 * @localized false
	 */
	joinUsButton: EntryFieldTypes.Symbol;
	/**
	 * Field type definition for field 'incomingEventsTitle' (incomingEventsTitle)
	 * @name incomingEventsTitle
	 * @localized false
	 */
	incomingEventsTitle: EntryFieldTypes.Symbol;
	incomingEvents: EntryFieldTypes.Array<
		EntryFieldTypes.EntryLink<TypeMainPageEventSkeleton>
	>;
}

/**
 * Entry skeleton type definition for content type 'events' (Events)
 * @name TypeMainPageSkeleton
 * @type {TypeMainPageSkeleton}
 */
export type TypeMainPageSkeleton = EntrySkeletonType<
	TypeMainPageFields,
	"mainPage"
>;
/**
 * Entry type definition for content type 'events' (Events)
 * @name TypeMainPage
 * @type {TypeMainPage}
 */
export type TypeMainPage<
	Modifiers extends ChainModifiers,
	Locales extends LocaleCode,
> = Entry<TypeMainPageSkeleton, Modifiers, Locales>;

export function isTypeMainPage<
	Modifiers extends ChainModifiers,
	Locales extends LocaleCode,
>(
	entry: Entry<EntrySkeletonType, Modifiers, Locales>,
): entry is TypeMainPage<Modifiers, Locales> {
	return entry.sys.contentType.sys.id === "mainPage";
}
