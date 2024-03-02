
const Card = ({children}:{children:React.ReactNode}) => {
  return (
    <div style={{ 
        padding:'100px',
        margin:'1rem',
        boxShadow:"0 4 8 0 rgba(0,0,0,0.2)",
        border:'1px solid #ddd',
        display:"flex",
        justifyContent:'center',
        alignItems:'centers'
     }} >
        {children}
    </div>
  )
}

export default Card