import './index.css'

const ImageCart = props => {
  const {item, thumbnailImagegeneration} = props
  const {thumbnailUrl, imageUrl, category, id} = item
  const thumbnail = () => {
    thumbnailImagegeneration(id)
  }
  return (
    <li>
      <button>
        <img
          src={thumbnailUrl}
          alt="thumbnail"
          className="image1"
          onClick={thumbnail}
        />
      </button>
    </li>
  )
}

export default ImageCart
