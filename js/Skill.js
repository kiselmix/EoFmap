const data = {
            nodes: [
                {id: 1, x: 100, y: 50, color: 'green', active: true, image: 'skill/start.png', description: 'The initial core is always active'},
                {id: 2, x: 100, y: 150, color: 'red', active: false, image: 'skill/1.png', video: './skill/Slowing Area.mp4', description: 'Slowing Area <br>ACTIVE ABILITY <br>Cooldown: 155 <br>Cost: 18 energy <br>Status Effect: Slowed Movement (15) <br>A cloud appears around the player current position. Enemies in the cloud are slowed down. Duration 7s.'},
                {id: 3, x: 100, y: 250, color: 'blue', active: false, image: 'skill/6.png', description: 'Increases critical damage chance by +3%. <br>Reduces weapon spray while moving - 3%.'},
                {id: 4, x: -50, y: 300, color: 'purple', active: false, image: 'skill/6.png', description: 'Increases critical damage chance by +3%. <br>Reduces weapon spray while moving - 3%.'},
                {id: 5, x: 50, y: 400, color: 'orange', active: false, image: 'skill/9.png', video: './skill/Explosion Sequence.mp4', description: 'Explosion Sequence <br>ACTIVE ABILITY <br>Cooldown: 175 <br>Cost: 22 energy <br>AOE Damage: 214 Physical <br>An explosion appear near the player and triggers a chain of explosions towards a cursor position. Each explosion is bigger than the last one and deals AoE damage. A total of 6 explosions gets triggered.'},
                {id: 6, x: 0, y: 170, color: 'yellow', active: false, image: 'skill/30.png', description: 'Increase weapon accuracy +8'},
                {id: 7, x: 200, y: 170, color: 'yellow', active: false, image: 'skill/6.png', description: 'Increases critical damage chance by +3%. <br>Reduces weapon spray while moving - 3%.'},
                {id: 8, x: 300, y: 150, color: 'yellow', active: false, image: 'skill/18.png', description: 'Increases weapon attack speed -10%'},
                {id: 9, x: 175, y: 325, color: 'blue', active: false, image: 'skill/6.png', description: 'Increases critical damage chance by +3%. <br>Reduces weapon spray while moving - 3%.'},
                {id: 10, x: 350, y: 225, color: 'yellow', active: false, image: 'skill/29.png', description: 'Decreases energy cost required to cast an ability -5%'},
                {id: 11, x: 275, y: 250, color: 'yellow', active: false, image: 'skill/23.png', video: './skill/videoplayback.mp4', description: 'Tesla Coil <br>ACTIVE ABILITY <br>Cooldown: 225 <br>Cost: 35 energy <br>Projectile Damage: 427 Physical <br>Status Effect: Stun (0,8s) <br>Short wind-up. The character cannot move/turn while wind-upping. Fires a fast moving narrow tesla coil projectile. Tesla Coil pierces all targets in a line. Targets receive lots of DMG + stun debuff.'},
                {id: 12, x: 375, y: 400, color: 'yellow', active: false, image: 'skill/6.png', description: 'Increases critical damage chance by +3%. <br>Reduces weapon spray while moving - 3%.'},
                {id: 13, x: 325, y: 500, color: 'yellow', active: false, image: 'skill/8.png', description: 'Increases dodge chance +3%'},
                {id: 14, x: 200, y: 600, color: 'yellow', active: false, image: 'skill/7.png', description: 'Increase the amount of damage dealt on critical strike +15%'},
                {id: 15, x: 100, y: 650, color: 'yellow', active: false, image: 'skill/26.png', description: 'Accuracy penalty while moving is reduced by -50%'},
                {id: 16, x: 0, y: 600, color: 'yellow', active: false, image: 'skill/6.png', description: 'Increases critical damage chance by +3%. <br>Reduces weapon spray while moving - 3%.'},
                {id: 17, x: 100, y: 525, color: 'yellow', active: false, image: 'skill/17.png', video: './skill/videoplayback.mp4', description: 'Rapid Fire <br>ACTIVE ABILITY <br>Cooldown: 155 <br>Cost: 50 energy <br>Projectile Damage: 54 Physical <br>Launches multiple bullets into the cursor position. Characters hit with the bullet get Physical DMG.'},
                {id: 18, x: -125, y: 500, color: 'yellow', active: false, image: 'skill/18.png', description: 'Increases weapon attack speed -10%'},
                {id: 19, x: -175, y: 400, color: 'yellow', active: false, image: 'skill/8.png', description: 'Increases dodge chance +3%'},
                {id: 20, x: -100, y: 150, color: 'yellow', active: false, image: 'skill/16.png', description: 'Increase critical strike chance +5%'},
                {id: 21, x: -100, y: 50, color: 'green', active: false, image: 'skill/4.png', description: 'Increases health by +90 <br>Increases maximum carry weight by +3'},
                {id: 22, x: -150, y: 250, color: 'yellow', active: false, image: 'skill/12.png', description: 'Increases physical damage dealt +3%'},
                {id: 23, x: -275, y: 400, color: 'yellow', active: false, image: 'skill/36.png', description: '+10% crit chance when not moving.'},
                {id: 24, x: -275, y: 300, color: 'purple', active: false, image: 'skill/6.png', description: 'Increases critical damage chance by +3%. <br>Reduces weapon spray while moving - 3%.'},
                {id: 25, x: -375, y: 300, color: 'purple', active: false, image: 'skill/5.png', description: 'Increases armor +3%'},
                {id: 26, x: -425, y: 375, color: 'purple', active: false, image: 'skill/25.png', description: 'Increases weapon attack speed by +5%. <br>Increases physical damage dealt by +5%. <br>Increases armor by +5%.'},
                {id: 27, x: -300, y: 200, color: 'purple', active: false, image: 'skill/4.png', description: 'Increases health by +90 <br>Increases maximum carry weight by +3'},
                {id: 28, x: -225, y: 150, color: 'purple', active: false, image: 'skill/7.png', description: 'Increase the amount of damage dealt on critical strike +15%'},
                {id: 29, x: -225, y: 50, color: 'purple', active: false, image: 'skill/15.png', video: './skill/videoplayback.mp4', description: 'Sludge <br>ACTIVE ABILITY <br>Cooldown: 175 <br>Cost: 18 energy AoE Damage: 22 Physical <br>Status Effect: Slowed Movement (15)<br>Launches a ballistic projectile to a cursor position. After hitting the ground, the projectile explodes and creates a toxic puddle. Enemies in the puddle receive small damage over time and their movement is slightly slowed down.'},
                {id: 100, x: 200, y: 0, color: 'cyan', active: false, image: 'skill/3.png', video: './skill/Ball Lightning.mp4', description: 'Ball Lightning <br>ACTIVE ABILITY <br>Cooldown: 155 <br>Cost: 35 energy <br>AOE Damage: 222 Physical <br>The player casts a ball of lightning that goes straight to the cursor position and explodes after x meters or when it hits a wall.'},
                {id: 101, x: 300, y: 50, color: 'yellow', active: false, image: 'skill/34.png', description: 'Increases energy capacity +10'},
                {id: 102, x: 200, y: -100, color: 'cyan', active: false, image: 'skill/22.png', description: 'Increases energy capacity by +6. <br>Reduces player ability cooldown by -2%.'},
                {id: 103, x: 375, y: -50, color: 'yellow', active: false, image: 'skill/22.png', description: 'Increases energy capacity by +6. <br>Reduces player ability cooldown by -2%.'},
                {id: 104, x: 375, y: -150, color: 'yellow', active: false, image: 'skill/22.png', description: 'Increases energy capacity by +6. <br>Reduces player ability cooldown by -2%.'},
                {id: 105, x: 450, y: 25, color: 'yellow', active: false, image: 'skill/22.png', description: 'Increases energy capacity by +6. <br>Reduces player ability cooldown by -2%.'},
                {id: 106, x: 450, y: 125, color: 'yellow', active: false, image: 'skill/21.png', description: 'Decreases abilities cooldown  -5%'},
                {id: 107, x: 525, y: -75, color: 'yellow', active: false, image: 'skill/24.png', video: './skill/videoplayback.mp4' , description: 'Slow Cluster <br>ACTIVE ABILITY <br>Cooldown: 145 <br>Cost: 15 energy <br>AoE Damage: 189 Physical <br>Status Effect: SlowedMovement (75) <br>Launches ballistic projectile to the cursor position. Upon hitting the ground, the projectile explodes slowing down enemies, and spreads into 12 little shards 360 degrees radius around the explosion (shards travel in straight trajectories). An enemy hit by a shard is also slowed down.'},
                {id: 108, x: 600, y: 25, color: 'yellow', active: false, image: 'skill/27.png', description: 'Increases shield capacity +2'},
                {id: 109, x: 700, y: -75, color: 'yellow', active: false, image: 'skill/30.png', description: 'Increase weapon accuracy +8'},
                {id: 110, x: 725, y: -175, color: 'yellow', active: false, image: 'skill/22.png', description: 'Increases energy capacity by +6. <br>Reduces player ability cooldown by -2%.'},
                {id: 111, x: 750, y: -325, color: 'yellow', active: false, image: 'skill/28.png', description: 'Deal 10% more physical damage when shield is full.'},
                {id: 112, x: 650, y: -400, color: 'yellow', active: false, image: 'skill/27.png', description: 'Increases shield capacity +2'},
                {id: 113, x: 650, y: -275, color: 'yellow', active: false, image: 'skill/33.png', video: './skill/videoplayback.mp4', description: 'Rocket Shower <br>ACTIVE ABILITY <br>Cooldown: 355 <br>Cost: 45 energy <br>AOE Damage: 111 Physical <br>Launches multiple rockets that deal damage in a large circular area (8m radius). Lasts around 4s.'},
                {id: 114, x: 500, y: -450, color: 'yellow', active: false, image: 'skill/12.png', description: 'Increases physical damage dealt +3%'},
                {id: 115, x: 350, y: -400, color: 'yellow', active: false, image: 'skill/22.png', description: 'Increases energy capacity by +6. <br>Reduces player ability cooldown by -2%.'},
                {id: 116, x: 650, y: 125, color: 'yellow', active: false, image: 'skill/31.png', description: 'When health drops below 20%, ability cooldown is reduced by -40%.'},
                {id: 117, x: 550, y: 175, color: 'yellow', active: false, image: 'skill/22.png', description: 'Increases energy capacity by +6. <br>Reduces player ability cooldown by -2%.'},
                {id: 118, x: 475, y: 275, color: 'yellow', active: false, image: 'skill/6.png', description: 'Increases critical damage chance by +3%. <br>Reduces weapon spray while moving - 3%.'},
                {id: 119, x: 600, y: 275, color: 'yellow', active: false, image: 'skill/12.png', description: 'Increases physical damage dealt +3%'},
                {id: 120, x: 675, y: 325, color: 'yellow', active: false, image: 'skill/35.png', description: 'Increases dodge chance by +5. <br>Increases energy capacity by +5%. <br>Increases critical strike chance by +5%.'},
                {id: 200, x: 0, y: 0, color: 'yellow', active: false, image: 'skill/2.png', video: './skill/Grenade.mp4', description: 'Grenade <br>ACTIVE ABILITY <br>Cooldown: 125 <br>Cost: 25 energy <br>AoE Damage: 171 Physical <br>Launches a ballistic grenade into the cursors position. Upon hitting the ground, the grenade explodes dealing damage to enemies.'},
                {id: 201, x: 0, y: -100, color: 'yellow', active: false, image: 'skill/5.png', description: 'Increases armor +3%'},
                {id: 202, x: 100, y: -175, color: 'yellow', active: false, image: 'skill/32.png', description: 'Increases maximum health +80'},
                {id: 203, x: -100, y: -150, color: 'yellow', active: false, image: 'skill/4.png', description: 'Increases health by +90 <br>Increases maximum carry weight by +3'},
                {id: 204, x: -175, y: -100, color: 'yellow', active: false, image: 'skill/4.png', description: 'Increases health by +90 <br>Increases maximum carry weight by +3'},
                {id: 205, x: -100, y: -250, color: 'yellow', active: false, image: 'skill/4.png', description: 'Increases health by +90 <br>Increases maximum carry weight by +3'},
                {id: 206, x: -200, y: -250, color: 'yellow', active: false, image: 'skill/13.png', video: './skill/videoplayback.mp4' , description: 'Concussion Grenade <br>ACTIVE ABILITY <br>Cooldown: 115 <br>Cost: 18 energy <br>Status Effect: Stun (1,3s) <br>Launches a ballistic grenade. Upon hitting the ground, the grenade explodes stunning all enemies that stand in the explosion area.'},
                {id: 207, x: 25, y: -275, color: 'yellow', active: false, image: 'skill/5.png', description: 'Increases armor +3%'},
                {id: 208, x: 175, y: -275, color: 'yellow', active: false, image: 'skill/29.png', description: 'Decreases energy cost required to cast an ability -5%'},
                {id: 209, x: 25, y: -375, color: 'yellow', active: false, image: 'skill/4.png', description: 'Increases health by +90 <br>Increases maximum carry weight by +3'},
                {id: 210, x: 175, y: -375, color: 'yellow', active: false, image: 'skill/22.png', description: 'Increases energy capacity by +6. <br>Reduces player ability cooldown by -2%.'},
                {id: 211, x: 100, y: -475, color: 'yellow', active: false, image: 'skill/21.png', description: 'Decreases abilities cooldown  -5%'},
                {id: 212, x: 100, y: -575, color: 'yellow', active: false, image: 'skill/20.png', description: 'Increases shield capacity by +5. <br>Increases health by +5%. <br>Reduces energy cost by -5%.'},
                {id: 213, x: -50, y: -475, color: 'yellow', active: false, image: 'skill/19.png', description: 'When health drops to 20% or below, damage dealt increases by +20%'},
                {id: 214, x: -150, y: -375, color: 'yellow', active: false, image: 'skill/18.png', description: 'Increases weapon attack speed -10%'},
                {id: 215, x: -300, y: -450, color: 'yellow', active: false, image: 'skill/5.png', description: 'Increases armor +3%'},
                {id: 216, x: -450, y: -400, color: 'yellow', active: false, image: 'skill/4.png', description: 'Increases health by +90 <br>Increases maximum carry weight by +3'},
                {id: 217, x: -450, y: -275, color: 'yellow', active: false, image: 'skill/10.png', video: './skill/Lava Ball.mp4', description: 'Lava Ball <br>ACTIVE ABILITY <br>Cooldown: 185 <br>Cost: 55 energy <br>AoE Damage: 452 Physical <br>Launches a ballistic lava ball to the cursor position. Lava ball explosion deals AoE damage and creates 6 mini lava shards that shoot into the nearby ground and create small lava puddles. Lava puddles deal damage over time.'},
                {id: 218, x: -550, y: -325, color: 'yellow', active: false, image: 'skill/11.png', description: 'Gain +10% damage when energy is full.'},
                {id: 219, x: -525, y: -175, color: 'yellow', active: false, image: 'skill/12.png', description: 'Increases physical damage dealt +3%'},
                {id: 220, x: -475, y: -50, color: 'yellow', active: false, image: 'skill/5.png', description: 'Increases armor +3%'},
                {id: 221, x: -375, y: 100, color: 'yellow', active: false, image: 'skill/4.png', description: 'Increases health by +90 <br>Increases maximum carry weight by +3'},
                {id: 222, x: 250, y: -225, color: 'yellow', active: false, image: 'skill/14.png', video: './skill/videoplayback.mp4', description: 'Detonating Bugs <br>ACTIVE ABILITY <br>Cooldown: 275 <br>Cost: 31 energy <br>Spawn 6 detonating bugs that follow enemies. If a bug is near the enemy or if the 12s cooldown passes, detonating bug explodes dealing damage to the nearby enemies.'},
            ],
            links: [
                {from: 1, to: 2},
                {from: 2, to: 3},
                {from: 3, to: 2},
                {from: 3, to: 4},
                {from: 4, to: 5},
                {from: 4, to: 22},
                {from: 2, to: 6},
                {from: 6, to: 2},
                {from: 2, to: 7},
                {from: 7, to: 2},
                {from: 7, to: 8},
                {from: 8, to: 101},
                {from: 3, to: 9},
                {from: 8, to: 10},
                {from: 10, to: 11},
                {from: 10, to: 12},
                {from: 12, to: 13},
                {from: 13, to: 14},
                {from: 14, to: 15},
                {from: 15, to: 16},
                {from: 15, to: 14},
                {from: 19, to: 18},
                {from: 14, to: 17},
                {from: 17, to: 16},
                {from: 16, to: 18},
                {from: 16, to: 15},
                {from: 16, to: 17},
                {from: 18, to: 19},
                {from: 4, to: 19},
                {from: 6, to: 20},
                {from: 20, to: 21},
                {from: 22, to: 4},
                {from: 20, to: 22},
                {from: 22, to: 24},
                {from: 19, to: 23},
                {from: 23, to: 24},
                {from: 24, to: 25},
                {from: 25, to: 26},
                {from: 25, to: 27},
                {from: 27, to: 28},
                {from: 20, to: 28},
                {from: 28, to: 29},
                {from: 28, to: 221},
                {from: 8, to: 106},
                {from: 10, to: 118},
                {from: 8, to: 7},
                {from: 14, to: 15},
                {from: 14, to: 13},
                {from: 17, to: 14},
                {from: 13, to: 12},
                {from: 18, to: 16},
                {from: 12, to: 10},
                {from: 10, to: 8},
                {from: 19, to: 4},
                {from: 4, to: 3},
                {from: 22, to: 20},
                {from: 23, to: 19},
                {from: 24, to: 22},
                {from: 25, to: 24},
                {from: 27, to: 25},
                {from: 28, to: 27},
                {from: 28, to: 20},
                {from: 20, to: 6},
                {from: 21, to: 20},
                {from: 21, to: 200},
                {from: 24, to: 23},
                {from: 1, to: 100},
                {from: 100, to: 101},
                {from: 100, to: 102},
                {from: 102, to: 100},
                {from: 102, to: 202},
                {from: 101, to: 103},
                {from: 103, to: 104},
                {from: 103, to: 105},
                {from: 105, to: 106},
                {from: 105, to: 107},
                {from: 105, to: 108},
                {from: 108, to: 109},
                {from: 109, to: 110},
                {from: 110, to: 111},
                {from: 111, to: 112},
                {from: 112, to: 113},
                {from: 110, to: 113},
                {from: 112, to: 114},
                {from: 114, to: 115},
                {from: 115, to: 208},
                {from: 108, to: 116},
                {from: 116, to: 117},
                {from: 106, to: 117},
                {from: 117, to: 119},
                {from: 118, to: 119},
                {from: 119, to: 120},
                {from: 113, to: 112},
                {from: 106, to: 8},
                {from: 101, to: 8},
                {from: 119, to: 118},
                {from: 117, to: 116},
                {from: 106, to: 105},
                {from: 115, to: 114},
                {from: 114, to: 112},
                {from: 112, to: 111},
                {from: 111, to: 110},
                {from: 113, to: 110},
                {from: 110, to: 109},
                {from: 109, to: 108},
                {from: 108, to: 105},
                {from: 101, to: 100},
                {from: 116, to: 108},
                {from: 117, to: 106},
                {from: 119, to: 117},
                {from: 105, to: 103},
                {from: 103, to: 101},
                {from: 118, to: 10},
                {from: 1, to: 200},
                {from: 200, to: 21},
                {from: 200, to: 201},
                {from: 201, to: 202},
                {from: 201, to: 200},
                {from: 201, to: 203},
                {from: 203, to: 204},
                {from: 203, to: 205},
                {from: 205, to: 206},
                {from: 205, to: 207},
                {from: 202, to: 207},
                {from: 202, to: 208},
                {from: 207, to: 209},
                {from: 208, to: 210},
                {from: 210, to: 211},
                {from: 209, to: 211},
                {from: 211, to: 212},
                {from: 209, to: 213},
                {from: 205, to: 214},
                {from: 213, to: 214},
                {from: 214, to: 215},
                {from: 215, to: 216},
                {from: 216, to: 217},
                {from: 216, to: 218},
                {from: 218, to: 219},
                {from: 217, to: 219},
                {from: 219, to: 220},
                {from: 220, to: 221},
                {from: 208, to: 222},
                {from: 208, to: 202},
                {from: 202, to: 201},
                {from: 202, to: 102},
                {from: 208, to: 115},
                {from: 221, to: 28},
                {from: 221, to: 220},
                {from: 220, to: 219},
                {from: 219, to: 217},
                {from: 219, to: 218},
                {from: 217, to: 216},
                {from: 218, to: 216},
                {from: 216, to: 215},
                {from: 215, to: 214},
                {from: 214, to: 205},
                {from: 214, to: 213},
                {from: 213, to: 209},
                {from: 209, to: 207},
                {from: 207, to: 205},
                {from: 207, to: 202},
                {from: 205, to: 203},
                {from: 203, to: 201},
                {from: 210, to: 208},
                {from: 211, to: 209},
                {from: 211, to: 210},
            ]
        };

        const svg = document.getElementById('talentTree');
        const treeGroup = document.getElementById('treeGroup');
        const nodes = data.nodes;
        const links = data.links;

       
        const minX = Math.min(...nodes.map(n => n.x));
        const maxX = Math.max(...nodes.map(n => n.x));
        const minY = Math.min(...nodes.map(n => n.y));
        const maxY = Math.max(...nodes.map(n => n.y));
        const width = maxX - minX + 150; 
        const height = maxY - minY + 150;
        const zoom_min = Math.min(1000 / width, 800 / height);

        let zoom = zoom_min; 
        let panX = 0;
        let panY = 0;
        let isPanning = false;
        let lastMouseX, lastMouseY;

        function updatePanForZoom() {
            const centerX = (minX + maxX) / 2;
            const centerY = (minY + maxY) / 2;
            panX = (500 / zoom) - centerX;
            panY = (400 / zoom) - centerY;
        }

        function updateTransform() {
            treeGroup.setAttribute('transform', `scale(${zoom}) translate(${panX},${panY})`);
        }

        updatePanForZoom(); 
        updateTransform();

        
        function clampPan() {
            if (zoom === zoom_min) {
                const viewWidth = 1000 / zoom;
                const viewHeight = 800 / zoom;
                panX = Math.max(-minX, Math.min(panX, viewWidth - maxX));
                panY = Math.max(-minY, Math.min(panY, viewHeight - maxY));
            }
        }

        svg.addEventListener('mousedown', (e) => {
            if (e.button === 0) {
                isPanning = true;
                lastMouseX = e.clientX;
                lastMouseY = e.clientY;
                svg.style.cursor = 'grabbing';
            }
        });

        svg.addEventListener('mousemove', (e) => {
            if (isPanning) {
                const dx = e.clientX - lastMouseX;
                const dy = e.clientY - lastMouseY;
                panX += dx / zoom;
                panY += dy / zoom;
                clampPan(); 
                lastMouseX = e.clientX;
                lastMouseY = e.clientY;
                updateTransform();
            }
        });

        svg.addEventListener('mouseup', () => {
            isPanning = false;
            svg.style.cursor = 'grab';
        });

        svg.addEventListener('wheel', (e) => {
            e.preventDefault();
            const zoomFactor = 0.1;
            const delta = e.deltaY > 0 ? -zoomFactor : zoomFactor;
            const oldZoom = zoom;
            zoom += delta;
            zoom = Math.max(zoom_min, Math.min(2, zoom)); 
            const scaleChange = zoom / oldZoom;
            const rect = svg.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;
            panX -= mouseX * (1 - scaleChange) / zoom;
            panY -= mouseY * (1 - scaleChange) / zoom;
            updatePanForZoom(); 
            clampPan(); 
            updateTransform();
        });

       
        function canReachStart(nodeId) {
            if (nodeId === 1) return true;
            const visited = new Set();
            const queue = [nodeId];
            visited.add(nodeId);
            while (queue.length > 0) {
                const current = queue.shift();
                const prevLinks = links.filter(l => l.to === current);
                for (const link of prevLinks) {
                    const prevNode = nodes.find(n => n.id === link.from);
                    if (prevNode && prevNode.active) {
                        if (link.from === 1) return true;
                        if (!visited.has(link.from)) {
                            visited.add(link.from);
                            queue.push(link.from);
                        }
                    }
                }
            }
            return false;
        }

        
        function enforceReachability() {
    // Сначала деактивируем недостижимые активные узлы (кроме "Старт")
    nodes.forEach(node => {
        if (node.id !== 1 && node.active && !canReachStart(node.id)) {
            node.active = false;
            const img = treeGroup.querySelector(`image[data-id="${node.id}"]`);
            if (img) img.classList.remove('active'); // Убираем класс 'active' у изображения
        }
    });
    
    // Теперь обновляем видимость рамки для ВСЕХ узлов на основе их состояния активации
    nodes.forEach(node => {
        const outline = treeGroup.querySelector(`rect[data-id="${node.id}"]`);
        if (outline) {
            outline.style.display = node.active ? 'block' : 'none'; // Показываем рамку только для активных узлов
        }
    });
    
    updateLinks(); // Обновляем связи после всех изменений
}

        // Отрисовка линий
        links.forEach((link, i) => {
            const fromNode = nodes.find(n => n.id === link.from);
            const toNode = nodes.find(n => n.id === link.to);
            if (fromNode && toNode) {
                const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                line.setAttribute('x1', fromNode.x);
                line.setAttribute('y1', fromNode.y);
                line.setAttribute('x2', toNode.x);
                line.setAttribute('y2', toNode.y);
                line.setAttribute('data-link', i); // Для обновления
                line.classList.add('link');
                if (fromNode.active) line.classList.add('active');
                treeGroup.appendChild(line);
            }
        });

       // Отрисовка узлов
nodes.forEach(node => {
    // Создаем группу для узла, чтобы объединить изображение, обводку и текст
    const nodeGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    nodeGroup.setAttribute('data-id', node.id);
    
    // Создаем изображение
    const img = document.createElementNS('http://www.w3.org/2000/svg', 'image');
    img.setAttribute('x', node.x - 25);
    img.setAttribute('y', node.y - 25);
    img.setAttribute('width', 50);
    img.setAttribute('height', 50);
    img.setAttribute('href', node.image); // Путь к картинке узла
    img.setAttribute('data-id', node.id);
    img.classList.add('node');
    if (node.active) img.classList.add('active');
    
    // Обработчик клика (без изменений)
    img.addEventListener('click', (e) => {
        if (node.id === 1) return; // "Старт" не трогаем
        if (!node.active) {
            const activeCount = nodes.filter(n => n.active).length;
            if (activeCount >= 21) {
                alert('Maximum number of skills activated!');
                return;
            }
            if (!canReachStart(node.id)) {
                
                return;
            }
        }
        node.active = !node.active;
        img.classList.toggle('active');
        outline.style.display = node.active ? 'block' : 'none'; // Обновляем видимость рамки
        enforceReachability();
        console.log(`"${node.label}" ${node.active ? 'активирован' : 'деактивирован'}`);
    });
    
// Новые обработчики для tooltip с автопроигрыванием только для "Старт"
img.addEventListener('mouseover', () => {
    const tooltip = document.getElementById('tooltip');
    let content = node.description || 'Описание скоро появится';
    if (node.video) {
        content = `<video src="${node.video}" autoplay muted loop width="400" height="300" type="video/mp4" onerror="console.error('Ошибка загрузки видео:', this.error); this.style.display='none';"></video><br>${content}`;
    }
    tooltip.innerHTML = content;
    tooltip.style.display = 'block';
});

img.addEventListener('mousemove', (e) => {
    const tooltip = document.getElementById('tooltip');
    tooltip.style.left = `${e.pageX + 10}px`; // Позиция чуть правее и ниже курсора
    tooltip.style.top = `${e.pageY + 10}px`;
});

img.addEventListener('mouseout', () => {
    const tooltip = document.getElementById('tooltip');
    const video = tooltip.querySelector('video');  // Находим видео в tooltip
    if (video) video.pause();  // Останавливаем видео при уходе курсора
    tooltip.style.display = 'none';
});

    
    nodeGroup.appendChild(img);
    
    // Создаем обводку (квадратную рамку со скругленными углами) — видимая только для активных узлов
    const outline = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    outline.setAttribute('x', node.x - 25);
    outline.setAttribute('y', node.y - 25);
    outline.setAttribute('width', 50);
    outline.setAttribute('height', 50);
    outline.setAttribute('rx', 5);
    outline.setAttribute('fill', 'none');
    outline.setAttribute('stroke', '#FFD700');
    outline.setAttribute('stroke-width', 3);
    outline.setAttribute('data-id', node.id);
    outline.style.display = node.active ? 'block' : 'none';
    nodeGroup.appendChild(outline);
    
    // Добавляем текст
    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('x', node.x);
    text.setAttribute('y', node.y + 35);
    text.setAttribute('data-id', node.id);
    text.textContent = node.label;
    nodeGroup.appendChild(text);
    
    treeGroup.appendChild(nodeGroup);
});
    

        function updateLinks() {
    const lines = treeGroup.querySelectorAll('.link');
    lines.forEach((line, i) => {
        const link = links[i];
        const fromNode = nodes.find(n => n.id === link.from);
        const toNode = nodes.find(n => n.id === link.to);
        if (fromNode && toNode) {
            line.classList.toggle('active', fromNode.active);
        }
    });
}

const bonuses = {
    3: { critChance: { type: 'percent', value: 3 }, weaponSpray: { type: 'percent', value: -3 } },
    4: { critChance: { type: 'percent', value: 3 }, weaponSpray: { type: 'percent', value: -3 } },
    6: { weaponAccuracy: { type: 'absolute', value: 8 } },
    7: { critChance: { type: 'percent', value: 3 }, weaponSpray: { type: 'percent', value: -3 } },
    8: { attackSpeed: { type: 'percent', value: -10 } },
    9: { critChance: { type: 'percent', value: 3 }, weaponSpray: { type: 'percent', value: -3 } },
    10: { energyCost: { type: 'percent', value: -5 } },
    12: { critChance: { type: 'percent', value: 3 }, weaponSpray: { type: 'percent', value: -3 } },
    13: { dodge: { type: 'percent', value: 3 } },
    14: { critDamage: { type: 'percent', value: 15 } },
    15: { accuracyPenalty: { type: 'percent', value: -50 } },
    16: { critChance: { type: 'percent', value: 3 }, weaponSpray: { type: 'percent', value: -3 } },
    18: { attackSpeed: { type: 'percent', value: -10 } },
    19: { dodge: { type: 'percent', value: 3 } },
    20: { critChance: { type: 'percent', value: 5 } },
    21: { health: { type: 'absolute', value: 90 }, weight: { type: 'absolute', value: 3 } },
    22: { damage: { type: 'percent', value: 3 } },
    23: { critChance: { type: 'percent', value: 10 } },
    24: { critChance: { type: 'percent', value: 3 }, weaponSpray: { type: 'percent', value: -3 } },
    25: { armor: { type: 'percent', value: 3 } },
    26: { attackSpeed: { type: 'percent', value: 5 }, damage: { type: 'percent', value: 5 }, armor: { type: 'percent', value: 5 } },
    27: { health: { type: 'absolute', value: 90 }, weight: { type: 'absolute', value: 3 } },
    28: { critDamage: { type: 'percent', value: 15 } },
    101: { energy: { type: 'absolute', value: 10 } },
    102: { energy: { type: 'absolute', value: 6 }, cooldown: { type: 'percent', value: -2 } },
    103: { energy: { type: 'absolute', value: 6 }, cooldown: { type: 'percent', value: -2 } },
    104: { energy: { type: 'absolute', value: 6 }, cooldown: { type: 'percent', value: -2 } },
    105: { energy: { type: 'absolute', value: 6 }, cooldown: { type: 'percent', value: -2 } },
    106: { cooldown: { type: 'percent', value: -5 } },
    108: { shield: { type: 'absolute', value: 2 } },
    109: { weaponAccuracy: { type: 'absolute', value: 8 } },
    110: { energy: { type: 'absolute', value: 6 }, cooldown: { type: 'percent', value: -2 } },
    111: { damageBonus: { type: 'percent', value: 10 } },
    112: { shield: { type: 'absolute', value: 2 } },
    114: { damage: { type: 'percent', value: 3 } },
    115: { energy: { type: 'absolute', value: 6 }, cooldown: { type: 'percent', value: -2 } },
    116: { cooldownReduction: { type: 'percent', value: -40 } },
    117: { energy: { type: 'absolute', value: 6 }, cooldown: { type: 'percent', value: -2 } },
    118: { critChance: { type: 'percent', value: 3 }, weaponSpray: { type: 'percent', value: -3 } },
    119: { damage: { type: 'percent', value: 3 } },
    120: { dodge: { type: 'absolute', value: 5 }, energy: { type: 'percent', value: 5 }, critChance: { type: 'percent', value: 5 } },
    201: { armor: { type: 'percent', value: 3 } },
    202: { health: { type: 'absolute', value: 80 } },
    203: { health: { type: 'absolute', value: 90 }, weight: { type: 'absolute', value: 3 } },
    204: { health: { type: 'absolute', value: 90 }, weight: { type: 'absolute', value: 3 } },
    205: { health: { type: 'absolute', value: 90 }, weight: { type: 'absolute', value: 3 } },
    207: { armor: { type: 'percent', value: 3 } },
    208: { energyCost: { type: 'percent', value: -5 } },
    209: { health: { type: 'absolute', value: 90 }, weight: { type: 'absolute', value: 3 } },
    210: { energy: { type: 'absolute', value: 6 }, cooldown: { type: 'percent', value: -2 } },
    211: { cooldown: { type: 'percent', value: -5 } },
    212: { shield: { type: 'percent', value: 5 }, health: { type: 'percent', value: 5 }, energyCost: { type: 'percent', value: -5 } },
    213: { damageBonus: { type: 'percent', value: 20 } },
    214: { attackSpeed: { type: 'percent', value: -10 } },
    215: { armor: { type: 'percent', value: 3 } },
    216: { health: { type: 'absolute', value: 90 }, weight: { type: 'absolute', value: 3 } },
    218: { damageBonus: { type: 'percent', value: 10 } },
    219: { damage: { type: 'percent', value: 3 } },
    220: { armor: { type: 'percent', value: 3 } },
    221: { health: { type: 'absolute', value: 90 }, weight: { type: 'absolute', value: 3 } }
};


function calculateStats() {
    const baseHealth = parseFloat(document.getElementById('baseHealth').value) || 0;
    const baseDodge = parseFloat(document.getElementById('baseDodge').value) || 0;
    const baseArmor = parseFloat(document.getElementById('baseArmor').value) || 0;
    const baseShield = parseFloat(document.getElementById('baseShield').value) || 0;
    const baseWeight = parseFloat(document.getElementById('baseWeight').value) || 0;
    const baseEnergy = parseFloat(document.getElementById('baseEnergy').value) || 0;
    const baseDamage = parseFloat(document.getElementById('baseDamage').value) || 0;
    const baseAttackSpeed = parseFloat(document.getElementById('baseAttackSpeed').value) || 0;
    const baseWeaponAccuracy = parseFloat(document.getElementById('baseWeaponAccuracy').value) || 0;
    const baseCritChance = parseFloat(document.getElementById('baseCritChance').value) || 0;
    const baseCritDamage = parseFloat(document.getElementById('baseCritDamage').value) || 0;

    let totalHealth = baseHealth;
    let totalDodge = baseDodge;
    let totalArmor = baseArmor;
    let totalShield = baseShield;
    let totalWeight = baseWeight;
    let totalEnergy = baseEnergy;
    let totalDamage = baseDamage;
    let totalAttackSpeed = baseAttackSpeed;
    let totalWeaponAccuracy = baseWeaponAccuracy;
    let totalCritChance = baseCritChance;
    let totalCritDamage = baseCritDamage;

    // Суммируем бонусы от активных пассивных талантов
    nodes.forEach(node => {
        if (node.active && !node.video && bonuses[node.id]) {
            const bonus = bonuses[node.id];
            Object.keys(bonus).forEach(key => {
                const { type, value } = bonus[key];
                if (key === 'health') {
                    totalHealth += type === 'percent' ? baseHealth * value / 100 : value;
                } else if (key === 'dodge') {
                    totalDodge += type === 'percent' ? baseDodge * value / 100 : value;
                } else if (key === 'armor') {
                    totalArmor += type === 'percent' ? baseArmor * value / 100 : value;
                } else if (key === 'shield') {
                    totalShield += type === 'percent' ? baseShield * value / 100 : value;
                } else if (key === 'weight') {
                    totalWeight += type === 'percent' ? baseWeight * value / 100 : value;
                } else if (key === 'energy') {
                    totalEnergy += type === 'percent' ? baseEnergy * value / 100 : value;
                } else if (key === 'damage') {
                    totalDamage += type === 'percent' ? baseDamage * value / 100 : value;
                } else if (key === 'attackSpeed') {
                    totalAttackSpeed += type === 'percent' ? baseAttackSpeed * value / 100 : value;
                } else if (key === 'weaponAccuracy') {
                    totalWeaponAccuracy += type === 'percent' ? baseWeaponAccuracy * value / 100 : value;
                } else if (key === 'critChance') {
                    totalCritChance += value;  // Бонусы к криту уже процентные, суммируем напрямую
                } else if (key === 'critDamage') {
                    totalCritDamage += type === 'percent' ? totalDamage * value / 100 : value; 
                }
                // Игнорируем weaponSpray и т.д.
            });
        }
    });

	totalCritDamage += totalDamage;
	
    // Обновляем отображение
    document.getElementById('finalHealth').textContent = totalHealth.toFixed(0);
    document.getElementById('finalDodge').textContent = totalDodge.toFixed(1);
    document.getElementById('finalArmor').textContent = totalArmor.toFixed(1);
    document.getElementById('finalShield').textContent = totalShield.toFixed(0);
    document.getElementById('finalWeight').textContent = totalWeight.toFixed(0);
    document.getElementById('finalEnergy').textContent = totalEnergy.toFixed(0);
    document.getElementById('finalDamage').textContent = totalDamage.toFixed(1);
    document.getElementById('finalAttackSpeed').textContent = totalAttackSpeed.toFixed(2);
    document.getElementById('finalWeaponAccuracy').textContent = totalWeaponAccuracy.toFixed(1);
    document.getElementById('finalCritChance').textContent = totalCritChance.toFixed(1);
    document.getElementById('finalCritDamage').textContent = totalCritDamage.toFixed(0);
}



document.getElementById('calculateBtn').addEventListener('click', calculateStats);