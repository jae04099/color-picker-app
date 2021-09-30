import { useState, useEffect, useRef, createContext } from 'react';

export const ColorContext = createContext();
export const ColorProvider = props => {
    const [isLoading, setIsLoading] = useState(false);
    const [colorNames, setColorNames] = useState("");
    const [likedColor, setLikedColor] = useState([]);
    const [query, setQuery] = useState("");
    const [cloudHex, setCloudHex] = useState("ivory");
    const [shake, setShake] = useState(false);
    const [isLiked, setIsLiked] = useState("heart");
    const [colors, setColors] = useState([
    ]);
    let likeColor = () => {
        if (isLiked == "heart") {
            setIsLiked("clicked-heart");
        } else {
            setIsLiked("heart");
        }
    };
    const search = useRef("");

    useEffect(() => {
        getColorLists();
    }, [isLoading]);

    useEffect(() => {
        if (colorNames != "") {
            isColor();
        }
    }, [query]);

    useEffect(() => {
    }, [colors])
    const getColorLists = async () => {
        const res = await fetch(`https://api.color.pizza/v1/`);
        const data = await res.json();
        setColorNames(data);
        setIsLoading(true);
    };
    const setColorInfo = () => {
        setColors([...colors, {
            title: likedColor.name,
                hex: likedColor.hex,
                r: likedColor.rgb.r,
                g: likedColor.rgb.g,
                b: likedColor.rgb.b
            }]
        )
    }

    const removeCard = (e) => {
        e.target.parentNode.parentNode.parentNode.remove()
    }

    const isColor = () => {
        let makeUpper =
            query.search(/\s/) == -1
                ? query.charAt(0).toUpperCase() + query.slice(1)
                : query
                    .split(" ")
                    .map((i) => i.charAt(0).toUpperCase() + i.slice(1))
                    .join(" ");

        for (let i = 0; i < colorNames.colors.length; i++) {
            if (colorNames.colors[i].name == makeUpper) {
                setCloudHex(colorNames.colors[i].hex);
                setLikedColor(colorNames.colors[i]);
                setShake(false);
                return;
            } else if (i == colorNames.colors.length - 1) {
                setShake(true);
                setTimeout(() => {
                    setShake(false);
                }, 200);
                return;
            }
        }
    };

    const getSearch = (e) => {
        e.preventDefault();
        setQuery(search.current.value);
    };
    return (
        <ColorContext.Provider value={{ isLoading, setIsLoading, getSearch, search, cloudHex, shake, likeColor, isLiked, setColorInfo, colors, removeCard }} >{props.children}</ColorContext.Provider>
    )
}