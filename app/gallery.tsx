
// Photo size 240x160
const Photo = (props: any) => {
	const {photo} = props
	const width = photo.orientation==1 ? 'w-60' : 'w-40'
	return (
		<div className="flex justify-center mx-5 my-10 w-60">
			<img src={photo.thumbnail.replace('public', '')} alt={''} className={width} />
		</div>
	)
}

const Gallery = (props: any) => {
	const {photos} = props
	const row = []
	for(let i=0; i<photos.length; i+=3) {
		row.push(
			<div className="flex justify-center items-center">
				<Photo photo={photos[i]} />
				{photos[i+1] && <Photo photo={photos[i+1]} />}
				{photos[i+2] && <Photo photo={photos[i+2]} />}
			</div>
		)
	}
	return row
}

export default Gallery