import { toast } from 'react-toastify'
const NotificationCard = ({ option, text }) => {
  switch (option) {
    case 'success':
      toast.success(`${text}`)
      break
    case 'error':
      toast.error(`${text}`)
      break
    case 'warning':
      toast.warn(`${text}`)
      break
    case 'info':
      toast.info(`${text}`)
      break
    case 'dark':
      toast.dark(`${text}`)
      break
    case 'light':
      toast.light(`${text}`)
      break
    case 'primary':
      toast.primary(`${text}`)
      break
    case 'secondary':
      toast.secondary(`${text}`)
      break
    case 'default':
      toast.default(`${text}`)
      break
    default:
      toast.info(`${text}`)
      break
  }
}

export default NotificationCard
