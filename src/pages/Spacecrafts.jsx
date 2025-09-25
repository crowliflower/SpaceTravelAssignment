function Spacecrafts({spacecrafts}) {

    return (
        <div>
            <h2>Spacecrafts</h2>
            {spacecrafts.map((spacecraft) => (
                <li key={spacecraft.id}>
                    <h3>{spacecraft.name}</h3>
                    <p>{spacecraft.capacity}</p>
                    <p>{spacecraft.description}</p>
                    <img src={spacecraft.pictureUrl} alt={spacecraft.name} />
                </li>
            ))};
        </div>
    )
}

export default Spacecrafts;