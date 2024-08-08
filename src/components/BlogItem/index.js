// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {BlogDetails} = props
  const {title, description, publishedDate} = BlogDetails

  return (
    <li className="container">
      <div className="head">
        <h1 className="title">{title}</h1>
        <p className="date">{publishedDate}</p>
      </div>
      <p className="data">{description}</p>
    </li>
  )
}

export default BlogItem
