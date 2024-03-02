"use client"
const ErrorBoundary = ({error , reset }:{error:Error , reset:()=>void}) => {
  return (
    <div>
        <h2>{error.message}</h2>
        <button onClick={reset} >Try agin</button>
    </div>
  )
}

export default ErrorBoundary;