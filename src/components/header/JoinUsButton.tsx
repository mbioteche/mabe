type JoinUsButtonProps = {
	isHeader?: boolean;
	link: string;
};

// eslint-disable-next-line import/prefer-default-export
export function JoinUsButton({ isHeader, link }: JoinUsButtonProps) {
	return (
		<li>
			{isHeader ? (
				<a href={link} target="_blank" rel="noopener noreferrer">
					<div className="flex w-fit flex-row gap-[2px] rounded-[6px] bg-[#00AB96] px-[16px] pb-[3px] pt-[5px] text-[18px] font-bold leading-[24px] text-white">
						<div>Csatlakozz</div>
						<div>+</div>
					</div>
				</a>
			) : (
				<a href={link} target="_blank" rel="noopener noreferrer">
					Csatlakozz<span className="text-[#00AB96]">+</span>
				</a>
			)}
		</li>
	);
}
