
const TopButtons = () => {
    const cities = [
        {
            id:1,
            title: 'London' ,
        },
        {
            id:2,
            title: 'Sydeny' ,
        },
        {
            id:3,
            title: 'Tokyo' ,
        },
        {
            id:4,
            title: 'Toront' ,
        },
        {
            id:5,
            title: 'Parice' ,
        },
    ]
    return (
        <div className="flex justify-around items-center my-6">
            {
                cities.map(items => 
                    <button className="text-white text-lg font-medium " key={items.id}> {items.title} </button>
                )
            }
        </div>
    );
};

export default TopButtons;