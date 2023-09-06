import { useSelector } from "react-redux"

function CarValue() {
    const totalCost = useSelector(({cars : {data, searchTerm}})=> {
        const filteredCars = data.filter((car) => {
            return car.name.toLowerCase().replace(/\s/g, "").includes(searchTerm.toLowerCase().replace(/\s/g, ""))
        });
        let cost = 0;
        for (let car of filteredCars) {
            cost += car.cost
        }
        return cost;
    });

    return (
        <div className="car-value">
            Total Cost: ${totalCost}
        </div>
    );
};

export default CarValue;