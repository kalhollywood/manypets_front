

const getBreed = async () => {
    const res = await fetch("https://dog.ceo/api/breeds/list/all");
    const data = await res.json();
    console.log(data)
    return data.payload;
}

export default getBreed;

