/**
 * Obtiene las etiquetas de un texto HTML.
 * @param html
 * @returns Retorna un array con las etiquetas, que incluyen `<>` y `</>`.
 */
function getHtmlTargets(html: string) {
  const targets: string[] = []
  let index = 0

  while (index < html.length) {
    if (html[index] === "<") {
      const endTarget = html.indexOf(">", index)

      if (endTarget !== -1) {
        const fullTarget = html.slice(index, endTarget + 1)
        targets.push(fullTarget)

        index = endTarget + 1
        continue
      }
    }
    index++
  }
  return targets
}

/**
 * Sustituye las etiquetas numerales (`<0></0>`, `<1></1>`, etc.) de un texto por las etiquetas de una plantilla.
 * El texto y el plantilla han de tener el mismo número de etiquetas.
 * @param template - La plantilla de referencia.
 * @param text - El texto a sustituir.
 */
export function replaceTextTargetsByTemplate(template: string, text: string) {
  if (!text) {
    throw new Error("Text is undefined")
  }
  const targets = getHtmlTargets(template)
  return text.replace(/<(\d+)>(.*?)<\/\1>/g, (_, pos, cont) => {
    const num = parseInt(pos)
    return `${targets[num * 2]}${cont}${targets[num * 2 + 1]}`
  })
}
