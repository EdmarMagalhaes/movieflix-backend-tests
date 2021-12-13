import ContentLoader from 'react-content-loader';

const MovieInfoLoader = () => (
  <ContentLoader 
    speed={1}
    width={500}
    height={315}
    backgroundColor="#6C6C6C"
    foregroundColor="#9C9C9C"
  >
    
    <rect x="0" y="0" rx="2" ry="2" width="500" height="315" /> 
    
  </ContentLoader>
)

export default MovieInfoLoader;