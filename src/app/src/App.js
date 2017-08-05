import React, { Component } from 'react';
import { graphql, gql } from 'react-apollo';
import './app.css';

class App extends Component {
  render() {

    if (!this.props.data || this.props.data.loading || !this.props.data.playlist) {
      return <p>loading...</p>
    }

    if (this.props.data.error) {
      return <p>error!</p>
    }

    const playlist = this.props.data.playlist;
    console.log(playlist);

    return (
      <header>
          <h1>Sextou</h1>
          <div>
            <h2>add a song</h2>
            <input type="text"/>
          </div>
          <div>
            <h2>Playlist { playlist.name }</h2>
            <ol>
              { playlist.tracks.map(track => <li key={ track.name }>{ track.name } by { track.artists[0].name }</li>)}
            </ol>
          </div>
      </header>
    );
  }
}

const PlaylistQuery = gql`
  query {
      playlist(id: "0") {
        name
        tracks {
          name
          artists {
            name
          }
        }
      }
  }
`
export default graphql(PlaylistQuery)(App);
