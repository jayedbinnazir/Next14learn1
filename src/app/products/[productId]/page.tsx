


const FeaturedProduct = ({params}:{ params:{
    productId:string
} }) => {

  

  return (
    <h3>
        Details About Prouct -{params.productId}
    </h3>
  )
}

export default FeaturedProduct