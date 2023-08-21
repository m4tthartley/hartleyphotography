import { Satisfy } from "next/font/google"
import Link from "next/link"

const satisfy = Satisfy({ weight: '400', subsets: ['latin'] })

const Header = () => {
	return (
		<header className="">
			<div className="flex justify-center">
				<p>Hartley Photography</p>
			</div>
			<nav className={satisfy.className}>
				<div className="flex justify-center my-5">
					<Link className="mx-5 text-2xl" href="/">Home</Link>
					<Link className="mx-5 text-2xl" href="/wildlife">Wildlife</Link>
					<Link className="mx-5 text-2xl" href="/landscape">Landscape</Link>
					<Link className="mx-5 text-2xl" href="/nature">Nature</Link>
				</div>
			</nav>
		</header>
	)
}

export default Header