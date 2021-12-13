import ContentLoader from 'react-content-loader';

const MovieSynopsyLoader = () => (
  <ContentLoader
    speed={1}
    width="100%"
    height={180}
    backgroundColor="#6C6C6C"
    foregroundColor="#9C9C9C"
  >
    <rect x="-3" y="40" rx="2" ry="2" width="720" height="24" />
    <rect x="0" y="0" rx="2" ry="2" width="720" height="24" />
    <rect x="0" y="80" rx="2" ry="2" width="720" height="24" />
    <rect x="0" y="120" rx="2" ry="2" width="720" height="24" />
    <rect x="0" y="160" rx="2" ry="2" width="720" height="24" />
  </ContentLoader>
)

export default MovieSynopsyLoader;