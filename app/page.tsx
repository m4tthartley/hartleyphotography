
import { getPhotos, photo_t } from './photos'
import Gallery from './gallery'
import Header from './header'

export default async function Home() {
	const photos: photo_t[] = await getPhotos('public/photos', null)

	return (
		<main>
			<Header />
			<Gallery photos={photos} />
		</main>
	)
}
