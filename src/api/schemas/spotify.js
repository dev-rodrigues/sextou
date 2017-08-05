const { makeExecutableSchema } = require('graphql-tools');

const typeDefs = `
  type Track {
    id: String!
    name: String
    artists: [Artist]
  }

  type Artist {
    id: String!
    name: String
  }

  type Playlist {
    id: String!
    name: String
    tracks: [Track]
  }

  type Query {
    playlists: [Playlist]
    playlist(id: String!): Playlist
  }
`;

const resolvers = {
  Track: {
    artists: (track) => {
      return track.artists.map(artistId =>
                   artists.find(artist => artist.id === artistId));
    }
  },
  Playlist: {
    tracks: (playlist) => {
      return playlist.tracks.map(trackId => tracks.find(track => track.id === trackId))
    }
  },
  Query: {
    playlists: () => playlists,
    playlist: (_, { id }) => playlists.find(playlist => playlist.id === id)
  }
}

const tracks = [
  { id: 'huiashei', name: 'Cobra', artists: ['1231'] },
  { id: 'ejaiosj', name: 'Last Nite', artists: ['53242'] },
  { id: 'daojsoi', name: 'Dino vs Dino', artists: ['1231'] },
  { id: 'jdiaosj', name: 'Reptilia', artists: ['53242'] },
  { id: 'jdaiosj', name: 'Relentless Game', artists: ['1231', '45645'] }
]

const artists = [
  { id: '1231', name: 'Far From Alaska' },
  { id: '53242', name: 'Strokes' },
  { id: '45645', name: 'Scalene' },
]

const playlists = [
  { id: '0', name: 'aquela', tracks: ['huiashei', 'ejaiosj', 'daojsoi', 'jdaiosj']}
]

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers,
});
