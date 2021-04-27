export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=14OU3P89zioQ9a4JLyLMZL685IqEfDFA`;
    const response = await fetch(url);
    const { data } = await response.json();
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,   
            url: img.images?.downsized_medium.url
        }
    });
    return gifs;
}