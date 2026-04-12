import Image from "next/image"

export default function Hero() {

return (

<section className="h-screen bg-black flex items-center">

<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">

<div>

<h1 className="text-6xl font-bold text-white leading-tight">

Luxury Kitchen <br/>
<span className="text-red-500">
Appliances
</span>

</h1>

<p className="mt-6 text-gray-300 text-lg">

Premium chimneys, cooktops and modular
kitchen solutions designed for modern homes.

</p>

<div className="mt-8 flex gap-4">

<a
href="/products"
className="bg-red-600 text-white px-6 py-3 rounded-lg"
>
Explore Products
</a>

<a
href="https://wa.me/919511629883"
className="border border-white text-white px-6 py-3 rounded-lg"
>
Chat Now
</a>

</div>

</div>

<Image
 src="/kitchen1.jpg"
 width={700}
 height={500}
 alt="Luxury modular kitchen design"
 className="rounded-2xl shadow-2xl"
/>

</div>

</section>

)

}