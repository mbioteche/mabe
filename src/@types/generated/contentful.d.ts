// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";

export interface IEventsFields {
	/** title */
	title: string;

	/** miniContent */
	miniContent: string;

	/** longContent */
	longContent: Document;

	/** location */
	location: string;

	/** image */
	image: Asset;

	/** startDate */
	startDate?: string | undefined;

	/** endDate */
	endDate?: string | undefined;

	/** slug */
	slug: string;
}

export interface IEvents extends Entry<IEventsFields> {
	sys: {
		id: string;
		type: string;
		createdAt: string;
		updatedAt: string;
		locale: string;
		contentType: {
			sys: {
				id: "events";
				linkType: "ContentType";
				type: "Link";
			};
		};
	};
}

export interface IGalleryAlbumFields {
	/** title */
	title: string;

	/** images */
	images: Asset[];

	/** slug */
	slug: string;
}

export interface IGalleryAlbum extends Entry<IGalleryAlbumFields> {
	sys: {
		id: string;
		type: string;
		createdAt: string;
		updatedAt: string;
		locale: string;
		contentType: {
			sys: {
				id: "galleryAlbum";
				linkType: "ContentType";
				type: "Link";
			};
		};
	};
}

export interface IJoinUsButtonFields {
	/** mabeformLink */
	mabeformLink: string;

	/** mabeEmail */
	mabeEmail: string;

	/** mabeLocation */
	mabeLocation: string;

	/** mabePhone */
	mabePhone: string;

	/** mabeFacebook */
	mabeFacebook: string;

	/** mabeInstagram */
	mabeInstagram: string;

	/** mabeLinkedIn */
	mabeLinkedIn: string;

	/** mabeCoverImage */
	mabeCoverImage: Asset;
}

export interface IJoinUsButton extends Entry<IJoinUsButtonFields> {
	sys: {
		id: string;
		type: string;
		createdAt: string;
		updatedAt: string;
		locale: string;
		contentType: {
			sys: {
				id: "joinUsButton";
				linkType: "ContentType";
				type: "Link";
			};
		};
	};
}

export interface IMembersFields {
	/** name */
	name: string;

	/** position */
	position: string;

	/** email */
	email: string;

	/** image */
	image: Asset;

	/** order */
	order: number;
}

export interface IMembers extends Entry<IMembersFields> {
	sys: {
		id: string;
		type: string;
		createdAt: string;
		updatedAt: string;
		locale: string;
		contentType: {
			sys: {
				id: "members";
				linkType: "ContentType";
				type: "Link";
			};
		};
	};
}

export interface INewsFields {
	/** title */
	title: string;

	/** miniContent */
	miniContent: string;

	/** content */
	content: Document;

	/** coverImage */
	coverImage: Asset;

	/** date */
	date: string;

	/** author */
	author: Entry<{ [fieldId: string]: unknown }>;

	/** slug */
	slug: string;
}

export interface INews extends Entry<INewsFields> {
	sys: {
		id: string;
		type: string;
		createdAt: string;
		updatedAt: string;
		locale: string;
		contentType: {
			sys: {
				id: "news";
				linkType: "ContentType";
				type: "Link";
			};
		};
	};
}

export interface INewsAuthorFields {
	/** name */
	name: string;

	/** desc */
	desc?: string | undefined;

	/** image */
	image: Asset;
}

export interface INewsAuthor extends Entry<INewsAuthorFields> {
	sys: {
		id: string;
		type: string;
		createdAt: string;
		updatedAt: string;
		locale: string;
		contentType: {
			sys: {
				id: "newsAuthor";
				linkType: "ContentType";
				type: "Link";
			};
		};
	};
}

export interface IPartnersFields {
	/** name */
	name: string;

	/** address */
	address: string;

	/** phone */
	phone?: string | undefined;

	/** email */
	email: string;

	/** website */
	website: string;

	/** logo */
	logo: Asset;
}

export interface IPartners extends Entry<IPartnersFields> {
	sys: {
		id: string;
		type: string;
		createdAt: string;
		updatedAt: string;
		locale: string;
		contentType: {
			sys: {
				id: "partners";
				linkType: "ContentType";
				type: "Link";
			};
		};
	};
}

export type CONTENT_TYPE =
	| "events"
	| "galleryAlbum"
	| "joinUsButton"
	| "members"
	| "news"
	| "newsAuthor"
	| "partners";

export type LOCALE_CODE = "en-US";

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "en-US";
