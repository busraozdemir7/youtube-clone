import { useEffect, useState, createContext } from "react";
import { categories } from "../constants";
import api from "../utils/api";

//* 1.Adım: Context yapısının temelini oluşturma
export const VideoContext = createContext();

//* 2.Adım: Sağlayıcı bileşini oluşturma
export const VideoProvider = ({ children }) => {
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
    const [isLoading, setIsLoading] = useState(true);
    const [videos, setVideos] = useState();
    const [error, setError] = useState(null);

    useEffect(() => {
        // Seçilen type'ı belirle
        const type = selectedCategory.type;

        // Seçilen kategorinin type'ı menu ise fonksiyonunu burada durdurur.
        if (type === "menu") return;
        // Yüklenmeyi true'ya çek
        setIsLoading(true);

        // istek atılacak url'i belirle
        const url =
            type === "home"
                ? "/home"
                : type === "trending"
                    ? "/trending"
                    : type === "category" ? `/search?query=${selectedCategory.name}`
                        : "";

        // api isteği at ve durumu state'e aktar
        api
            .get(url)
            .then((res) => {
                setVideos(res.data.data);
                setError(null); // eskiden olan hataları kaldır
            })
            .catch((err) => setError(err.message))
            .finally(() => setIsLoading(false));
    }, [selectedCategory]);

    return (
        <VideoContext.Provider
            value={{
                selectedCategory, setSelectedCategory, videos, error, isLoading,
            }}>
            {children}
        </VideoContext.Provider>
    );
};