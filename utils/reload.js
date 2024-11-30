export function reload(arr,component,place) {
    

    for (const elems of arr) {
        const elem = component[elems]
        
        place.append(elem)
    }
}