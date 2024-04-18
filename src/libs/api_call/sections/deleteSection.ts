
export const deleteSection = async (id:string) => {
  const response = await fetch(`/api/sections/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
}