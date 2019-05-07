// import * as THREE from 'three';

export default class Tree {
    constructor() {
        this.mesh = this.createTree();
    }

    createTree() {
        const tree = new THREE.Mesh();
        const trunk = this.createTrunk();
        const leaves = this.createLeaves();
        tree.add(trunk);
        tree.add(leaves);
        return tree;
    }

    createTrunk() {
        const trunkGeo = new THREE.CylinderBufferGeometry(5, 5, 10, 6, 1, true)
        const trunkMat = new THREE.MeshPhongMaterial({ color: 0x64320a, flatShading: true })
        return new THREE.Mesh(trunkGeo, trunkMat);
    }

    createLeaves() {
        const leaves = new THREE.Mesh();

        const tierOne = this.createLeavesTier();
        const tierTwo = this.createLeavesTier();
        const tierThree = this.createLeavesTier();
        tierOne.position.y = 10;
        tierTwo.position.y = 16;
        tierThree.position.y = 22;

        tierOne.scale.set(1.25,1.25,1.25)
        tierThree.scale.set(.75,.75,.75)

        leaves.add(tierOne);
        leaves.add(tierTwo);
        leaves.add(tierThree);

        return leaves
    }

    createLeavesTier() {
        const tierGeo = new THREE.CylinderBufferGeometry(0, 10, 15, 6, 1);
        const tierMat = new THREE.MeshPhongMaterial({ color: 0x072c09, flatShading: true });
        const tier = new THREE.Mesh(tierGeo, tierMat);
        tier.castShadow = true;
        return tier;
    }
}
