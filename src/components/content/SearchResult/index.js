import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import VideoCard from './VideoCard/VideoCard';
import '../../../css/sideBar.css';
import { searchVideos } from '../../../api/service';

class SearchResult extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      error: '',
    };
  }

  componentDidMount() {
    const { params: { searchParam } } = this.props.match;

    searchVideos(searchParam)
      .then((data) => {
        this.setState({ data: data.items });
      })
      .catch((error) => this.setState({ error }));
  }

  render() {
    const { data } = this.state;

    if (data.length < 1) return <div>Loading...</div>;
    // DICA DO PROFE MAU-MAU
    return (
      <div>
        {data.map((item) => {
          if (item.id.channelId) return null;
          return (
            <Link
              className="thumbnail-card"
              key={item.etag}
              to={{
                pathname: `/watch/${item.id.videoId}`,
                state: { data },
              }}
            >
              <VideoCard video={item} />
            </Link>
          );
        })}
      </div>
    );
  }
}

export default SearchResult;
