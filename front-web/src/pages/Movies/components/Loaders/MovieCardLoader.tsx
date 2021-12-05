import { generateList } from "core/utils/list"
import ContentLoader from "react-content-loader"

const MovieCardLoader = () => {
    const loderItems = generateList(3);

    return (
        <>
            {loderItems.map(item => (
                <ContentLoader
                    speed={1}
                    width={258}
                    height={322}
                    viewBox="0 0 258 322"
                    backgroundColor="#6C6C6C"
                    foregroundColor="#9C9C9C"

                >
                    <rect x="0" y="0" rx="4" ry="4" width="258" height="322" />
                </ContentLoader>
            ))}
        </>
    )
}

export default MovieCardLoader