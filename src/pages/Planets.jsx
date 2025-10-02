import styles from "./Planets.module.css"

function Planets({planets, spacecrafts}) {
    //render planets and map through the array to render all of their data as well
    console.log('planets, spacecrafts', planets, spacecrafts);
    return (
        <div>
            <h3>planets</h3>
            {planets.map((planet) => (
                <div className={styles.displayBox} key={planet.id}>
                    <div className={styles.planetBox}>
                        <img src={planet.pictureUrl} alt={planet.name} />
                        {planet.name}
                        {planet.currentPopulation}
                        {/* So I know I need to filter through the spacecrafts array to get the right spacecrafts to render, but this isn't quite right. I'll come back to it later*/}
                        {spacecrafts.filter(spacecrafts.currentLocation === planet.id)}

                    </div>
                    
                </div>
            ))};
        </div>
    )
}
export default Planets;