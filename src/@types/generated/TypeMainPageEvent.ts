import type {
	ChainModifiers,
	Entry,
	EntryFieldTypes,
	EntrySkeletonType,
	LocaleCode,
} from "contentful";

/**
 * Fields type definition for content type 'TypeMainPageEvent'
 * @name TypeMainPageEventFields
 * @type {TypeMainPageEventFields}
 * @memberof TypeMainPageEvent
 */
export interface TypeMainPageEventFields {
	/**
	 * Field type definition for field 'title' (title)
	 * @name title
	 * @localized false
	 */
	title: EntryFieldTypes.Symbol;
	/**
	 * Field type definition for field 'location' (location)
	 * @name location
	 * @localized false
	 */
	location: EntryFieldTypes.Symbol;
	/**
	 * Field type definition for field 'image' (image)
	 * @name image
	 * @localized false
	 */
	image: EntryFieldTypes.AssetLink;
	/**
	 * Field type definition for field 'startDate' (startDate)
	 * @name startDate
	 * @localized false
	 */
	startDate: EntryFieldTypes.Date;
	/**
	 * Field type definition for field 'endDate' (endDate)
	 * @name endDate
	 * @localized false
	 */
	endDate?: EntryFieldTypes.Date;
	/**
	 * Field type definition for field 'slug' (slug)
	 * @name slug
	 * @localized false
	 */
	link: EntryFieldTypes.Text;
}

/**
 * Entry skeleton type definition for content type 'events' (Events)
 * @name TypeMainPageEventSkeleton
 * @type {TypeMainPageEventSkeleton}
 */
export type TypeMainPageEventSkeleton = EntrySkeletonType<
	TypeMainPageEventFields,
	"mainPageEvent"
>;
/**
 * Entry type definition for content type 'events' (Events)
 * @name TypeMainPageEvent
 * @type {TypeMainPageEvent}
 */
export type TypeMainPageEvent<
	Modifiers extends ChainModifiers,
	Locales extends LocaleCode,
> = Entry<TypeMainPageEventSkeleton, Modifiers, Locales>;

export function isTypeMainPageEvent<
	Modifiers extends ChainModifiers,
	Locales extends LocaleCode,
>(
	entry: Entry<EntrySkeletonType, Modifiers, Locales>,
): entry is TypeMainPageEvent<Modifiers, Locales> {
	return entry.sys.contentType.sys.id === "mainPageEvent";
}
