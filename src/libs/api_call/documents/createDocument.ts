
export const createDocument = async ({title, sectionId, url}:{title:string, sectionId:string, url:string}) => {
  const response = await fetch('/api/documents', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({title:title, sectionId:sectionId, url:url}),
  })
}