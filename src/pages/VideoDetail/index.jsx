import { useEffect, useState } from "react";
import api from "../../utils/api";
import { useSearchParams } from "react-router-dom";
import ReactPlayer from 'react-player';
import ChannelInfo from "./ChannelInfo";
import VideoInfo from './VideoInfo';
import Comments from "./Comments";
import VideoCard from './../../components/VideoCard';


const VideoDetail = () => {
    const [video, setVideo] = useState(null);
    const [comments, setComment] = useState(null);

    //* 1. arama parametrelerine erişim için kullandık 
    const [searchParams] = useSearchParams();

    //* 2. url den "v" isimli parametreye searchParams içindeki get metodu ile değerine eriştik.
    const id = searchParams.get("v");

    //* 3. id'si bilinen videonun bilgilerini api'den al
    useEffect(() => {
        api.get(`/video/info?id=${id}&extend=1`).then((res) => setVideo(res.data));

        api.get(`/comments?id=${id}`).then((res) => setComment(res.data));
    }, [id]);
    // console.log(video,comments);

    return (
        <div className="detail-page h-screen overflow-auto p-[20px] md:p-[40px] lg:px-[50px] xl:px-[100px]">
            {/* video içeriği */}
            <div>
                <div className="h-[30vh] md:h-[50vh] lg:h-[60vh]">
                    <ReactPlayer
                        controls
                        width={"100%"}
                        height={"100%"}
                        url={`https://www.youtube.com/watch?v=${id}`} />
                </div>

                {!video || !comments ? (
                    <p>Yükleniyor...</p>
                ) : (
                    <>
                        <ChannelInfo video={video} />
                        <VideoInfo video={video} />
                        <Comments data={comments} />
                    </>
                )}
            </div>

            {/* alakalı videolar */}
            <div className="wrapper flex flex-col gap-5 ps-5">
                {video?.relatedVideos.data.map((item) => (
                    <VideoCard isRow={true} key={item.videoId} video={item} />
                ))}
            </div>
        </div>
    );
};

export default VideoDetail;
