document.querySelector("body").insertAdjacentHTML("beforeend", `
<div id="loadingAnimationBox">
	<svg id="loadingAnimation" viewBox="0 0 216 216">
		<path id="loadingAnimationPiece0" d=""/>
		<path id="loadingAnimationPiece1" d=""/>
		<path id="loadingAnimationPiece2" d=""/>
		<path id="loadingAnimationPiece3" d=""/>
		<path id="loadingAnimationPiece4" d=""/>
		<path id="loadingAnimationPiece5" d=""/>
		<path id="loadingAnimationPiece6" d=""/>
		<path id="loadingAnimationPiece7" d=""/>
	</svg>
	<p id="loadingAnimationText">Loading</p>
</div>
`);

const loadingAnimationShapes = [
	{
		"name": "White to Blue",
		"from": {
			"fills": ["#ffd500", "#ffd500"],
			"strokes": ["none", "#f0f0f0"],
			"paths": ["M173.14,102.08c-20.63-29.35-18.22,15.71-32.26-9.39c2.75-2.36,10.98-6.21,10.62-10.21c0.18-1.73-2.18-8.31-2.04-10.01c0.24-5.28,18.69-7.83,21.64-9.19c-17.3-2.27-31.06-7.05-38.39-0.82c2.29,11.68-0.9,18.52-13.48,9.8c7.63-23.69-21.49-13.74,0.82-41.86c-3.53,1.15-29.49,20.16-27.56,24.09c0,0.82,1.26,2.01,3.78,3.57c7.85,4.74,2.42,17.81-6.23,17.25c-4.77-9.5-7.77-13.52-17.97-8.37c-5.56,1.37-11.31-18.05-10.82-21.65c-2.81,20.44-8.79,33.1-1.02,37.16c4.43-0.69,8.02-2.81,11.74,1.94c4.92,5.53,3.13,7.5-0.92,14.39c-24.59-10.23-5.63,20.96-40.23-0.2c8.29,10.21,14.73,24.74,23.89,26.34c3,1.06,8.62-8.54,10.62-8.58c5.31,0,8.58,3.13,9.8,9.39c-9.2,3.86-10.06,11.45-8.17,16.33c0,4.63-7.08,8.71-21.24,12.25c14.31,1.85,35.76,9.21,36.96-3.06c0-2.63,0-4.47,0-5.51c-0.63-5.78,10.97-7.33,14.5-2.25c-10.88,22.74,21.18,9.96-2.04,42.06c5.54-3.92,30.21-20.95,27.97-25.52c0-0.68-1.26-1.84-3.78-3.47c-7.34-4.97-3.5-15.53,5.62-16.13c12.28,27.54,18.75-12.54,28.99,29.2c2.38-13.59,7.48-30.48,1.58-36.14c-4.7,0.67-8.69,2.88-12.94-1.84c-5.28-5.34-3.73-5.66,0.54-12.86c28.73,8.61,3.81-22.48,42.06,0.61C179.74,111.68,175.72,105.89,173.14,102.08z","M138.74,108c0,16.98-13.76,30.74-30.74,30.74S77.26,124.98,77.26,108S91.02,77.26,108,77.26S138.74,91.02,138.74,108z","M133.29,126.67c-0.63,0.88-1.53,1.31-2.01,0.96c-0.48-0.34-0.36-1.33,0.27-2.21s1.53-1.31,2.01-0.96S133.92,125.79,133.29,126.67z"]
		},
		"to": {
			"fills": ["#67c1f5", "#67c1f5"],
			"strokes": ["none", "#f0f0f0"],
			"paths": ["M137.89,163.07c-8,8.14-17.86,12.21-29.57,12.21c-13.15,0-23.57-4.5-31.29-13.5c-7.29-8.57-10.93-19.5-10.93-32.79c0-14.28,6.21-30.57,18.64-48.86c10.14-15,22.07-28.14,35.79-39.43c-2,9.14-3,15.64-3,19.5c0,8.86,2.79,17.5,8.36,25.93c6.86,10,12.07,17.43,15.64,22.29c5.57,8.43,8.36,16.65,8.36,24.64C149.89,144.93,145.89,154.93,137.89,163.07z","M136.25,125.98c-0.57-2.37-1.69-4.62-2.68-5.88c-0.06,0.36-0.03,1.26-0.29,2.53c-0.28,1.36-0.89,3.29-2.15,5.69l-1.78,3.7c-0.43,2.28,0.5,3.64,2.78,4.07c2.41,0.45,3.92-0.92,4.52-4.11C136.95,130.35,136.82,128.35,136.25,125.98z","M137.68,117.32c-2.14-4.78-4.64-7.96-7.5-9.54c0.43,0.86,0.64,2.07,0.64,3.64c0,3-0.86,7.29-2.57,12.86l-2.79,8.57c0,5,2.5,7.5,7.5,7.5c5.28,0,7.93-3.5,7.93-10.5C140.89,126.29,139.82,122.11,137.68,117.32z"]
		}
	},
	{
		"name": "Blue to Black",
		"from": {
			"fills": ["67c1f5"],
			"strokes": [],
			"paths": ["M137.89,163.07c-8,8.14-17.86,12.21-29.57,12.21c-13.15,0-23.57-4.5-31.29-13.5c-7.29-8.57-10.93-19.5-10.93-32.79c0-14.28,6.21-30.57,18.64-48.86c10.14-15,22.07-28.14,35.79-39.43c-2,9.14-3,15.64-3,19.5c0,8.86,2.79,17.5,8.36,25.93c6.86,10,12.07,17.43,15.64,22.29c5.57,8.43,8.36,16.65,8.36,24.64C149.89,144.93,145.89,154.93,137.89,163.07z","M137.68,117.32c-2.14-4.78-4.64-7.96-7.5-9.54c0.43,0.86,0.64,2.07,0.64,3.64c0,3-0.86,7.29-2.57,12.86l-2.79,8.57c0,5,2.5,7.5,7.5,7.5c5.28,0,7.93-3.5,7.93-10.5C140.89,126.29,139.82,122.11,137.68,117.32z","M137.68,117.32c-2.14-4.78-4.64-7.96-7.5-9.54c0.43,0.86,0.64,2.07,0.64,3.64c0,3-0.86,7.29-2.57,12.86l-2.79,8.57c0,5,2.5,7.5,7.5,7.5c5.28,0,7.93-3.5,7.93-10.5C140.89,126.29,139.82,122.11,137.68,117.32z","M137.68,117.32c-2.14-4.78-4.64-7.96-7.5-9.54c0.43,0.86,0.64,2.07,0.64,3.64c0,3-0.86,7.29-2.57,12.86l-2.79,8.57c0,5,2.5,7.5,7.5,7.5c5.28,0,7.93-3.5,7.93-10.5C140.89,126.29,139.82,122.11,137.68,117.32z"]
		},
		"to": {
			"fills": ["#848484"],
			"strokes": [],
			"paths": ["M169.9,98.05c-1.41-8.42-4.15-16.26-8.23-23.54c-1.4-2.42-3.25-5.17-5.55-8.23c-2.93-3.91-4.92-5.92-5.98-6.09c0.28,0.2-2.25,1.47-7.61,3.79c-5.87,2.55-10.33,3.76-13.39,3.64c7.78-4.21,13.26-8.16,16.45-11.86c-9.82-8.16-22.71-12.25-38.65-12.25c-3.7,0-8.99,0.45-15.88,1.34c-2.17,0.26-5.42,1.28-9.76,3.06c-4.85,1.91-7.27,3.57-7.27,4.97c0,6,1.08,10.27,3.25,12.82c5.74,4.85,10.4,8.36,13.97,10.52c-7.02-2.55-10.91-3.95-11.67-4.21c-3.83-0.89-6.31-1.47-7.46-1.72c-1.53-5.74-2.62-10.33-3.25-13.78C53.56,68.9,45.91,84.4,45.91,103.03c0,12.5,4.4,19.58,13.2,21.24c6.38,1.28,10.65,2.17,12.82,2.68c3.57,0.76,5.55,1.21,5.93,1.34c2.17,3.06,3.25,5.1,3.25,6.12c0,0.26-0.13,0.7-0.38,1.34c-0.26,0.64-0.38,1.15-0.38,1.53l-1.53,22.96c-0.26,3.44,0.25,6.12,1.53,8.04c1.27,1.91,3.83,2.87,7.65,2.87c0.38,0,0.7-0.13,0.96-0.38l0.57-4.59c0.25-1.53,0.38-2.49,0.38-2.87c0-0.51-0.16-1.5-0.48-2.97c-0.32-1.47-0.48-2.45-0.48-2.97c0.13-0.38,0.89-2.8,2.3-7.27h1.53c2.3,8.29,3.89,14.54,4.78,18.75c2.55,0.13,4.72,0.13,6.5,0l2.3-17.99h2.3c1.02-0.13,1.66,0.13,1.91,0.76v13.59c-0.26,0,0.06,0.13,0.96,0.38c3.83-2.55,6.82-4.59,8.99-6.12c0.13-1.53-0.06-3.38-0.57-5.55c-0.13-1.02,0-1.85,0.4-2.49h2.97c1.58,4.08,2.37,6.57,2.37,7.46c0,0.64-0.16,1.6-0.48,2.87c-0.32,1.28-0.48,2.23-0.48,2.87c0,1.41,0.51,4.02,1.53,7.85c3.19-0.64,5.99-1.21,8.42-1.72c0.89-4.33,1.34-7.46,1.34-9.38l-0.57-6.12c-0.38-3.31-0.57-5.29-0.57-5.93v-15.5c0-3.7,3.06-6.06,9.18-7.08c9.44-1.53,15.05-2.74,16.84-3.64c6.12-3.06,9.18-8.8,9.18-17.22v-1.53C169.96,103.09,169.9,100.99,169.9,98.05z","M160.91,106.41c0-5.14-1.91-9.72-5.74-13.77c-3.83-4.04-8.23-6.07-13.2-6.07c-5.36,0-10.37,2.46-15.02,7.37c-4.66,4.91-6.98,10.05-6.98,15.4c0,4.47,2.17,6.7,6.51,6.7h22C156.76,115.91,160.91,112.7,160.91,106.41z","M96.81,109.34c0-5.48-2.39-10.68-7.18-15.59c-4.78-4.91-9.92-7.37-15.4-7.37c-4.85,0-9.12,2.06-12.82,6.16c-3.7,4.11-5.55,8.67-5.55,13.67c0,4.37,2.1,7.19,6.31,8.47c2.68,0.77,6.44,1.22,11.29,1.35h10.52C92.53,116.16,96.81,113.93,96.81,109.34z","M117.66,133.07v-5.93c-0.89-1.66-1.79-3.38-2.68-5.17c-0.77-2.55-2.17-6.12-4.21-10.71l-2.11,22.39c0,1.79-0.38,2.68-1.15,2.68c-0.51,0-0.89-0.13-1.15-0.38c-0.89-13.52-1.34-19.39-1.34-17.6v-6.7c-0.26-0.38-0.57-0.57-0.96-0.57c-4.34,4.47-6.5,11.67-6.5,21.62c0,5.49,0.51,8.87,1.53,10.14c1.02-0.25,2.17-0.7,3.45-1.34c0.51-0.25,1.98-0.38,4.4-0.38c2.42,0,5.36,0.76,8.8,2.3C117.02,143.4,117.66,139.95,117.66,133.07z"]
		}
	},
	{
		"name": "Black to Red",
		"from": {
			"fills": ["#848484", "#848484", "#848484"],
			"strokes": [],
			"paths": ["M169.9,98.05c-1.41-8.42-4.15-16.26-8.23-23.54c-1.4-2.42-3.25-5.17-5.55-8.23c-2.93-3.91-4.92-5.92-5.98-6.09c0.28,0.2-2.25,1.47-7.61,3.79c-5.87,2.55-10.33,3.76-13.39,3.64c7.78-4.21,13.26-8.16,16.45-11.86c-9.82-8.16-22.71-12.25-38.65-12.25c-3.7,0-8.99,0.45-15.88,1.34c-2.17,0.26-5.42,1.28-9.76,3.06c-4.85,1.91-7.27,3.57-7.27,4.97c0,6,1.08,10.27,3.25,12.82c5.74,4.85,10.4,8.36,13.97,10.52c-7.02-2.55-10.91-3.95-11.67-4.21c-3.83-0.89-6.31-1.47-7.46-1.72c-1.53-5.74-2.62-10.33-3.25-13.78C53.56,68.9,45.91,84.4,45.91,103.03c0,12.5,4.4,19.58,13.2,21.24c6.38,1.28,10.65,2.17,12.82,2.68c3.57,0.76,5.55,1.21,5.93,1.34c2.17,3.06,3.25,5.1,3.25,6.12c0,0.26-0.13,0.7-0.38,1.34c-0.26,0.64-0.38,1.15-0.38,1.53l-1.53,22.96c-0.26,3.44,0.25,6.12,1.53,8.04c1.27,1.91,3.83,2.87,7.65,2.87c0.38,0,0.7-0.13,0.96-0.38l0.57-4.59c0.25-1.53,0.38-2.49,0.38-2.87c0-0.51-0.16-1.5-0.48-2.97c-0.32-1.47-0.48-2.45-0.48-2.97c0.13-0.38,0.89-2.8,2.3-7.27h1.53c2.3,8.29,3.89,14.54,4.78,18.75c2.55,0.13,4.72,0.13,6.5,0l2.3-17.99h2.3c1.02-0.13,1.66,0.13,1.91,0.76v13.59c-0.26,0,0.06,0.13,0.96,0.38c3.83-2.55,6.82-4.59,8.99-6.12c0.13-1.53-0.06-3.38-0.57-5.55c-0.13-1.02,0-1.85,0.4-2.49h2.97c1.58,4.08,2.37,6.57,2.37,7.46c0,0.64-0.16,1.6-0.48,2.87c-0.32,1.28-0.48,2.23-0.48,2.87c0,1.41,0.51,4.02,1.53,7.85c3.19-0.64,5.99-1.21,8.42-1.72c0.89-4.33,1.34-7.46,1.34-9.38l-0.57-6.12c-0.38-3.31-0.57-5.29-0.57-5.93v-15.5c0-3.7,3.06-6.06,9.18-7.08c9.44-1.53,15.05-2.74,16.84-3.64c6.12-3.06,9.18-8.8,9.18-17.22v-1.53C169.96,103.09,169.9,100.99,169.9,98.05z","M94.15,48.84c0,0.64-0.52,1.16-1.16,1.16s-1.16-0.52-1.16-1.16c0-0.64,0.52-1.16,1.16-1.16S94.15,48.2,94.15,48.84z","M106.46,48.15c0,0.64-0.52,1.16-1.16,1.16c-0.64,0-1.16-0.52-1.16-1.16c0-0.64,0.52-1.16,1.16-1.16C105.94,46.99,106.46,47.51,106.46,48.15z","M160.91,106.41c0-5.14-1.91-9.72-5.74-13.77c-3.83-4.04-8.23-6.07-13.2-6.07c-5.36,0-10.37,2.46-15.02,7.37c-4.66,4.91-6.98,10.05-6.98,15.4c0,4.47,2.17,6.7,6.51,6.7h22C156.76,115.91,160.91,112.7,160.91,106.41z","M96.81,109.34c0-5.48-2.39-10.68-7.18-15.59c-4.78-4.91-9.92-7.37-15.4-7.37c-4.85,0-9.12,2.06-12.82,6.16c-3.7,4.11-5.55,8.67-5.55,13.67c0,4.37,2.1,7.19,6.31,8.47c2.68,0.77,6.44,1.22,11.29,1.35h10.52C92.53,116.16,96.81,113.93,96.81,109.34z","M117.66,133.07v-5.93c-0.89-1.66-1.79-3.38-2.68-5.17c-0.77-2.55-2.17-6.12-4.21-10.71l-2.11,22.39c0,1.79-0.38,2.68-1.15,2.68c-0.51,0-0.89-0.13-1.15-0.38c-0.89-13.52-1.34-19.39-1.34-17.6v-6.7c-0.26-0.38-0.57-0.57-0.96-0.57c-4.34,4.47-6.5,11.67-6.5,21.62c0,5.49,0.51,8.87,1.53,10.14c1.02-0.25,2.17-0.7,3.45-1.34c0.51-0.25,1.98-0.38,4.4-0.38c2.42,0,5.36,0.76,8.8,2.3C117.02,143.4,117.66,139.95,117.66,133.07z"]
		},
		"to": {
			"fills": ["#f85555", "#f85555", "#f85555"],
			"strokes": ["none","none","none"],
			"paths": ["M149.89,133.32c-2.17,1.03-6.78,2.49-13.8,4.41c1.92-2.95,5.49-7.13,10.74-12.52c5.24-5.39,8.82-9.82,10.74-13.29c2.94-5.14,4.41-10.85,4.41-17.15c0-11.94-5.24-24.59-15.72-37.95c1.66,4.15,2.88,7.26,3.64,9.33c2.04,5.32,3.07,9.72,3.07,13.22c0,2.72-0.7,4.66-2.11,5.83c-8.18-29.53-27.48-44.29-57.9-44.29c-2.3,0-6.33,0.32-12.08,0.96c-6.78,0.77-10.42,1.47-10.93,2.11c4.47,0.38,7.54,0.64,9.2,0.77c17,1.53,25.5,4.48,25.5,8.82c0,1.66-6.2,3.52-18.6,5.56c7.03,2.3,10.99,3.45,11.89,3.45c2.94,0,6.2-0.96,9.78-2.88c3.58-1.92,6.26-2.88,8.05-2.88c3.83,0,6.97,1.98,9.4,5.94c2.17,3.32,3.26,7.03,3.26,11.12c0,3.2-0.77,4.79-2.3,4.79c-1.15,0-2.81-1.6-4.99-4.79c-1.53-2.43-2.68-4.22-3.45-5.37c-0.26,0.9-0.38,1.79-0.38,2.68c0,5.37,2.46,10.35,7.38,14.95c4.92,4.6,10.07,7.03,15.43,7.29c-0.21,2.85-0.87,5.79-1.95,8.82c-3.97-13.85-16.27-9.2-16.27-9.2s-0.28,0.22-0.78,0.61c-1.36,0.85-4.42,2.6-9.19,5.24c-7.03,3.9-12.91,5.85-17.64,5.85c-1.15,0-3.42-0.45-6.81-1.34c-3.39-0.89-6.11-1.34-8.15-1.34c-9.2,0-16.91,3.23-23.1,9.68c-6.2,6.46-9.3,14.28-9.3,23.49c0,8.69,3,16.55,9.01,23.58c6.14,7.42,13.48,11.18,22.05,11.31c26.07,0.51,44.67-2.49,55.79-9.01c-1.92,0-6.65-0.1-14.19-0.29c-7.54-0.19-9.71-0.29-6.52-0.29c-0.64,0-1.41-0.41-2.3-1.25c-0.9-0.83-1.34-1.56-1.34-2.2c0-2.04,2.68-3.64,8.05-4.79c3.58-0.77,6.9-1.15,9.97-1.15c16.74,0,27.93-6.71,33.55-20.13c1.4-3.32,2.11-5.81,2.11-7.48C159.16,127.88,154.75,131.14,149.89,133.32z","M77.42,55.67c0,2.3-1.28,3.77-3.83,4.41l-4.99,0.77c-1.79,0.9-4.41,4.41-7.86,10.55c-0.38-1.92-0.96-4.6-1.73-8.05c-1.15,0.13-3.07,1.15-5.75,3.07c-1.15,0.89-3,2.24-5.56,4.03c0.77-4.6,3.32-9.26,7.67-14c4.6-5.24,9.07-7.86,13.42-7.86C74.54,48.57,77.42,50.94,77.42,55.67z","M110.78,73.3c0,2.17-1.18,4-3.55,5.46c-2.37,1.47-4.7,2.21-7,2.21c-3.07,0-5.82-1.73-8.24-5.18c-2.94-4.22-5.94-6.97-9.01-8.24c0.64-0.64,1.4-0.96,2.3-0.96c1.15,0,3.1,0.89,5.85,2.68c2.75,1.79,4.51,2.68,5.27,2.68c0.64,0,1.69-0.89,3.16-2.68c1.47-1.79,3.1-2.68,4.89-2.68C108.67,66.59,110.78,68.83,110.78,73.3z","M138.97,93.34c-0.24-0.02-0.49-0.05-0.74-0.09c-0.21-0.03-0.43-0.08-0.64-0.12c-0.41-0.07-0.81-0.15-1.21-0.25c-0.26-0.06-0.51-0.14-0.77-0.21c-0.35-0.1-0.71-0.21-1.06-0.33c-0.28-0.09-0.55-0.2-0.83-0.3c-0.33-0.13-0.65-0.26-0.98-0.41c-0.29-0.13-0.58-0.26-0.86-0.4c-0.31-0.15-0.62-0.32-0.92-0.49c-0.3-0.16-0.59-0.32-0.89-0.5c-0.29-0.18-0.59-0.37-0.88-0.56c-0.3-0.2-0.6-0.38-0.9-0.59c-0.5-0.35-0.99-0.73-1.48-1.12c-0.71-0.57-1.42-1.17-2.13-1.83c-0.06-0.06-0.11-0.11-0.17-0.17c-0.03-0.02-0.05-0.04-0.08-0.07c-0.27-0.24-0.95-0.63-1.86-1.08c-6.27-3.13-13.87-0.97-17.54,4.99c-2.15,3.49-4.02,7.32-4.27,10.4c-0.14,1.79,1.72,3.07,3.39,2.39l1.07-0.43c2.11-0.87,4.35-1.95,6.72-3.27c3.72-2.06,6.39-3.57,8.03-4.54c0,0,0,0,0,0c1.15-0.68,1.79-1.09,1.93-1.24c0-0.02,0.01-0.04,0.01-0.06c0.02,0,0.03,0.01,0.02,0.02c0,0.01-0.01,0.03-0.03,0.05c0,0.01,0,0.02,0,0.02c-0.06,0.62-0.13,1.22-0.2,1.81c-0.82,6.75-2.51,12.31-5.05,16.68c-0.26,0.45-0.53,0.89-0.81,1.31c-0.11,0.17-0.23,0.33-0.35,0.5c-0.2,0.29-0.41,0.58-0.62,0.86c-0.13,0.18-0.27,0.35-0.41,0.52c-0.2,0.25-0.41,0.51-0.62,0.75c-0.15,0.17-0.3,0.34-0.45,0.5c-0.22,0.23-0.43,0.46-0.66,0.68c-0.16,0.15-0.31,0.31-0.47,0.46c-0.24,0.22-0.48,0.44-0.72,0.65c-0.16,0.13-0.31,0.27-0.47,0.4c-0.27,0.22-0.56,0.43-0.84,0.64c-0.14,0.1-0.27,0.21-0.42,0.31c-0.43,0.3-0.87,0.59-1.32,0.86c-5.5,3.2-8.25,6.33-8.25,9.4c0,1.92,1.15,3.45,3.45,4.6c1.79,0.9,3.77,1.34,5.94,1.34c3.32,0,6.58-2.04,9.78-6.14c3.19-4.09,4.6-7.8,4.22-11.12c-0.05-0.45-0.08-0.92-0.11-1.39c-0.02-0.38-0.03-0.78-0.04-1.18c0-0.08-0.01-0.16-0.01-0.24c-0.02-0.96,0-1.97,0.04-3.02c0,0,0,0,0,0c0.11-2.44,0.4-5.09,0.88-7.98c0.2-1.19,0.8-2.58,1.8-4.19c0.01-0.01,0.02-0.03,0.03-0.04c0.29-0.46,0.6-0.93,0.95-1.42c0,0,1.38-1.73,4.21-2.1l-1.15,3.73c-0.14,0.45-0.26,0.87-0.38,1.27c-0.03,0.1-0.06,0.2-0.08,0.3c-0.11,0.39-0.21,0.78-0.3,1.13c0,0,0,0.01,0,0.01c-0.09,0.36-0.16,0.7-0.22,1.02c-0.01,0.07-0.03,0.14-0.04,0.22c-0.06,0.31-0.11,0.61-0.14,0.89c-0.05,0.41-0.08,0.78-0.08,1.11c0,2.2,0.48,4,1.41,5.42c0.13,0.2,0.27,0.38,0.41,0.57c0.15,0.18,0.31,0.36,0.48,0.53c0.29-0.11,0.59-0.26,0.87-0.44c0.03-0.02,0.06-0.05,0.09-0.07c0.26-0.17,0.51-0.36,0.77-0.58c0.01-0.01,0.01-0.01,0.02-0.02c0.55-0.5,1.09-1.12,1.61-1.87c0.03-0.04,0.05-0.09,0.08-0.12c0.48-0.7,0.94-1.51,1.38-2.42c0.03-0.06,0.06-0.14,0.09-0.2c0.19-0.4,0.38-0.81,0.57-1.25c0.22-0.52,0.44-1.07,0.65-1.65c1.36-3.3,2.22-6.49,2.57-9.59C140.08,93.96,139.6,93.39,138.97,93.34z","M56.23,111.75c6.2-6.45,13.9-9.68,23.1-9.68c2.04,0,4.76,0.45,8.15,1.34c3.39,0.9,5.66,1.34,6.81,1.34c2.69,0,5.77-0.65,9.21-1.92c-3.09-5.58-8-10.34-14.82-14.25c-9.23-5.3-17.92-6.7-26.05-4.21c-7.19,2.21-12.62,7.29-16.31,15.23c-3.69,7.94-4.44,15.73-2.25,23.35c0.74,2.58,1.87,4.64,3.36,6.22C48.51,122.54,51.44,116.73,56.23,111.75z","M120.93,117.41c-3.26-3.38-7.76-0.91-8.03-0.72c-0.06,0.06-0.11,0.12-0.17,0.18c-0.16,0.15-0.31,0.31-0.47,0.46c-0.24,0.22-0.48,0.44-0.72,0.65c-0.16,0.13-0.31,0.27-0.47,0.4c-0.27,0.22-0.56,0.43-0.84,0.64c-0.14,0.1-0.27,0.21-0.42,0.31c-0.43,0.3-0.87,0.59-1.32,0.86c-5.5,3.2-8.25,6.33-8.25,9.4c0,1.92,1.15,3.45,3.45,4.6c1.79,0.9,3.77,1.34,5.94,1.34c3.3,0,6.53-2.02,9.7-6.04C122.51,124.78,123.35,119.91,120.93,117.41z"]
		}
	},
	{
		"name": "Red to Green",
		"from": {
			"fills": ["#f85555", "#f85555", "#f85555"],
			"strokes": [],
			"paths": ["M161.01,131.01c-5.63,13.42-16.81,20.13-33.55,20.13c-5.43-0.63-26.29,3.65-14.38,9.39c-3.2,0-1.02,0.1,6.52,0.29c7.54,0.19,12.27,0.29,14.19,0.29c-11.12,6.52-29.72,9.52-55.79,9.01c-40.65-2.92-41.6-67.76,1.34-68.06c2.9-0.35,12.36,2.73,14.95,2.68c4.15,1.64,25.98-9.77,27.61-11.7c-2.28,29.11-17.47,23.2-21.67,36.43c2.18,8.36,14.35,7.61,19.17-0.19c9.27-10.46-1.56-26.48,12.08-34.7c-0.46,5.06-5.05,14.1-0.19,18.21c4.83-1.86,8.45-13.79,8.82-19.36c-10.84-0.18-25.4-13.36-22.43-24.92c15.49,27.97,13.79-12.5-1.92-11.69c-12.78,3.2-13.33,9.26-29.72,2.3c39.67-5.52,7.07-14.56-16.1-15.15c34.41-9.93,72.58,2.88,80.91,41.22c5.73-8.12-1.35-18.3-4.6-28.38c14.23,18.87,20.88,36.32,11.31,55.1c-2.8,6.1-18.22,20.22-21.47,25.81c14.04-3.98,18.07-5.01,27.03-14.19C163.12,125.2,162.42,127.69,161.01,131.01z","M77.42,55.67c0,2.3-1.28,3.77-3.83,4.41l-4.99,0.77c-1.79,0.9-4.41,4.41-7.86,10.55c-0.38-1.92-0.96-4.6-1.73-8.05c-1.15,0.13-3.07,1.15-5.75,3.07c-1.15,0.89-3,2.24-5.56,4.03c0.77-4.6,3.32-9.26,7.67-14c4.6-5.24,9.07-7.86,13.42-7.86C74.54,48.57,77.42,50.94,77.42,55.67z","M110.78,73.3c0,2.17-1.18,4-3.55,5.46c-2.37,1.47-4.7,2.21-7,2.21c-3.07,0-5.82-1.73-8.24-5.18c-2.94-4.22-5.94-6.97-9.01-8.24c0.64-0.64,1.4-0.96,2.3-0.96c1.15,0,3.1,0.89,5.85,2.68c2.75,1.79,4.51,2.68,5.27,2.68c0.64,0,1.69-0.89,3.16-2.68c1.47-1.79,3.1-2.68,4.89-2.68C108.67,66.59,110.78,68.83,110.78,73.3z","M70.22,94.54c0.56,1.08-1.55,3.27-4.7,4.89c-3.15,1.62-6.16,2.05-6.71,0.97s1.55-3.27,4.7-4.89C66.66,93.89,69.67,93.46,70.22,94.54z","M81.63,98.17c0,0.83-0.67,1.5-1.5,1.5c-0.83,0-1.5-0.67-1.5-1.5c0-0.83,0.67-1.5,1.5-1.5C80.96,96.67,81.63,97.35,81.63,98.17z","M97.86,89.39c0,0.61-0.5,1.11-1.11,1.11s-1.11-0.5-1.11-1.11s0.5-1.11,1.11-1.11S97.86,88.78,97.86,89.39z","M122.51,86.27c0,2.33-1.89,4.23-4.23,4.23c-2.33,0-4.23-1.89-4.23-4.23s1.89-4.23,4.23-4.23C120.62,82.04,122.51,83.93,122.51,86.27z","M116.91,126.15c0,2.21-1.8,4.01-4.01,4.01s-4.01-1.8-4.01-4.01c0-2.21,1.8-4.01,4.01-4.01S116.91,123.93,116.91,126.15z"]
		},
		"to": {
			"fills": ["#26b569", "#26b569", "#26b569"],
			"strokes": [],
			"paths": ["M177.49,116.65c0,2.65-1.03,5.04-3.1,7.16c-2.07,2.12-4.44,3.18-7.11,3.18c-4.28,0-7.41-1.99-9.41-5.97l-9.41-0.4c-2,0-5.94,0.86-11.81,2.57c-6.28,1.71-9.88,3.1-10.81,4.16c-1.47,1.58-2.67,5.28-3.6,11.08c-0.8,4.75-1.2,8.24-1.2,10.49c0,3.56,0.57,6.17,1.71,7.82c1.14,1.65,3.5,3.04,7.06,4.16c3.56,1.12,5.74,1.75,6.55,1.88c0.54,0,1.41,0,2.62,0h2.42c1.75,0,3.56,0.27,5.44,0.8c2.68,0.79,3.82,1.86,3.43,3.18c-1.86-0.26-5.1,0.13-9.74,1.19l5.57,2.78c0,1.59-2.27,2.39-6.81,2.39c-1.2,0-2.84-0.27-4.91-0.79c-2.07-0.53-3.44-0.8-4.1-0.8h-2.61c-0.13,1.32-0.53,3.31-1.2,5.96c-2.27-0.13-4.94-1.46-8.01-3.98c-3.07-2.52-5.01-3.78-5.81-3.78c-0.8,0-1.94,1.26-3.41,3.78c-1.47,2.52-2.2,4.24-2.2,5.17c-1.74-0.93-3.21-2.65-4.41-5.17c-0.53-1.73-1.14-3.45-1.8-5.17c-1.34,0.13-3.81,2.92-7.41,8.35h-0.98c-0.26-0.4-1.24-3.18-2.94-8.35c-4.05-1.32-7.85-1.99-11.37-1.99c-1.7,0-4.32,0.4-7.84,1.19l-5.49-0.41c0.8-0.81,3.11-2.37,6.96-4.68c4.5-2.71,7.95-4.06,10.34-4.06c0.4,0,0.93,0,1.59,0c0.66,0,1.19,0,1.59,0c0.93,0,2.42-0.49,4.47-1.46c2.05-0.98,3.25-1.85,3.58-2.64c0.33-0.78,0.5-2.8,0.5-6.06c0-7.42-1.99-12.96-5.96-16.61c-3.45-3.26-9.15-5.6-17.1-7.03c-2.12,7.56-8.09,11.33-17.89,11.33c-3.18,0-6.36-1.92-9.54-5.77c-3.18-3.84-4.77-7.36-4.77-10.54c0-4.9,2.05-8.95,6.16-12.13c-3.31-3.45-4.97-6.96-4.97-10.54c0-3.31,1.02-6.23,3.08-8.75c2.05-2.52,4.74-3.98,8.05-4.37c-0.27-4.24,1.12-7.16,4.18-8.75c-0.81-17.09,24.5-19.23,28.63-9.78c-1.4-15.62,8.35-27.99,21.07-27.99c6.63,0,12.46,2.65,17.5,7.95c1.85,1.99,2.78,3.05,2.78,3.18c-1.59,0-0.79-0.3,2.39-0.89c3.18-0.6,5.5-0.89,6.96-0.89c5.17,0,9.74,1.92,13.72,5.77c3.44,3.45,5.83,7.82,7.16,13.12c0.93,0.13,2.39,0.53,4.37,1.19c2.91,1.46,4.37,3.98,4.37,7.56c0,0.66-0.53,1.92-1.59,3.78c8.48,4.77,12.72,11.4,12.72,19.88c0,2.39-0.93,5.7-2.78,9.94C175.76,109.89,177.49,112.81,177.49,116.65z","M85.24,87.6c10.12-11.53,30.66-41.28,22.34-50.1c-0.93-0.11-1.88-0.18-2.85-0.18c-12.72,0-21.01,6.56-24.85,19.68c-3.05-3.31-6.96-4.97-11.73-4.97c-4.37,0-8.02,1.46-10.93,4.37c-2.92,2.92-4.37,6.56-4.37,10.93c0,3.71,0.73,6.3,2.19,7.75c-3.05,1.59-4.44,4.51-4.18,8.75c-3.31,0.4-6,1.86-8.05,4.37c-2.06,2.52-3.08,5.44-3.08,8.75c0,3.58,1.61,6.99,4.97,10.54C50.46,113.61,75.11,99.13,85.24,87.6z","M85.24,87.6c10.12-11.53,30.66-41.28,22.34-50.1c-0.93-0.11-1.88-0.18-2.85-0.18c-12.72,0-21.01,6.56-24.85,19.68c-3.05-3.31-6.96-4.97-11.73-4.97c-4.37,0-8.02,1.46-10.93,4.37c-2.92,2.92-4.37,6.56-4.37,10.93c0,3.71,0.73,6.3,2.19,7.75c-3.05,1.59-4.44,4.51-4.18,8.75c-3.31,0.4-6,1.86-8.05,4.37c-2.06,2.52-3.08,5.44-3.08,8.75c0,3.58,1.61,6.99,4.97,10.54C50.46,113.61,75.11,99.13,85.24,87.6z","M91.1,114.46c-2.98-2.52-6-3.78-9.05-3.78c-3.71,0-7.16,0.86-10.34,2.58c7.02-0.4,14.98,3.65,23.86,12.13v-2.58C95.57,119.76,94.08,116.98,91.1,114.46z","M91.99,100.74c-1.99-2.25-3.71-4.57-5.17-6.96c-5.57,1.46-8.35,3.12-8.35,4.97c1.59-0.13,3.91,0.17,6.96,0.89C88.48,100.38,90.67,100.74,91.99,100.74z","M104.12,94.58v-8.75c-3.18-0.53-5.1-0.79-5.77-0.79v2.98L104.12,94.58z","M129.97,89.01c-1.59-0.66-4.57-1.99-8.95-3.98v17.1C127.25,98.56,130.23,94.18,129.97,89.01z","M140.9,112.47l-4.46-5.37c-2.71,1.86-5.45,3.75-8.22,5.67c-2.77,1.92-5.17,4.08-7.2,6.46C127.11,116.05,133.73,113.8,140.9,112.47z"]
		}
	},
	{
		"name": "Green to White",
		"from": {
			"fills": ["#26b569"],
			"strokes": [],
			"paths": ["M177.49,116.65c0,2.65-1.03,5.04-3.1,7.16c-2.07,2.12-4.44,3.18-7.11,3.18c-4.28,0-7.41-1.99-9.41-5.97l-9.41-0.4c-2,0-5.94,0.86-11.81,2.57c-6.28,1.71-9.88,3.1-10.81,4.16c-1.47,1.58-2.67,5.28-3.6,11.08c-0.8,4.75-1.2,8.24-1.2,10.49c0,3.56,0.57,6.17,1.71,7.82c1.14,1.65,3.5,3.04,7.06,4.16c3.56,1.12,5.74,1.75,6.55,1.88c0.54,0,1.41,0,2.62,0h2.42c1.75,0,3.56,0.27,5.44,0.8c2.68,0.79,3.82,1.86,3.43,3.18c-1.86-0.26-5.1,0.13-9.74,1.19l5.57,2.78c0,1.59-2.27,2.39-6.81,2.39c-1.2,0-2.84-0.27-4.91-0.79c-2.07-0.53-3.44-0.8-4.1-0.8h-2.61c-0.13,1.32-0.53,3.31-1.2,5.96c-2.27-0.13-4.94-1.46-8.01-3.98c-3.07-2.52-5.01-3.78-5.81-3.78c-0.8,0-1.94,1.26-3.41,3.78c-1.47,2.52-2.2,4.24-2.2,5.17c-1.74-0.93-3.21-2.65-4.41-5.17c-0.53-1.73-1.14-3.45-1.8-5.17c-1.34,0.13-3.81,2.92-7.41,8.35h-0.98c-0.26-0.4-1.24-3.18-2.94-8.35c-4.05-1.32-7.85-1.99-11.37-1.99c-1.7,0-4.32,0.4-7.84,1.19l-5.49-0.41c0.8-0.81,3.11-2.37,6.96-4.68c4.5-2.71,7.95-4.06,10.34-4.06c0.4,0,0.93,0,1.59,0c0.66,0,1.19,0,1.59,0c0.93,0,2.42-0.49,4.47-1.46c2.05-0.98,3.25-1.85,3.58-2.64c0.33-0.78,0.5-2.8,0.5-6.06c0-7.42-1.99-12.96-5.96-16.61c-3.45-3.26-9.15-5.6-17.1-7.03c-2.12,7.56-8.09,11.33-17.89,11.33c-3.18,0-6.36-1.92-9.54-5.77c-3.18-3.84-4.77-7.36-4.77-10.54c0-4.9,2.05-8.95,6.16-12.13c-3.31-3.45-4.97-6.96-4.97-10.54c0-3.31,1.02-6.23,3.08-8.75c2.05-2.52,4.74-3.98,8.05-4.37c-0.27-4.24,1.12-7.16,4.18-8.75c-1.46-1.46-2.19-4.04-2.19-7.75c0-4.37,1.46-8.02,4.37-10.93c2.91-2.91,6.56-4.37,10.93-4.37c4.77,0,8.68,1.66,11.73,4.97c3.84-13.12,12.13-19.68,24.85-19.68c6.63,0,12.46,2.65,17.5,7.95c1.85,1.99,2.78,3.05,2.78,3.18c-1.59,0-0.79-0.3,2.39-0.89c3.18-0.6,5.5-0.89,6.96-0.89c5.17,0,9.74,1.92,13.72,5.77c3.44,3.45,5.83,7.82,7.16,13.12c0.93,0.13,2.39,0.53,4.37,1.19c2.91,1.46,4.37,3.98,4.37,7.56c0,0.66-0.53,1.92-1.59,3.78c8.48,4.77,12.72,11.4,12.72,19.88c0,2.39-0.93,5.7-2.78,9.94C175.76,109.89,177.49,112.81,177.49,116.65z","M91.1,114.46c-2.98-2.52-6-3.78-9.05-3.78c-3.71,0-7.16,0.86-10.34,2.58c7.02-0.4,14.98,3.65,23.86,12.13v-2.58C95.57,119.76,94.08,116.98,91.1,114.46z","M91.99,100.74c-1.99-2.25-3.71-4.57-5.17-6.96c-5.57,1.46-8.35,3.12-8.35,4.97c1.59-0.13,3.91,0.17,6.96,0.89C88.48,100.38,90.67,100.74,91.99,100.74z","M104.12,94.58v-8.75c-3.18-0.53-5.1-0.79-5.77-0.79v2.98L104.12,94.58z","M129.97,89.01c-1.59-0.66-4.57-1.99-8.95-3.98v17.1C127.25,98.56,130.23,94.18,129.97,89.01z","M140.9,112.47l-4.46-5.37c-2.71,1.86-5.45,3.75-8.22,5.67c-2.77,1.92-5.17,4.08-7.2,6.46C127.11,116.05,133.73,113.8,140.9,112.47z"]
		},
		"to": {
			"fills": ["#ffd500"],
			"strokes": [],
			"paths": ["M173.14,102.08c-20.63-29.35-18.22,15.71-32.26-9.39c2.75-2.36,10.98-6.21,10.62-10.21c0.18-1.73-2.18-8.31-2.04-10.01c0.24-5.28,18.69-7.83,21.64-9.19c-17.3-2.27-31.06-7.05-38.39-0.82c2.29,11.68-0.9,18.52-13.48,9.8c7.63-23.69-21.49-13.74,0.82-41.86c-3.53,1.15-29.49,20.16-27.56,24.09c0,0.82,1.26,2.01,3.78,3.57c7.85,4.74,2.42,17.81-6.23,17.25c-4.77-9.5-7.77-13.52-17.97-8.37c-5.56,1.37-11.31-18.05-10.82-21.65c-2.81,20.44-8.79,33.1-1.02,37.16c4.43-0.69,8.02-2.81,11.74,1.94c4.92,5.53,3.13,7.5-0.92,14.39c-24.59-10.23-5.63,20.96-40.23-0.2c8.29,10.21,14.73,24.74,23.89,26.34c3,1.06,8.62-8.54,10.62-8.58c5.31,0,8.58,3.13,9.8,9.39c-9.2,3.86-10.06,11.45-8.17,16.33c0,4.63-7.08,8.71-21.24,12.25c14.31,1.85,35.76,9.21,36.96-3.06c0-2.63,0-4.47,0-5.51c-0.63-5.78,10.97-7.33,14.5-2.25c-10.88,22.74,21.18,9.96-2.04,42.06c5.54-3.92,30.21-20.95,27.97-25.52c0-0.68-1.26-1.84-3.78-3.47c-7.34-4.97-3.5-15.53,5.62-16.13c12.28,27.54,18.75-12.54,28.99,29.2c2.38-13.59,7.48-30.48,1.58-36.14c-4.7,0.67-8.69,2.88-12.94-1.84c-5.28-5.34-3.73-5.66,0.54-12.86c28.73,8.61,3.81-22.48,42.06,0.61C179.74,111.68,175.72,105.89,173.14,102.08z","M78.83,108.34c-1.08,0-1.92,0-3,0c0.18,17.52,14.44,31.73,31.98,31.83c0-0.79,0-2.03,0-3C91.9,137.07,79.01,124.23,78.83,108.34z","M78.83,108c0-10.77,5.84-20.17,14.52-25.22c-0.6-0.79-1.14-1.82-1.38-2.65C82.33,85.69,75.83,96.1,75.83,108c0,0.11,0.01,0.22,0.01,0.34c1.08,0,1.92,0,3,0C78.83,108.22,78.83,108.11,78.83,108z","M108,78.83c5.31,0,10.28,1.42,14.57,3.9c0.41-0.96,0.93-1.84,2.01-2.29c-4.85-2.93-10.52-4.61-16.58-4.61c-5.84,0-11.32,1.57-16.04,4.3c0.24,0.83,0.78,1.87,1.38,2.65C97.65,80.27,102.65,78.83,108,78.83z","M140.17,108c0-11.68-6.26-21.92-15.59-27.56c-1.08,0.45-1.6,1.33-2.01,2.29c8.73,5.04,14.61,14.47,14.61,25.27c0,0.11-0.01,0.22-0.01,0.34c1.17,0,2.02,0,3,0C140.17,108.22,140.17,108.11,140.17,108z","M137.17,108.34c-0.18,15.96-13.17,28.84-29.17,28.84c-0.06,0-0.12,0-0.18,0c0,0.97,0,2.21,0,3c0.06,0,0.12,0,0.18,0c17.63,0,31.98-14.25,32.17-31.84C139.19,108.34,138.34,108.34,137.17,108.34z"]
		}
	},
];

const populatePaths = function(symbolData, which) {

	for (let i = 0 ; i < 8 ; i++) {
		if (symbolData[which].paths[i]) {
			const animationPiece = document.getElementById("loadingAnimationPiece" + i);
			animationPiece.style.transition = "";
			animationPiece.style.fill = symbolData[which].fills[i] || "#f0f0f0";
			animationPiece.style.stroke = symbolData[which].strokes[i] || "none";
			animationPiece.setAttribute("d", symbolData[which].paths[i]);
			animationPiece.style.strokeWidth = "1.4%"
		} else {
			const animationPiece = document.getElementById("loadingAnimationPiece" + i);
			animationPiece.style.transition = "";
			animationPiece.style.fill = "none";
			animationPiece.style.stroke = "none";
			animationPiece.setAttribute("d", "");
			animationPiece.style.strokeWidth = "1.4%"
		}
	}
};

const morph = function() {
	const texts = ["Loading","Loading.","Loading..","Loading..."]
	document.getElementById("loadingAnimationText").textContent = texts[loadingAnimationCount % 4];

	const symbolData = loadingAnimationShapes[loadingAnimationCount % 5];
	populatePaths(symbolData, "from");
	for (let i in symbolData.from.paths) {
		const animationPiece = document.getElementById("loadingAnimationPiece" + i);
		KUTE.fromTo(animationPiece, {"path": symbolData.from.paths[i]}, {"path": symbolData.to.paths[i]}, {"duration": 500, "morphPrecision": 1}).start();

		setTimeout(function() {
			animationPiece.style.transition = "fill 0.5s ease, stroke 0.5s ease, stroke-width 0.5s ease";
			animationPiece.style.fill = symbolData.to.fills[i] || "#f0f0f0";
			animationPiece.style.stroke = symbolData.to.strokes[i] || "none";
			animationPiece.style.strokeWidth = "3%"
		}, 1);
	}
	loadingAnimationCount++;
};

let loadingAnimationIds = [],
		loadingAnimationCount = 0;
const toggleAnimation = function(status, location) {
	if (status === "start") {
		if (loadingAnimationIds.length === 0) {
			if (location === "body") {
				document.body.appendChild(document.getElementById("loadingAnimationBox"));
			} else if (location === "moveForQuestionsList") {
				document.getElementById("moveForQuestionsList").appendChild(document.getElementById("loadingAnimationBox"));
			}
			loadingAnimationIds.forEach((id, i) => {
				window.clearInterval(id);
			});
			loadingAnimationIds = [];
			loadingAnimationCount = 0;
			populatePaths(loadingAnimationShapes[0], "from");
			loadingAnimationIds.push(setTimeout(function() {
				if (loadingAnimationIds.length === 1) {
					morph();
					loadingAnimationIds.push(setInterval(morph, 700));
				}
			},500));
			document.getElementById("loadingAnimationBox").style.transform = "scale(1)";
		}
	} else {
		loadingAnimationIds.forEach((id, i) => {
			window.clearInterval(id);
		});
		loadingAnimationIds = [];
		document.getElementById("loadingAnimationBox").style.transform = "scale(0)";
	}
};

toggleAnimation("start", "body");
