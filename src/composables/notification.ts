export async function useNotification (message: string) {
  const isAllow = await Notification.requestPermission()
  if (!message) throw new Error('Message is invalid')
  if (isAllow === 'granted') {
    new Notification(message)
  }
}
