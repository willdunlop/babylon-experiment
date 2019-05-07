
const initialise = {

    /**
     * @function: configureRenderer
     * @returns: {Object}: renderer
     * sets up and configures the renderer object to be used in the
     * environment.
     */
    configureRenderer() {
        const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;

        return renderer;
    },

    /**
     * @function: configureCamera
     * @returns: {Object}: camera
     * sets up and configures the camera object to be used in the
     * environment.
     */
    configureCamera() {
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(-275,275,250);

        return camera;
    },

    configureLight() {
        const light = new THREE.DirectionalLight(0xffffff, 0.8);
        light.position.set(300, 300, 300)
        light.castShadow = true;
        light.shadow.mapSize.width = 1024;
        light.shadow.mapSize.height = 1024;
        light.shadow.camera.near = 0.5;
        light.shadow.camera.far = 900;
        light.shadow.camera.left = -400;
        light.shadow.camera.right = 400;
        light.shadow.camera.top = 400;
        light.shadow.camera.bottom = -400;

        return light;
    }

}

export default initialise;