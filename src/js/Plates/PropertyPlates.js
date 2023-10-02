 export default function orderByProps(obj, [key1, key2]) {
    const newArrProps = [];
    for(let prop in obj) {
        newArrProps.push({key: prop, value: obj[prop]})
    }
    newArrProps.sort((a, b) => a.key < b.key ? -1 : 1)
    return newArrProps.sort((a, b) => ( a.key === key1 ? -1 : b.key === key1) || (a.key === key2 ? -1 : b.key === key2));

      
}