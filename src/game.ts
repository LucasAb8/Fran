const building = new Entity()
building.addComponent(new GLTFShape("models/bil.glb"))
building.addComponent(
  new Transform({
    position: new Vector3(8, 0, 8),
    scale: new Vector3(1, 1, 1),
  })
)

engine.addEntity(building)

const eye = new Entity()
eye.addComponent(new GLTFShape("models/ojo.glb"))
eye.addComponent(
  new Transform({
    position: new Vector3(8, 0, 8),
    scale: new Vector3(1, 1, 1),
  })
)

engine.addEntity(eye)

const eye2 = new Entity()
eye2.addComponent(new GLTFShape("models/ojo.glb"))
eye2.addComponent(
  new Transform({
    position: new Vector3(8, -0.5, 8),
    scale: new Vector3(0.9, 1, 0.9),
  })
)

engine.addEntity(eye2)




//NFTs=================================================================================================


const c1 = new Entity()
c1.addComponent(new GLTFShape("models/c1.glb"))
c1.addComponent(
  new Transform({
    position: new Vector3(10.5, 0,8 ),
    scale: new Vector3(1, 1, 1),
  })
)
c1.addComponent(
  new OnPointerDown((e) => {
    openNFTDialog(
      "ethereum://0x85d39cea74b0baba54d7fd0df42dd3e6e39b1625/3615"
    )
  })
)
engine.addEntity(c1)



const c2 = new Entity()
c2.addComponent(new GLTFShape("models/c2.glb"))
c2.addComponent(
  new Transform({
    position: new Vector3(10.5, 0, 8),
    scale: new Vector3(1, 1, 1),
  })
)
c2.addComponent(
  new OnPointerDown((e) => {
    openNFTDialog(
      "ethereum://0x85d39cea74b0baba54d7fd0df42dd3e6e39b1625/3615"
    )
  })
)
engine.addEntity(c2)




const c3 = new Entity()
c3.addComponent(new GLTFShape("models/c3.glb"))
c3.addComponent(
  new Transform({
    position: new Vector3(10.5, 0, 8),
    scale: new Vector3(1, 1, 1),
  })
)
c3.addComponent(
  new OnPointerDown((e) => {
    openNFTDialog(
      "ethereum://0x85d39cea74b0baba54d7fd0df42dd3e6e39b1625/3615"
    )
  })
)
engine.addEntity(c3)



const c4 = new Entity()
c4.addComponent(new GLTFShape("models/c4.glb"))
c4.addComponent(
  new Transform({
    position: new Vector3(10.5, 0, 8),
    scale: new Vector3(1, 1, 1),
  })
)
c4.addComponent(
  new OnPointerDown((e) => {
    openNFTDialog(
      "ethereum://0x85d39cea74b0baba54d7fd0df42dd3e6e39b1625/3615"
    )
  })
)
engine.addEntity(c4)








const c5 = new Entity()
c5.addComponent(new GLTFShape("models/c5.glb"))
c5.addComponent(
  new Transform({
    position: new Vector3(6, 0, 8),
    scale: new Vector3(1, 1, 1),
  })
)
c5.addComponent(
  new OnPointerDown((e) => {
    openNFTDialog(
      "ethereum://0x85d39cea74b0baba54d7fd0df42dd3e6e39b1625/3615"
    )
  })
)
engine.addEntity(c5)



const c6 = new Entity()
c6.addComponent(new GLTFShape("models/c6.glb"))
c6.addComponent(
  new Transform({
    position: new Vector3(6, 0, 8),
    scale: new Vector3(1, 1, 1),
  })
)
c6.addComponent(
  new OnPointerDown((e) => {
    openNFTDialog(
      "ethereum://0x85d39cea74b0baba54d7fd0df42dd3e6e39b1625/3615"
    )
  })
)
engine.addEntity(c6)




const c7 = new Entity()
c7.addComponent(new GLTFShape("models/c7.glb"))
c7.addComponent(
  new Transform({
    position: new Vector3(6, 0, 8),
    scale: new Vector3(1, 1, 1),
  })
)
c7.addComponent(
  new OnPointerDown((e) => {
    openNFTDialog(
      "ethereum://0x85d39cea74b0baba54d7fd0df42dd3e6e39b1625/3615"
    )
  })
)
engine.addEntity(c7)







const c8 = new Entity()
c8.addComponent(new GLTFShape("models/c8.glb"))
c8.addComponent(
  new Transform({
    position: new Vector3(6, 0, 8),
    scale: new Vector3(1, 1, 1),
  })
)
c8.addComponent(
  new OnPointerDown((e) => {
    openNFTDialog(
      "ethereum://0x85d39cea74b0baba54d7fd0df42dd3e6e39b1625/3615"
    )
  })
)
engine.addEntity(c8)





//NFTs=================================================================================================

const canvas = new UICanvas()
const text = new UIText(canvas)
const text2 = new UIText(canvas)
const text3 = new UIText(canvas)


text.positionY=0
text3.positionY=20
text2.positionY=40

text.value=<string><unknown>Camera.instance.position.x
text2.value=<string><unknown>Camera.instance.position.y 
text3.value=<string><unknown>Camera.instance.position.z 



export class RotatorSystem {
  // The update() function runs on every frame.
  update() {
    text.value=<string><unknown>Camera.instance.position.x
    text2.value=<string><unknown>Camera.instance.position.y 
    text3.value=<string><unknown>Camera.instance.position.z 
    }
  }
  engine.addSystem(new RotatorSystem())
  


  
  
  //VIDEO==================================================================================
  
  const myVideoClip = new VideoClip(
    "https://ipfs.io/ipfs/bafybeifffz6ejfpkfddfc2h6k23xflntanw4vhdjcyoldu5xsdrsntdzbq/video.mp4")
  
  
  const myVideoTexture = new VideoTexture(myVideoClip)
  
  
  const myMaterial = new Material()
  myMaterial.albedoTexture = myVideoTexture
myMaterial.roughness = 1.0
myMaterial.specularIntensity = 0
myMaterial.metallic = 0
myMaterial.emissiveTexture = myVideoTexture
myMaterial.emissiveColor = Color3.White()
myMaterial.emissiveIntensity = 0.6
  
  
  
  const screen = new Entity()
  screen.addComponent(new PlaneShape())
  screen.addComponent(
    new Transform({
      position: new Vector3(8.5, 11.5, 1.3),
      scale: new Vector3(8,4.5,1)
    })
  )
  screen.addComponent(myMaterial)

  engine.addEntity(screen)
  
  
  myVideoTexture.play()
  myVideoTexture.loop=true

// Create entity
const cube = new Entity()

// Create AudioClip object, holding audio file
const clip = new AudioClip("sound/dj.mp3")

// Create AudioSource component, referencing `clip`
const source = new AudioSource(clip)

// Add AudioSource component to entity
building.addComponent(source)

// Play sound
source.playing = true
source.loop = true