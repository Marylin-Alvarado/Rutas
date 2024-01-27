import React, { } from "react";

import 'leaflet/dist/leaflet.css';


const Plan = () => {
    return (
        <div div className="plan-emergencia">
            <h1 className="text-center mb-4">PLAN DE EMERGENCIA</h1>
            <h2 className="text-center mb-4">SISMOS</h2>
            <ul>
            <li>1.Si se hace frente a una situación de sismo o terremoto, el personal de la Institución será instruido
                a mantener la calma en todo momento. Pensar con claridad es lo más importante en esos
                momentos</li>
            <li>2.Cuando comiencen los temblores el personal se dirigirá en primera instancia a los puntos de
                concentración o reunión.</li>
            <li>3.En caso de no lograse tal cometido, se desplazarán para protegerse en áreas seguras (marco
                de puertas , debajo de mesas o escritorios fuertes si se esta dentro de oficinas , de no existir
                muebles con esas características, deberán desplazarse hacia una esquina del ambiente o
                pasillo; son válidas también aquellas zonas abiertas , libres de cables eléctricos o escombros ,
                etc.)</li>
            <li>4.En el interior de la edificación colocarse en cuclillas o sentado, agarrado del mueble, cubriéndose
                la cabeza y el rostro. Protegerse de los objetos que puedan caer</li>
            <li>5.El mobiliario de las oficinas se dispondrán de manera tal que permanezca estable durante un
                terremoto.</li>           
            <li>6.Luego del primer temblor las personas deberán estar preparadas para recibir mas sacudidas
                debido a las ondas del choque que siguen al primero. La intensidad puede ser moderada, pero
                aun así causará daños.</li>
            <li>7. La brigada de emergencia, verificará la existencia de heridos. No se moverán las personas con
                heridas graves a menos que estén en peligro. Se realizará los primeros auxilios y se dará
                atención a las reacciones emocionales consecuencia del hecho.</li>
            <li>8. No deberán accionarse interruptores eléctricos.</li>
            <li>9.Se tendrá precauciones con la posible existencia de cristales rotos y cables eléctricos derribados
                e instalaciones dañadas.</li>
            <li>10. No acercarse a ningún punto eléctrico cercano</li>
            <li>11. Se inspeccionará con precaución los mobiliarios, estando atentos a objetos que puedan caer
                súbitamente de los estantes.</li>
            </ul>
        </div>
    );

}
export default Plan;