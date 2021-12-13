import ContentLoader from 'react-content-loader';

const MovieDescriptionLoader = () => (
  <ContentLoader
    speed={1}
    width="100%"
    height={120}
    backgroundColor="#6C6C6C"
    foregroundColor="#9C9C9C"
  >
    <rect x="0" y="0" rx="2" ry="2" width="500" height="24" />
    <rect x="0" y="40" rx="2" ry="2" width="160" height="24" />
    <rect x="-3" y="80" rx="2" ry="2" width="353" height="24" />
  </ContentLoader>
)

export default MovieDescriptionLoader;