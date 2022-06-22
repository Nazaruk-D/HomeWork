//Метод Map
type NewComponentType = {
    topCars: Array<CarsType>
}

type CarsType = {
    manufacturer: string,
    model: string
}

export const NewComponent = (props: NewComponentType) => {
    return (
        <table>
            <tr>
                <th>№</th>
                <th>Manufacturer</th>
                <th>Model</th>
            </tr>
            {props.topCars.map((el,index)=> {
                return (
                    <tr>
                        <td>{index+1}</td>
                        <td>{el.manufacturer}</td>
                        <td>{el.model}</td>
                    </tr>
                )
            })}
        </table>
    )
}