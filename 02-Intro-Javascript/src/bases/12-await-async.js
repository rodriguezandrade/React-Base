const apiKey = '14OU3P89zioQ9a4JLyLMZL685IqEfDFA';

const getImagenAsync = async () => {
    try {
        const request = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const resp = await request.json().then(({ data }) => {
            const { url } = data.images.original;
            console.log(url);
            const img = document.createElement('img');
            img.src = url;
            document.body.append(img);
        }).then(err => console.warn);
    } catch (error) {
        console.log(error);
    }
}

getImagenAsync();