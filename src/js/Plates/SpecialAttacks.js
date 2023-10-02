export default function getSpecialAttacks({...all}) {
    const arrAttacks = [];
    for(let index in all.special) {
        if ('description' in all.special[index]) { 
            arrAttacks.push({...all.special[index]});
        } else {
            arrAttacks.push({...all.special[index], description: 'Описание недоступно'});
        }
    }
    return arrAttacks;
}