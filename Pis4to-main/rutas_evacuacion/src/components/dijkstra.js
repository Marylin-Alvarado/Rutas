// dijkstra.js

export function createGraph(data) {
    let graph = {};
    data.forEach(edge => {
        let [start, end, weight] = edge;
        if (!graph[start]) graph[start] = {};
        graph[start][end] = weight;
    });
    return graph;
}

export function dijkstra(graph, start, end) {
    let shortestDistances = {};
    let parents = {};
    let unvisitedNodes = new Set(Object.keys(graph));

    for (let node in graph) {
        shortestDistances[node] = Infinity;
    }
    shortestDistances[start] = 0;

    while (unvisitedNodes.size > 0) {
        let closestNode = getClosestNode(unvisitedNodes, shortestDistances);
        unvisitedNodes.delete(closestNode);

        for (let neighbor in graph[closestNode]) {
            let tentativeDistance = shortestDistances[closestNode] + graph[closestNode][neighbor];
            if (tentativeDistance < shortestDistances[neighbor]) {
                shortestDistances[neighbor] = tentativeDistance;
                parents[neighbor] = closestNode;
            }
        }
    }

    let shortestPath = [];
    let currentNode = end;
    while (currentNode !== start) {
        shortestPath.unshift(currentNode);
        currentNode = parents[currentNode];
    }
    shortestPath.unshift(start);

    return shortestPath;
}

function getClosestNode(unvisitedNodes, shortestDistances) {
    return Array.from(unvisitedNodes).reduce((closestNode, node) => {
        if (closestNode === null || shortestDistances[node] < shortestDistances[closestNode]) {
            return node;
        } else {
            return closestNode;
        }
    }, null);
}