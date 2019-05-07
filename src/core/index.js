import initialise from './initialise';
import Tree from './meshes/tree';

/**
 * @class: Core
 * The Core class acts as the core of the babylonjs environment. It is in this
 * class that the scene, renderer, camera, controls and lights are all configured
 */
class Core {
    constructor() {
        this.canvas = document.getElementById("renderCanvas");
        this.engine = new BABYLON.Engine(this.canvas, true);
        this.scene = new BABYLON.Scene(this.engine);
        this.camera = new BABYLON.ArcRotateCamera('camera', 1, 0.8, 10, new BABYLON.Vector3(0, 0, 0), this.scene)

        this.init();
        this.animate();
    }




    /**
     * @function: init
     * Initialises the environment. All the pieces of the scene are put
     * together in this function.
     */
    init() {
        this.ui = document.getElementById("ui");
        // ui.appendChild(this.stats.dom);
        this.scene.clearColor = new BABYLON.Color3(0.1,0.1,0.1);

        this.camera.setTarget(BABYLON.Vector3.Zero());
        this.camera.attachControl(this.canvas, false);
        // Create the light
        const light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0,1,0), this.scene);
        light.intensity = 0.2;

        const dLight = new BABYLON.DirectionalLight('DLight', new BABYLON.Vector3(2, -15, 2), this.scene);
        dLight.intensity = 0.5;
        const dLightSphere = new BABYLON.MeshBuilder.CreateSphere('Sun', { segments: 10, diameter: 2 }, this.scene)
        dLightSphere.material = new BABYLON.StandardMaterial("dLight", this.scene);
        dLightSphere.material.emissiveColor = new BABYLON.Color3(1,1,0);
        dLightSphere.position = dLight.position;

        // Creat the sphere
        const sphere = BABYLON.MeshBuilder.CreateSphere('sphere', { segments: 16, diameter: 2 }, this.scene);
        const sphereMat = new BABYLON.StandardMaterial('sphereMat', this.scene);
        sphereMat.diffuseColor = new BABYLON.Color3(1, 0, 1);
        sphere.material = sphereMat;
        sphere.position.y = 1;

        // Create the ground
        const ground = BABYLON.MeshBuilder.CreateGround('ground1', { height: 20, width: 20, subdivisions: 2 }, this.scene);
        const groundMat = new BABYLON.StandardMaterial('GroundMat', this.scene);
        groundMat.diffuseTexture = new BABYLON.Texture('/assets/textures/diffuse/sand.jpg', this.scene);
        // Repeat text along the 'u' and 'v' map axis 
        // groundMat.diffuseTexture.uScale = 3;
        // groundMat.diffuseTexture.vScale = 3;
        groundMat.bumpTexture = new BABYLON.Texture('/assets/textures/normals/sand.png', this.scene);
        groundMat.roughness = 15;
        // groundMat.specularPower = 4;
        groundMat.specularColor = new BABYLON.Color3(0,0,0);
        ground.material = groundMat;
        ground.receiveShadows = true;
        // Create Box
        const box = BABYLON.MeshBuilder.CreateBox('Box', { size: 1 }, this.scene);
        box.position = new BABYLON.Vector3(7, 2, -5);

        const cylinder = BABYLON.MeshBuilder.CreateCylinder('Cylinder', { height: 5, diameterTop: 1, diameterBottom: 1, subdivisions: 10 }, this.scene);
        cylinder.position = new BABYLON.Vector3(5, 0, 5);

        const lines = BABYLON.MeshBuilder.CreateLines('Lines', {
            points: [
                new BABYLON.Vector3(0, 5 ,0),
                new BABYLON.Vector3(1, 5, 0),
                new BABYLON.Vector3(0, 5, 1)
            ],
        }, this.scene);
        lines.position = new BABYLON.Vector3(-6, -3, 6);


        const shadowGenerator = new BABYLON.ShadowGenerator(1024, dLight);
        shadowGenerator.useBlurExponentialShadowMap = true;
        shadowGenerator.addShadowCaster(sphere);

        // Handle the window resizing
        window.addEventListener('resize', () => { this.engine.resize(); });
        console.log("babs scene", this.scene);
    }

    animate() {
        this.engine.runRenderLoop(() => { 
            this.scene.render(); 

            this.ui.innerHTML = this.engine.getFps().toFixed() + " fps";
        });
    }

}

export default Core;
