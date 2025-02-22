"use client";

export function EventIframe({ iframeUrl }: { iframeUrl?: string }) {
	if (iframeUrl) {
		return (
			<div>
				<iframe
					title="Event iframe"
					src={iframeUrl}
					width="100%"
					className="h-[85vh] mb-[30px]"
				></iframe>
			</div>
		);
	}
	return;
}
