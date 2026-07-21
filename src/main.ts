import './styles.css'

const app = document.querySelector<HTMLElement>('#app')

if (!app) {
  throw new Error('Pinfall could not find its application root.')
}

app.innerHTML = `
  <section class="intro" aria-labelledby="pinfall-title">
    <p class="eyebrow">Roll one · Score every ball</p>
    <h1 id="pinfall-title"><span aria-hidden="true">▰</span> Pinfall</h1>
    <p class="lede">The playable bowling scorecard is warming up.</p>
    <canvas aria-label="A bowling lane preview" data-lane></canvas>
  </section>
`

const lane = document.querySelector<HTMLCanvasElement>('[data-lane]')
const context = lane?.getContext('2d')

if (!lane || !context) {
  throw new Error('Pinfall could not start its Canvas lane.')
}

function drawLane(): void {
  const bounds = lane.getBoundingClientRect()
  const pixelRatio = window.devicePixelRatio || 1
  lane.width = Math.round(bounds.width * pixelRatio)
  lane.height = Math.round(bounds.height * pixelRatio)
  context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)

  const { width, height } = bounds
  const laneInset = width * 0.1
  context.fillStyle = '#d5a45a'
  context.fillRect(laneInset, 0, width - laneInset * 2, height)
  context.fillStyle = '#f4d995'
  context.fillRect(laneInset + 12, 0, width - laneInset * 2 - 24, height)

  const pinX = width / 2
  const pinY = height * 0.38
  context.fillStyle = '#fff3df'
  context.beginPath()
  context.arc(pinX, pinY, 20, 0, Math.PI * 2)
  context.fill()
  context.fillStyle = '#c84e3a'
  context.fillRect(pinX - 20, pinY - 5, 40, 5)
}

drawLane()
new ResizeObserver(drawLane).observe(lane)
