

// const getBreed = async () => {
//     const res = await fetch("https://dog.ceo/api/breeds/list/all");
//     const data = await res.json();
//     console.log(data.message)
//     return data.payload;
// }

const getCatBreed = async () => {
    const res = await fetch("https://api.thecatapi.com/v1/breeds");
    const data = await res.json();
    let catArray = []
    data.map((e) => catArray.push(e.name))
    // console.log(catArray)
    return catArray;
}


export default getCatBreed;

