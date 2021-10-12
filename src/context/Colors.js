import { useState, useEffect, useRef, createContext } from 'react';

export const ColorContext = createContext();
export const ColorProvider = props => {
    const [isLoading, setIsLoading] = useState(false);
    const [colorNames, setColorNames] = useState("");
    const [likedColor, setLikedColor] = useState([]);
    const [query, setQuery] = useState("");
    const [cloudHex, setCloudHex] = useState("ivory");
    const [shake, setShake] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [isRealColor, setIsRealColor] = useState('');
    const [heartColor, setHeartColor] = useState('heart');
    const [colors, setColors] = useState([
    ]);
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
    }, [colors, isLiked, isRealColor])
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
                b: likedColor.rgb.b,
                isLiked: true            }]
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
                setIsRealColor(true);
                return;
            } else if (i == colorNames.colors.length - 1) {
                setShake(true);
                setIsRealColor(false);
                setTimeout(() => {
                    setShake(false);
                }, 200);
                return;
            }
        }
    };

    const getSearch = (e) => {
        e.preventDefault();
        console.log(isRealColor)
        setQuery(search.current.value);
        if(query !== search.current.value){
            setIsLiked(false)
            setHeartColor('heart');
        }
    };

    let likeColor = (e) => {
        if (!isLiked) {
            setIsLiked(true)
            setHeartColor("fill");
            setColorInfo();
        } else {
            setIsLiked(false)
            setHeartColor('heart');
        }
    };
    
    return (
        <ColorContext.Provider value={{ isLoading, setIsLoading, getSearch, search, cloudHex, shake, likeColor, isLiked, setColorInfo, colors, removeCard, heartColor }} >{props.children}</ColorContext.Provider>
    )
}