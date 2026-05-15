import Header from "@/components/Header"
import Footer from "@/components/Footer"
import WhatsappButton from "@/components/WhatsappButton"

export const metadata = {
  title: "Our Projects | Kesarinandan Kitchen Appliances",
  description:
    "Explore completed modular kitchens, sofas, TV units, wardrobes and custom interior projects by Kesarinandan Kitchen Appliances.",
}

export default function GalleryLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <WhatsappButton />
    </>
  )
}