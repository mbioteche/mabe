"use client";

export function EventIframe({ iframeUrl }: { iframeUrl?: string }) {
	if (iframeUrl) {
		return (
			<div>
				<iframe
					title="Event iframe"
					src={iframeUrl}
					width="100%"
					className="mb-[30px] h-[85vh]"
				 />
			</div>
		);
	}
	
}
