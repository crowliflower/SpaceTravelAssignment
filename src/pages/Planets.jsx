function Planets({planets}) {
console.log('planets', planets);
    return (
        <div>
            <h3>planets</h3>
            {planets.map((planet) => (
                <li key={planet.id}>
                    {planet.name}
                </li>
            ))};
        </div>
    )
}
export default Planets;