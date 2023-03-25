// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
// import BlogItem from '../BlogItem'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogItemContent: [], isLoading: true}

  componentDidMount() {
    this.getBlogDataContent()
  }

  getBlogDataContent = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    console.log(data)
    const updateContent = {
      id: data.id,
      topic: data.topic,
      author: data.author,
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      content: data.content,
    }
    this.setState({blogItemContent: updateContent, isLoading: false})
  }

  renderBlogDetailes = () => {
    const {blogItemContent} = this.state
    const {
      id,
      imageUrl,
      avatarUrl,
      author,
      title,
      content,
      //   topic,
    } = blogItemContent
    return (
      <div className="container mt-5">
        <div className="row justify-content-center" id={id}>
          <div className="col-12 col-md-10">
            <div>
              <h2 className="title text-center">{title}</h2>
              <div className="d-flex align-items-center pt-5 pb-3">
                <img className="avatarProfile1" src={avatarUrl} alt="avatar" />
                <h6 className="p-4">{author}</h6>
              </div>
            </div>
            <div>
              <img
                className="img-fluid rounded mb-3"
                src={imageUrl}
                alt="img"
              />
              <p className="pb-4">{content}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="container">
        {isLoading ? (
          <Loader
            className="text-center"
            type="TailSpin"
            color="#00bfff"
            height={50}
            width={50}
          />
        ) : (
          this.renderBlogDetailes()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
