// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";

export interface IEventsFields {
	/** id */
	id?: number | undefined;

	/** title */
	title: string;

	/** location */
	location?: string | undefined;

	/** description */
	description: string;

	/** date */
	date?: string | undefined;

	/** longContent */
	longContent: Document;
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
	/** id */
	id: number;

	/** title */
	title: string;

	/** images */
	images?: Asset[] | undefined;
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
	mabeformLink?: string | undefined;

	/** mabeEmail */
	mabeEmail?: string | undefined;

	/** mabeLocation */
	mabeLocation?: string | undefined;

	/** mabePhone */
	mabePhone?: string | undefined;

	/** mabeFacebook */
	mabeFacebook?: string | undefined;

	/** mabeInstagram */
	mabeInstagram?: string | undefined;

	/** mabeLinkedIn */
	mabeLinkedIn?: string | undefined;

	/** mabeCoverImage */
	mabeCoverImage?: Asset | undefined;
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
	/** id */
	id?: number | undefined;

	/** title */
	title?: string | undefined;

	/** content */
	content?: Document | undefined;

	/** coverImage */
	coverImage?: Asset | undefined;

	/** date */
	date?: string | undefined;

	/** author */
	author?: Entry<{ [fieldId: string]: unknown }> | undefined;
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
	name?: string | undefined;

	/** image */
	image?: Asset | undefined;
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
	name?: string | undefined;

	/** address */
	address?: string | undefined;

	/** phone */
	phone?: string | undefined;

	/** email */
	email?: string | undefined;

	/** website */
	website?: string | undefined;

	/** logo */
	logo?: Asset | undefined;
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