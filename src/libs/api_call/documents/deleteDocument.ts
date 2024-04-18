
export const deleteDocument = async (id:string) => {
  const response = await fetch(`/api/documents/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
}