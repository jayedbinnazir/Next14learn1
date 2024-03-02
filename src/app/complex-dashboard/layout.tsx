
type ChildrenProps = {
    children:React.ReactNode,
    notifications:React.ReactNode,
    users:React.ReactNode,
    revenue:React.ReactNode,
}

const DashboardLayout = ({children , notifications ,users , revenue}:ChildrenProps) => {
  return (
    <div>
        {children}
        <div style={{ display:'flex', border:'3px solid black'}} >
            <div style={{ display:'flex' , flexDirection:'column' }} >
                <div>{users}</div>
                <div>{revenue}</div>
            </div>
            <div style={{ display:'flex', flex:1 }} >{notifications}</div>
        </div>
    </div>
  )
}

export default DashboardLayout