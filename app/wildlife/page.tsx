import Gallery from "@/app/gallery"
import Header from "@/app/header"
import { getPhotos, photo_t } from "@/app/photos"

export default async function Wildlife(props: any) {
	const photos: photo_t[] = await getPhotos('public/photos', {
		wildlife: true
	})

	return (
		<main>
			<Header />
			<Gallery photos={photos} />
		</main>
	)
}
