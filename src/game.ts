import { isPreviewMode } from '@decentraland/EnvironmentAPI'
import { triggerEmote, PredefinedEmote } from "@decentraland/RestrictedActions"



const building = new Entity()
building.addComponent(new GLTFShape("models/fuego.glb"))
building.addComponent(
  new Transform({
    position: new Vector3(8, 0, 8),
    scale: new Vector3(1, 1, 1),
  })
)

engine.addEntity(building)





const shoes = new Entity()
shoes.addComponent(new GLTFShape("models/shoes.glb"))
shoes.addComponent(
  new Transform({
    position: new Vector3(8, 0, 8),
    scale: new Vector3(1, 1, 1),
  })
)
shoes.addComponent(
  new OnPointerDown(() => {
    openExternalURL("https://market.decentraland.org/contracts/0x7cd58cb897f97019354e23d19f46d15407ce870d/items/0")
  })
)

engine.addEntity(shoes)



const ig = new Entity()
ig.addComponent(new GLTFShape("models/ig.glb"))
ig.addComponent(
  new Transform({
    position: new Vector3(8, 0, 8),
    scale: new Vector3(1, 1, 1),
  })
)
ig.addComponent(
  new OnPointerDown(() => {
    openExternalURL("https://www.instagram.com/fuego.dance/")
  })
)

engine.addEntity(ig)




const tw = new Entity()
tw.addComponent(new GLTFShape("models/tw.glb"))
tw.addComponent(
  new Transform({
    position: new Vector3(8, 0, 8),
    scale: new Vector3(1, 1, 1),
  })
)
tw.addComponent(
  new OnPointerDown(() => {
    openExternalURL("https://twitter.com/Fuego_dance")
  })
)

engine.addEntity(tw)




const lights = new Entity()
lights.addComponent(new GLTFShape("models/lights.glb"))
lights.addComponent(
  new Transform({
    position: new Vector3(8, 0, 8),
    scale: new Vector3(1, 1, 1),
  })
)

engine.addEntity(lights)


const fdance = new Entity()
fdance.addComponent(new GLTFShape("models/fuegodance.glb"))
fdance.addComponent(
  new Transform({
    position: new Vector3(8, 0, 8),
    scale: new Vector3(1, 1, 1),
  })
)

engine.addEntity(fdance)



//NFTs=================================================================================================







//NFTs=================================================================================================

var n=300;
var t = 300;
var jump =0;





class AutoDance {
  // The update() function runs on every frame.
  update() {
    
    Input.instance.subscribe('BUTTON_DOWN', ActionButton.JUMP, false, () => {
      n = t-20;
      jump= 1;})
    Input.instance.subscribe('BUTTON_UP', ActionButton.FORWARD, false, () => {
      if (jump == 1){
        n = t - 10;
      }
      else{
        n = t;
      }})
    Input.instance.subscribe('BUTTON_UP', ActionButton.LEFT, false, () => {
      if (jump == 1){
        n = t - 10;
      }
      else{
        n = t;
      }})
    Input.instance.subscribe('BUTTON_UP', ActionButton.RIGHT, false, () => {
      if (jump == 1){
        n = t - 10;
      }
      else{
        n = t;
      }})
    Input.instance.subscribe('BUTTON_UP', ActionButton.BACKWARD, false, () => {
      if (jump == 1){
        n = t - 10;
      }
      else{
        n = t;
      }})
    if ( n%t ==0 &&
      Camera.instance.position.x <= 15.2 && Camera.instance.position.x >= 1.8
      && Camera.instance.position.z <= 15 && Camera.instance.position.z >=1.5 
      && 2 < Math.sqrt(Math.pow(Camera.instance.position.x - 8.4,2)+
      Math.pow(Camera.instance.position.z - 14.8,2))){
        if(jump == 1){
          jump = 0;
        }
        if(Camera.instance.position.y > 10 && Camera.instance.position.y <10.6){
          triggerEmote({ predefined: PredefinedEmote.DISCO })
          t= 300;
          
        }
        else if(Camera.instance.position.y > 10.8){
          triggerEmote({ predefined: PredefinedEmote.TEKTONIK})
          t = 305;
        }
        n =0;
      }
      n+=1;

  }
}
engine.addSystem(new AutoDance())


  //VIDEO==================================================================================
  /*
  const myVideoClip = new VideoClip(
    //"https://ipfs.io/ipfs/bafybeifffz6ejfpkfddfc2h6k23xflntanw4vhdjcyoldu5xsdrsntdzbq/video.mp4")
  
  
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
source.loop = true*/