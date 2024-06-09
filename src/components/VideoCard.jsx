const VideoCard = () => {
    return (
        <div className="cursor-pointer">
            {/* resim alanı */}
            <div className="">
                <img src="https://i.ytimg.com/vi/h5oHhGlWKf0/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDmMwuKxD0iSKRBkuIo76UpPATaJw"
                    alt=""
                    className="w-full h-full rounded-lg"
                />
            </div>
            {/* video alt detay alanı */}
            <div className="flex gap-4 mt-5">
                <img src="https://yt3.googleusercontent.com/soMZ0B6v4hjfTIlbtYoKYtMpaDgAoSfFmRLhzlLlyzs3mgv6tyXzi2Y4Tt8KwvY7q2yIWUaMfI4=s176-c-k-c0x00ffffff-no-rj-mo"
                    alt="logo"
                    className="w-14 h-14 rounded-full c-pic"
                />
                <div>
                    <h4 className="font-bold line-clamp-2">title</h4>
                    <p>channelTitle</p>
                    <div className="flex gap-3">
                        <p className="flex gap-1">
                            <span>83,714</span>
                            <span className="text"> Görüntülenme</span>
                        </p>
                        * <p>1 gün önce yayınlandı</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default VideoCard;
