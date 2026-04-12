export default function Products(){

const products = [
"Kitchen Chimneys",
"Hobs",
"Cooktops",
"Modular Kitchens",
"Plywood",
"Laminates",
"Modular Furniture"
];

return(

<section className="py-20">

<div className="max-w-6xl mx-auto">

<h2 className="text-3xl font-bold text-center mb-12">
Our Products
</h2>

<div className="grid md:grid-cols-3 gap-8">

{products.map((item,i)=>(
<div key={i} className="p-6 border rounded-xl shadow">

<h3 className="text-xl font-semibold">
{item}
</h3>

</div>
))}

</div>

</div>

</section>

)

}