import './index.css'

import UserInfo from '../UserInfo'
import BlogList from '../BlogList'

const Home = () => (
  <div className="home-container">
    <div className="home-card">
      <UserInfo />
      <BlogList />
    </div>
  </div>
)

export default Home
