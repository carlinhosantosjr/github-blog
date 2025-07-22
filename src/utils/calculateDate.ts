export function calculateDate(date:string) {
  const postDate = new Date(date)
  const currentDate = new Date()
  const differenceMiliseconds = currentDate.getTime() - postDate.getTime()
  const diferencaEmDias =
  Math.floor(differenceMiliseconds / (1000 * 60 * 60 * 24))
  return diferencaEmDias.toString()
}
