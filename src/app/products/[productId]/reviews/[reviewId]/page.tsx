"use client"
type RouteProps = {
    params:{
        productId:string,
        reviewId:string
    }
}

// function getRandomInt(count:number){
//   return Math.floor(Math.random() * count)
// }

const Review = ({ params }:RouteProps) => {

  // const randomdata = getRandomInt(2) ;

  // if(randomdata===1){
  //   throw new Error("error loading review")
  // }

  return (
    <h3> Review {params.reviewId} for Product {params.productId} </h3>
  )
}

export default Review ;