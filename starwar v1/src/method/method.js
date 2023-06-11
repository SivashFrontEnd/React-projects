export async function req (url) {
    const rez = await fetch(url);
    return await rez.json();
}

export function showName (data = []) {
   return data.results.map(({name}) => {
       return <div>{name}</div>
    })
}