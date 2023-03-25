// Write your JS code here
// Write your JS code here
import {Component} from 'react'
import BlogItem from '../BlogItem'

class BlogList extends Component {
  state = {blogsData: []}

  componentDidMount() {
    this.getBlogItemsData()
  }

  getBlogItemsData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    console.log(data)
    const updatedData = data.map(eachBlogItem => ({
      author: eachBlogItem.author,
      avatarUrl: eachBlogItem.avatar_url,
      imageUrl: eachBlogItem.image_url,
      title: eachBlogItem.title,
      topic: eachBlogItem.topic,
      id: eachBlogItem.id,
    }))
    this.setState({blogsData: updatedData})
  }

  render() {
    const {blogsData} = this.state
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div>
              {blogsData.map(eachItemData => (
                <BlogItem blogListData={eachItemData} key={eachItemData.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BlogList
