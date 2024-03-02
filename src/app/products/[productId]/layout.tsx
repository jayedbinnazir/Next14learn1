'use client'
function getRandomInt(count:number){
    return Math.floor(Math.random() * count)
  }

export default function ProductsLayout({children}:{children:React.ReactNode}){
    const randomdata = getRandomInt(2) ;

  if(randomdata===1){
    throw new Error("error loading Product")
  }

    return (
        <>
            {children}
            <h3>featured product layout</h3>
        </>
    )
}