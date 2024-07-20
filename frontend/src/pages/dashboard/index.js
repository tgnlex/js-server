import {Component} from 'preact';
import {Profile} from './profile.js';
import {Feed} from './feed.js';
import {Links} from './links.js':;
class Dashboard extends Component {
  render() {
    return (
      <main id="dashboard" class="container">
        <div id="profile-wrapper" class="col">
         <Profile />
        </div>
        <div id="feed-wrapper" class="col">
          <Feed />
        </div>
        <div id="misc-wrapper" class="col">
          <Links />
        </div>  
      </main>
    )
  }
}
export {Dashboard}
