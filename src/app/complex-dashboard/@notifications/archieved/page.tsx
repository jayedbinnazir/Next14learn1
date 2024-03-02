import Card from '@/app/components/card'
import Link from 'next/link'

const Archieved = () => {
  return (
    <Card>
        <strong> Archieved Notifications</strong>
        <Link href={'/complex-dashboard'} ><button>Default</button></Link>
    </Card>
  )
}

export default Archieved