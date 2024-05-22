function runDijkstra() {
    const distances = {}; // Object to store distances to each vertex
    const visited = {}; // Object to track visited vertices
    const queue = [1]; // Queue for vertex processing, starting with the first vertex

    // Initialize distances
    for (let i = 1; i <= 6; i++) {
        distances[i] = i === 1 ? 0 : Infinity;
        visited[i] = false;
    }

    // Check for empty inputs
    let isEmptyInput = false;
    for (const edge of graphData.edges) {
        const from = edge.from;
        const to = edge.to;
        const weightInput = document.getElementById(`weight${from}-${to}`);
        if (weightInput.value.trim() === '') {
            isEmptyInput = true;
            break;
        }
    }
    // Display a message if there are empty inputs
    if (isEmptyInput) {
        const shortestPathsDiv = document.getElementById('shortest-paths');
        shortestPathsDiv.innerHTML = '<h3>Please fill in all input fields.</h3>';
        return;
    }
    
    while (queue.length > 0) {
        // Find the vertex with the minimum distance
        let minDistance = Infinity;
        let minVertex = null;
        for (const vertex of queue) {
            if (!visited[vertex] && distances[vertex] < minDistance) {
                minDistance = distances[vertex];
                minVertex = vertex;
            }
        }

        if (minVertex === null) break; // If there are no unvisited vertices in the queue, exit the loop

        visited[minVertex] = true; // Mark the vertex as visited

        // Remove the processed vertex from the queue
        const minVertexIndex = queue.indexOf(minVertex);
        queue.splice(minVertexIndex, 1);

        // Update distances to all neighboring vertices through the selected vertex
        for (const edge of graphData.edges) {
            if (edge.from === minVertex) {
                const neighborVertex = edge.to;
                const weightInput = document.getElementById(`weight${minVertex}-${neighborVertex}`);
                const weight = parseInt(weightInput.value.trim());
                const newDistance = distances[minVertex] + weight;
                if (newDistance < distances[neighborVertex]) {
                    distances[neighborVertex] = newDistance;
                    // Add the neighboring vertex to the queue for further processing
                    if (!visited[neighborVertex]) {
                        queue.push(neighborVertex);
                    }
                }
            }
        }
    }

    // Display the results in the <div id="shortest-paths">
    const shortestPathsDiv = document.getElementById('shortest-paths');
    shortestPathsDiv.innerHTML = '<h3>Shortest Paths:</h3>';
    for (const vertex in distances) {
        shortestPathsDiv.innerHTML += `<p>Distance to Graph ${vertex}: ${distances[vertex]}</p>`;
    }
    
    insertValuesIntoGraph();
}

/**
 * Updates the weights in the graph visualization based on the input values.
 */
function insertValuesIntoGraph() {
    graphData.edges.forEach(edge => {
        const weightInput = document.getElementById(`weight${edge.from}-${edge.to}`);
        const weight = parseInt(weightInput.value.trim());
        if (!isNaN(weight)) {
            edge.label = weight.toString();
        }
    });

    network.setData(graphData);
}

var options = {
    manipulation: {
        enabled: false
    },
    nodes: {
        font: {
            size: 20
        }
    },
    physics: {
        enabled: false
    },
    interaction: {
        zoomView: false,
        dragView: false
    },
};

var graphData = {
    nodes: [
        {id: 1, label: 'Graph 1', fixed: true, x: 0, y: 0},
        {id: 2, label: 'Graph 2', fixed: true, x: 300, y: 0},
        {id: 3, label: 'Graph 3', fixed: true, x: 150, y: 150},
        {id: 4, label: 'Graph 4', fixed: true, x: 400, y: 150},
        {id: 5, label: 'Graph 5', fixed: true, x: 0, y: 300},
        {id: 6, label: 'Graph 6', fixed: true, x: 300, y: 300}
    ],
    edges: [
        {from: 1, to: 2},
        {from: 1, to: 3},
        {from: 1, to: 5},
        {from: 2, to: 4},
        {from: 3, to: 4},
        {from: 4, to: 6},
        {from: 5, to: 6},
    ]
};

var container = document.getElementsByClassName('graph-container')[0];
var network = new vis.Network(container, graphData, options);

var graphDataReset = {
    nodes: [
        {id: 1, label: 'Graph 1', fixed: true, x: 0, y: 0},
        {id: 2, label: 'Graph 2', fixed: true, x: 300, y: 0},
        {id: 3, label: 'Graph 3', fixed: true, x: 150, y: 150},
        {id: 4, label: 'Graph 4', fixed: true, x: 400, y: 150},
        {id: 5, label: 'Graph 5', fixed: true, x: 0, y: 300},
        {id: 6, label: 'Graph 6', fixed: true, x: 300, y: 300}
    ],
    edges: [
        {from: 1, to: 2},
        {from: 1, to: 3},
        {from: 1, to: 5},
        {from: 2, to: 4},
        {from: 3, to: 4},
        {from: 4, to: 6},
        {from: 5, to: 6},
    ]
};

/**
 * Resets the graph to its initial state.
 */
function resetGraphs() {
    network.setData(graphDataReset);
}

/**
 * Allows only numbers to be entered in the input fields.
 * 
 * @param {Event} event - The keyboard event.
 */
function allowOnlyNumbers(event) {
    const charCode = event.which || event.keyCode;
    if ((charCode !== 8 && charCode < 48) || charCode > 57) {
        event.preventDefault();
    }
}

document.querySelectorAll('input[type="text"]').forEach(input => {
    input.addEventListener('keydown', allowOnlyNumbers);
});