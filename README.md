# Dijkstra's Algorithm Implementation and Graph Visualization

## Table of Contents

- [Overview](#overview)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Contributions](#contributions)
- [License](#license)

## Overview
This repository contains the implementation of Dijkstra's algorithm for finding the shortest paths in a graph. Additionally, it includes visualization capabilities for graphs using the vis.js library.

### Dijkstra's Algorithm
Dijkstra's algorithm is a widely-used algorithm for finding the shortest paths between nodes in a graph. It operates by iteratively selecting the node with the smallest tentative distance from a set of unvisited nodes, updating the distances to neighboring nodes, and marking visited nodes until all nodes have been visited.

### Graph Visualization
The vis.js library is utilized to visualize the graphs and the shortest paths computed by Dijkstra's algorithm. Nodes represent vertices in the graph, and edges represent connections between vertices. The weights assigned to edges determine the distance between nodes.

## Usage
1. Clone the repository to your local machine.
2. Open the HTML file in a web browser to visualize the graph and interact with the shortest path calculations.
3. Input weights for edges between nodes to compute shortest paths using Dijkstra's algorithm.
4. View the shortest paths displayed on the graph and in the designated HTML element.

## File Structure
- `index.html`: HTML file containing the graph visualization and interaction elements.
- `script.js`: JavaScript file containing the implementation of Dijkstra's algorithm and graph manipulation functions.
- `style.css`: CSS file for styling the graph visualization and HTML elements.

## Contributions
Contributions, feedback, and suggestions for improvements are welcome. Please feel free to submit pull requests or raise issues if you encounter any problems or have ideas for enhancements.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
