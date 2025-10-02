import { Link } from "react-router-dom";
import SpaceTravelApi from "../services/SpaceTravelApi";
import { useState } from "react";
// standard example of a 
function SpacecraftForm() {
    const [spacecrafts, setSpacecrafts] = useState([]);

    const [formData, setFormData] = useState({
        name: "",
        capacity: "",
        description: "",
        pictureUrl: "",
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const { name, capacity, description, pictureUrl } = formData;

        const spacecraftData = {
            name,
            capacity,
            description,
            ...(pictureUrl && { pictureUrl }),
        };

        await SpaceTravelApi.buildSpacecraft(spacecraftData);

        setFormData({ name: "", capacity: "", description: "", pictureUrl: "" });
    }

    // input form. Gold, right here.
    return (
        <div>
            {/* <Link /> */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>

                <div>
                    <label>
                        Capacity:
                        <input
                            type="number"
                            name="capacity"
                            value={formData.capacity}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>

                <div>
                    <label>
                        Description:
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>

                <div>
                    <label>
                        Picture URL (optional):
                        <input
                            type="url"
                            name="pictureUrl"
                            value={formData.pictureUrl}
                            onChange={handleChange}
                        />
                    </label>
                </div>

                <button type="submit">Build Spacecraft</button>
            </form>
        </div>
    )
}

export default SpacecraftForm;