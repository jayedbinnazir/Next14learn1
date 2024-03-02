import Card from '@/app/components/card'
import Link from 'next/link'

const Notifications = () => {
  return (
    <Card>
        <strong>Notifications</strong>
        <Link href={'/complex-dashboard/archieved'} ><button>Archieved</button></Link>
    </Card>
  )
}

export default Notifications