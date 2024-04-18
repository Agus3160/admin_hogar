
export const createSection = async (title:string) => {
  const response = await fetch('/api/sections', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({name:title}),
  })
}