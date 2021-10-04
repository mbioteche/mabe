import Image from 'next/image'

type PartnerProps = {
	logo: string // URL a logóhoz
	name: string // a partner neve
	address?: string // a partner címe
	tel?: string // telefonszám
	email?: string // email cím
	website: string // weboldal
};

export function Partner({ logo, address = "", email = "", name, tel = "", website }: PartnerProps) {
	return (
		<div className="p-2 w-56">
			<div className="flex relative items-center p-4 mx-auto w-40 h-40">
				<Image
					layout="fill"
					objectFit="contain"
					src={logo}
					alt={`${name} logója`}
				/>
			</div>
			<div className="flex-col justify-between p-6 space-y-4 w-52 h-52 text-xs text-center rounded-b-lg shadow-partner">
				<p className="font-roboto text-base font-bold">{name}</p>
				<hr className="h-0.5 bg-pink-dark rounded-3xl border-none " />
				{address !== "" && (<p>{address}</p>)}
				<div>
					{tel !== "" && (
						<>
							<a className="font-roboto " href={`tel:${tel}`}>Telefon: {tel}</a>
							<br/>
						</>
						)}
					{email !== "" && (<a className="font-roboto " href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">Email: {email}</a>)}
				</div>
				<div>
					<a href={website} target="_blank" rel="noopener noreferrer" className="font-roboto text-pink-dark hover:text-pink-light">{website}</a>
				</div>
			</div>
		</div>
	)
}
