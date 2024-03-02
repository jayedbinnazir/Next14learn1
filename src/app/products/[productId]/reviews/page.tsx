import Link from "next/link"

const Reviews = ({params}:{params:{ productId:string }}) => {
    const navLinks = [
        {name:'review-1'  , href:`/products/${params.productId}/reviews/1` },
        {name:'review-2'  , href:`/products/${params.productId}/reviews/2` },
        {name:'review-3'  , href:`/products/${params.productId}/reviews/3` },
    ]
  return (
    <div>
        {
            navLinks.map((nav)=>{
                return <h2 key={nav.name} ><Link href={nav.href} >{nav.name}</Link></h2>
            })
        }
    </div>
  )
}

export default Reviews