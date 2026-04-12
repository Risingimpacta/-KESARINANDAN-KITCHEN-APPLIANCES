import Image from "next/image"

export default function ChimneyGallery(){

const products=[
"/chimney1.jpg",
"/chimney2.jpg",
"/chimney1.jpg",
"/chimney2.jpg"
]

return(

<section className="py-24 bg-gray-50">

<div className="max-w-7xl mx-auto">

<h2 className="text-4xl font-bold text-center mb-14">
Kitchen Chimney Collection
</h2>

<div className="grid md:grid-cols-4 gap-8">

{products.map((img,i)=>(
<div key={i} className="shadow-lg rounded-xl overflow-hidden">

<Image
 src={img}
 width={400}
 height={400}
 alt="Kitchen chimney appliance"
 className="hover:scale-110 transition"
/>

</div>
))}

</div>

</div>

</section>

)

}