export default function randomNumber(min: number, max: number): number {
  min = Math.ceil(min)

  return Math.floor(Math.random() * (Math.floor(max) - min + 1)) + min
}
