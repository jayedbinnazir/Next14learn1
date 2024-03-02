import Link from "next/link"



const page = () => {
    const navLinks = [
        {name:'product-1' , href:'/products/1' },
        {name:'product-2' , href:'/products/2' },
        {name:'product-3' , href:'/products/3' },
    ]
  return (
    <div>
        <h2>List of products</h2>
        {
            navLinks.map((product)=>{
                return <h3 key={product.name} >
                    <Link href={product.href} >{product.name}</Link>
                </h3>
            })
        }
    </div>
  )
}

export default page