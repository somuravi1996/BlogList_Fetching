import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogListData} = props
  const {id, title, author, topic, avatarUrl, imageUrl} = blogListData
  return (
    <div className="container">
      <Link className="blog-item-link" to={`/blogs/${id}`}>
        <div className="row mb-3 border p-3 rounded-3">
          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
            <div className="">
              <img
                className="img-fluid rounded"
                src={imageUrl}
                alt={`item ${id}`}
              />
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-8 col-lg-8">
            <div className="item-detailes">
              <p className="topic">{topic}</p>
              <h5 className="title1">{title}</h5>

              <div className="d-flex align-items-center pt-5">
                <img className="avatarProfile1" src={avatarUrl} alt="avt" />
                <h6 className="text-secondary p-3 ">{author}</h6>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
export default BlogItem
