export const getDataFatch = async () => {
    const rsc = await fetch("http://localhost:3000/data.json")
    const data = await rsc.json()

    return Object.values(data.phone).flat
}