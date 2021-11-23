
interface Badge {
    label: string,
    color: string,
    bgColor: string
  };  

const colorPalette:any = {
    grass: 'success',
    poison: 'secondary',
    fire: 'error',
    water: 'primary',
    bug: 'warning',
    normal: 'default'
};

function getBadges(types:any[]):Badge[] {
    const badges: Badge[] = [];
    types.forEach((item:any) => {
        
        badges.push({
            label: item.type.name,
            color: colorPalette[item.type.name]? colorPalette[item.type.name]: 'default',
            bgColor: item.type.name? item.type.name: 'normal',
        })
    });
    return badges;
}
export function transform(list: any) {
    return list.map((item:any) => {
        item.badges = getBadges(item.types);
        return item;
    });
}