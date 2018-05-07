const $ = require('jquery')
const THREE = require('three')
const scene = new THREE.Scene()
const $avatar = $('#avatar')
const width = $avatar.width()
const height = $avatar.height()
const camera = new THREE.PerspectiveCamera(75, width / height, 1, 1000)

camera.position.z = 2
camera.position.y = 0
camera.position.x = -1
camera.lookAt(new THREE.Vector3(0, 0, 0))

scene.add(camera)
const renderer = new THREE.WebGLRenderer({ alpha: true, canvas: $avatar[0] })
renderer.setSize(width, height)
renderer.setClearColor(0x000000, 0)
document.body.appendChild(renderer.domElement)

const topGeometry = new THREE.BoxGeometry(1, 2, 0.2)
const topMaterial = new THREE.MeshBasicMaterial({ color: 0xd8fffc })
// #e0fffc
const topBox = new THREE.Mesh(topGeometry, topMaterial)
scene.add(topBox)
topBox.position.set(0, 0, 0)

function animate () {
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
}

animate()
