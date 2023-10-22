# Project Name

## Description
This project is a web application that combines React, Three.js, and GeoJSON data to create an interactive 3D globe visualization. It displays countries and their borders on a globe and allows users to interact with the globe by hovering over different regions, triggering visual feedback.

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/your-project.git
   ```

2. Navigate to the project directory:
   ```bash
   cd your-project
   ```

3. Install the required dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm start
   ```

5. Open your web browser and visit `http://localhost:5173/` to view the project.


![](https://github.com/daemoNick/R3F-globe-with-geojson/blob/main/src/assets/Globe-gif.gif)


## Project Structure
The project contains the following files:

1. **index.js**: This file is the entry point for the application and renders the main `App` component into the DOM.

2. **App.jsx**: The `App` component is the root component of the application. It sets up the 3D globe visualization using the Three.js library, React, and GeoJSON data.

3. **Globe.jsx**: This component defines the 3D globe and loads the map texture and bump map.

4. **GeoJSON.js**: The `GeoJSON` component fetches GeoJSON data containing country borders and creates a set of `Polygon` components to display the borders on the globe.

5. **Polygon.jsx**: The `Polygon` component is responsible for rendering individual polygons on the globe, representing different countries or regions.

6. **Mesh.jsx**: The `Mesh` component creates and manages the 3D geometry for individual polygons on the globe. It handles hover interactions and changes the color when a user hovers over a region.

7. **PointLight.jsx**: This component adds a point light source to the scene for better illumination.


## Usage
To use this project, simply follow the installation steps mentioned above. Once the development server is running, open your web browser and visit `http://localhost:3000` to interact with the 3D globe visualization. You can hover over countries or regions to see visual feedback.

## Credits
This project uses various open-source libraries and resources:

- [React](https://reactjs.org/)
- [Three.js](https://threejs.org/)
- [react-three/fiber](https://github.com/pmndrs/react-three-fiber)
- [react-three/drei](https://github.com/pmndrs/drei)
- [three-geojson-geometry](https://www.npmjs.com/package/three-geojson-geometry)
- [three-conic-polygon-geometry](https://www.npmjs.com/package/three-conic-polygon-geometry)

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.