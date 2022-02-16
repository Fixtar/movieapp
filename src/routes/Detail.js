import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function Detail() {
    //useParams 으로 path에서 설정해둔 :id값(동적 라우팅값)으로 객체를 가져올 수 있다.
    const { id } = useParams();
    const [Contents, setContents] = useState([]);

    //useCallback을 사용하면 [id]의 id값이 변경될때만, getMovie함수가 실행된다.
    const getMovie = useCallback(async () => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
            )).json();
        setContents(json.data.movie);
    }, [id]);

    useEffect(() => {
        getMovie();
    }, [getMovie]);

    return (
        <div>
            <h1>Detail</h1>
            <img src={Contents.medium_cover_image} alt="img" />
            <h2>{Contents.title_long}</h2>
        </div>
    );
}

export default Detail;