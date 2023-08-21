import fs from 'fs/promises'
import sharp from "sharp"

export type photo_t = {
	file: string
	thumbnail: string
	httpFile?: string
	httpThumbnail?: string
	orientation: number
}

const processPhoto = async (path: string): Promise<photo_t> => {
	const image = await sharp(path)
	const meta = await image.metadata()

	const photo = {
		// httpFile: path.replace('public', ''),
		file: path,
		// httpThumbnail: path.replace('public', '').replace('.JPG', '_thumbnail.JPG'),
		thumbnail: path.replace('.JPG', '_thumbnail.JPG'),
		orientation: meta.orientation || 1
	}

	// const stat = await fs.stat(photo.thumbnail)
	// fs.exists(photo.thumbnail)
	// const stat = fsSync.accessSync(photo.thumbnail, fs.constants.F_OK)
	// console.log(stat)
	try {
		console.log(await fs.stat(photo.thumbnail))
	} catch(err) {
		console.log(`Generating thumbnail ${photo.thumbnail}...`)
		await image
			.resize(720, 480)
			.jpeg({quality:100})
			.withMetadata()
			.toFile(photo.thumbnail)
	}

	return photo
}

export const getPhotos = async (path: string, filter: any): Promise<photo_t[]> => {
	const folder = path
	const dir = await fs.readdir(folder)
	let photos: photo_t[] = []
	for(const file of dir) {
		if(file.indexOf('thumbnail') != -1) continue

		const stat = await fs.stat(folder+'/'+file)
		if(stat.isDirectory()) {
			if(!filter || filter[file]) {
				photos = photos.concat(await getPhotos(folder+'/'+file, filter))
			}
		} else {
			photos.push(await processPhoto(folder+'/'+file))
		}
		// console.log(stat)
	}
	return photos
}