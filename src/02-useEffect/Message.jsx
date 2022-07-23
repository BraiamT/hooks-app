import { useEffect, useState } from "react"

export const Message = () => {

    const [coords, setCoords] = useState({ x:0, y:0 });

    // Nunca hacer cambios de state a un componente que no está montado
    useEffect(() => {
        const onMouseMove = ({ x, y }) => {
            // const coords = { x, y }
            setCoords({ x, y });
        }

        window.addEventListener( 'mousemove', onMouseMove);

        return () => {
            window.removeEventListener( 'mousemove', onMouseMove);
        }
    }, [])

    return (
        <>
            <p><i>Ups, ¡este usuario ya existe!</i></p>
            { JSON.stringify(coords) }
        </>
    )
}
