// Write your JS code here
// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import BlogItem from '../BlogItem'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogList extends Component {
  state = {blogsData: [], isLoading: true}

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
    this.setState({blogsData: updatedData, isLoading: false})
  }

  render() {
    const {blogsData, isLoading} = this.state
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div>
              {isLoading ? (
                <Loader
                  type="TailSpin"
                  color="#00bfff"
                  height={50}
                  width={50}
                />
              ) : (
                blogsData.map(eachItemData => (
                  <BlogItem blogListData={eachItemData} key={eachItemData.id} />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BlogList
