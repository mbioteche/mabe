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
					<div className="flex flex-row w-fit gap-[2px] pt-[5px] pb-[3px] px-[16px] bg-[#00AB96] rounded-[6px] text-white font-bold text-[18px] leading-[24px]">
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
