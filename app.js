const planes = [
    new permitidos('Fiambres magros de buena marca: (consumo libre) ','Lomito, pastrón, jamón cocido y crudo, arrollado de pollo, pechuga de pavo, etc.	', 'fiambre.jpg'),
    new permitidos ('Vegetales y hortalizas: (consumo libre)','Aceitunas, acelga, achicoria, ají, ajo, alcaucil, apio, berro, berenjena, brócoli, brotes de soja, cebolla, coliflor, chauchas (pocas), champiñones, espárragos, rabanito, radicheta, lechuga, repollo, repollo de Bruselas, rúcula, zucchini, tomates comunes y cherries, zapallito verde, etc. Palta: 1 unidad mediana al día.  Color Naranja (moderado): zanahoria, zapallo, calabaza o calabacín (2 a 3 veces x semana).', 'verdura.jpg'),
    new permitidos('Líquidos (consumo libre)','Mínimo 2 L por día. Agua, soda, café, mate, té (común, manzanilla, boldo, tilo, verde, etc.) limonada (natural) sopas naturales.', 'agua.jpeg')
];

const cargarPlanes = ()=>{
    let planesHTML = '';
    for(let plan of planes){
        planesHTML += crearplanHTML(plan);
    }
    document.getElementById('listado').innerHTML = planesHTML;
}
const crearplanHTML = (plan)=>{
    let planesHTML = `
   <div class="animate__animated animate__fadeInDown">
    <h2><strong> ${plan.comida} </strong></h2>
<p> ${plan.descripcion}</p>
<img src = "image/${plan.image}" width="300" height="150">
<br><br>
</div>
    `;
    return planesHTML;
}
