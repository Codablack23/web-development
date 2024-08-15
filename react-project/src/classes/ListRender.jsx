


export default function ListRender(){
    const names = ["John", "Amadi", "Peace","James","Thomas","Amaka","John"]
    const namesElements = names.map(name =>{
        return <p className="name-p" key={name}>{name}</p>
    })


    return (
        <div>
            {namesElements}
        </div>
    )
}