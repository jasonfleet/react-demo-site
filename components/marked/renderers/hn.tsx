/**
 * heading renderer
 */
const hn = {
  heading(text: string, level: number) {
    const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');

    return `
      <h${level}>
        ${text}
      </h${level}>`
  }
}

export default hn
