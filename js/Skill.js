const data = {
            nodes: [
                {id: 1, x: 100, y: 50, color: 'green', active: true, image: 'skill/start.png', description: 'The initial core is always active'},
                {id: 2, x: 100, y: 150, color: 'red', active: false, image: 'skill/1.png'},
                {id: 3, x: 100, y: 250, color: 'blue', active: false, image: 'skill/6.png'},
                {id: 4, x: -50, y: 300, color: 'purple', active: false, image: 'skill/6.png'},
                {id: 5, x: 50, y: 400, color: 'orange', active: false, image: 'skill/9.png'},
                {id: 6, x: 0, y: 170, color: 'yellow', active: false, image: 'skill/30.png'},
                {id: 7, x: 200, y: 170, color: 'yellow', active: false, image: 'skill/6.png'},
                {id: 8, x: 300, y: 150, color: 'yellow', active: false, image: 'skill/18.png'},
                {id: 9, x: 175, y: 325, color: 'blue', active: false, image: 'skill/6.png'},
                {id: 10, x: 350, y: 225, color: 'yellow', active: false, image: 'skill/29.png'},
                {id: 11, x: 275, y: 250, color: 'yellow', active: false, image: 'skill/23.png'},
                {id: 12, x: 375, y: 400, color: 'yellow', active: false, image: 'skill/6.png'},
                {id: 13, x: 325, y: 500, color: 'yellow', active: false, image: 'skill/8.png'},
                {id: 14, x: 200, y: 600, color: 'yellow', active: false, image: 'skill/7.png'},
                {id: 15, x: 100, y: 650, color: 'yellow', active: false, image: 'skill/26.png'},
                {id: 16, x: 0, y: 600, color: 'yellow', active: false, image: 'skill/6.png'},
                {id: 17, x: 100, y: 525, color: 'yellow', active: false, image: 'skill/17.png'},
                {id: 18, x: -125, y: 500, color: 'yellow', active: false, image: 'skill/18.png'},
                {id: 19, x: -175, y: 400, color: 'yellow', active: false, image: 'skill/8.png'},
                {id: 20, x: -100, y: 150, color: 'yellow', active: false, image: 'skill/16.png'},
                {id: 21, x: -100, y: 50, color: 'green', active: false, image: 'skill/4.png'},
                {id: 22, x: -150, y: 250, color: 'yellow', active: false, image: 'skill/12.png'},
                {id: 23, x: -275, y: 400, color: 'yellow', active: false, image: 'skill/36.png'},
                {id: 24, x: -275, y: 300, color: 'purple', active: false, image: 'skill/6.png'},
                {id: 25, x: -375, y: 300, color: 'purple', active: false, image: 'skill/5.png'},
                {id: 26, x: -425, y: 375, color: 'purple', active: false, image: 'skill/25.png'},
                {id: 27, x: -300, y: 200, color: 'purple', active: false, image: 'skill/4.png'},
                {id: 28, x: -225, y: 150, color: 'purple', active: false, image: 'skill/7.png'},
                {id: 29, x: -225, y: 50, color: 'purple', active: false, image: 'skill/15.png'},
                {id: 100, x: 200, y: 0, color: 'cyan', active: false, image: 'skill/3.png'},
                {id: 101, x: 300, y: 50, color: 'yellow', active: false, image: 'skill/34.png'},
                {id: 102, x: 200, y: -100, color: 'cyan', active: false, image: 'skill/22.png'},
                {id: 103, x: 375, y: -50, color: 'yellow', active: false, image: 'skill/22.png'},
                {id: 104, x: 375, y: -150, color: 'yellow', active: false, image: 'skill/22.png'},
                {id: 105, x: 450, y: 25, color: 'yellow', active: false, image: 'skill/22.png'},
                {id: 106, x: 450, y: 125, color: 'yellow', active: false, image: 'skill/21.png'},
                {id: 107, x: 525, y: -75, color: 'yellow', active: false, image: 'skill/24.png'},
                {id: 108, x: 600, y: 25, color: 'yellow', active: false, image: 'skill/27.png'},
                {id: 109, x: 700, y: -75, color: 'yellow', active: false, image: 'skill/30.png'},
                {id: 110, x: 725, y: -175, color: 'yellow', active: false, image: 'skill/22.png'},
                {id: 111, x: 750, y: -325, color: 'yellow', active: false, image: 'skill/28.png'},
                {id: 112, x: 650, y: -400, color: 'yellow', active: false, image: 'skill/27.png'},
                {id: 113, x: 650, y: -275, color: 'yellow', active: false, image: 'skill/33.png'},
                {id: 114, x: 500, y: -450, color: 'yellow', active: false, image: 'skill/12.png'},
                {id: 115, x: 350, y: -400, color: 'yellow', active: false, image: 'skill/22.png'},
                {id: 116, x: 650, y: 125, color: 'yellow', active: false, image: 'skill/31.png'},
                {id: 117, x: 550, y: 175, color: 'yellow', active: false, image: 'skill/22.png'},
                {id: 118, x: 475, y: 275, color: 'yellow', active: false, image: 'skill/6.png'},
                {id: 119, x: 600, y: 275, color: 'yellow', active: false, image: 'skill/12.png'},
                {id: 120, x: 675, y: 325, color: 'yellow', active: false, image: 'skill/35.png'},
                {id: 200, x: 0, y: 0, color: 'yellow', active: false, image: 'skill/2.png'},
                {id: 201, x: 0, y: -100, color: 'yellow', active: false, image: 'skill/5.png'},
                {id: 202, x: 100, y: -175, color: 'yellow', active: false, image: 'skill/32.png'},
                {id: 203, x: -100, y: -150, color: 'yellow', active: false, image: 'skill/4.png'},
                {id: 204, x: -175, y: -100, color: 'yellow', active: false, image: 'skill/4.png'},
                {id: 205, x: -100, y: -250, color: 'yellow', active: false, image: 'skill/4.png'},
                {id: 206, x: -200, y: -250, color: 'yellow', active: false, image: 'skill/13.png'},
                {id: 207, x: 25, y: -275, color: 'yellow', active: false, image: 'skill/5.png'},
                {id: 208, x: 175, y: -275, color: 'yellow', active: false, image: 'skill/29.png'},
                {id: 209, x: 25, y: -375, color: 'yellow', active: false, image: 'skill/4.png'},
                {id: 210, x: 175, y: -375, color: 'yellow', active: false, image: 'skill/22.png'},
                {id: 211, x: 100, y: -475, color: 'yellow', active: false, image: 'skill/21.png'},
                {id: 212, x: 100, y: -575, color: 'yellow', active: false, image: 'skill/20.png'},
                {id: 213, x: -50, y: -475, color: 'yellow', active: false, image: 'skill/19.png'},
                {id: 214, x: -150, y: -375, color: 'yellow', active: false, image: 'skill/18.png'},
                {id: 215, x: -300, y: -450, color: 'yellow', active: false, image: 'skill/5.png'},
                {id: 216, x: -450, y: -400, color: 'yellow', active: false, image: 'skill/4.png'},
                {id: 217, x: -450, y: -275, color: 'yellow', active: false, image: 'skill/10.png'},
                {id: 218, x: -550, y: -325, color: 'yellow', active: false, image: 'skill/11.png'},
                {id: 219, x: -525, y: -175, color: 'yellow', active: false, image: 'skill/12.png'},
                {id: 220, x: -475, y: -50, color: 'yellow', active: false, image: 'skill/5.png'},
                {id: 221, x: -375, y: 100, color: 'yellow', active: false, image: 'skill/4.png'},
                {id: 222, x: 250, y: -225, color: 'yellow', active: false, image: 'skill/14.png'},
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
    
    // Новые обработчики для tooltip
    img.addEventListener('mouseover', () => {
        const tooltip = document.getElementById('tooltip');
        tooltip.textContent = node.description || 'Description coming soon'; // Используем описание узла или заглушку
        tooltip.style.display = 'block';
    });
    
    img.addEventListener('mousemove', (e) => {
        const tooltip = document.getElementById('tooltip');
        tooltip.style.left = `${e.pageX + 10}px`; // Позиция чуть правее и ниже курсора
        tooltip.style.top = `${e.pageY + 10}px`;
    });
    
    img.addEventListener('mouseout', () => {
        document.getElementById('tooltip').style.display = 'none';
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
            const linkElements = treeGroup.querySelectorAll('.link');
            linkElements.forEach((line, i) => {
                const link = links[i];
                const fromActive = nodes.find(n => n.id === link.from).active;
                line.classList.toggle('active', fromActive);
            });
        }
