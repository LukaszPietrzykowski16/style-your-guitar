#ifdef GL_ES
precision mediump float;
#endif
#define PI 3.14159265359
#define TWO_PI 6.28318530718

uniform vec2 u_resolution;
uniform float iTime;

// scene.add(helpers.axesHelper);

  // my first shader

  //  vertexShader = `
  // `;

  //  fragmentShader = `
  // `;

  //  uniforms = {
  //   time: { value: 0 },
  //   resolution: {
  //     value: new THREE.Vector2(window.innerWidth, window.innerHeight),
  //   },
  // };

  //  material = new THREE.ShaderMaterial({
  //   vertexShader,
  //   fragmentShader,
  //   uniforms,
  //   side: THREE.DoubleSide,
  //   depthWrite: false,
  // });

  //  geometry = new THREE.PlaneGeometry(30, 30);
  //  mesh = new THREE.Mesh(geometry, material);
  // scene.add(mesh);

// circle
float circle(in vec2 _st, in float _radius){
    vec2 dist = _st-vec2(0.5);
        return 1.-smoothstep(_radius-(_radius*0.01),
                             _radius+(_radius*0.01),
                             dot(dist,dist)*4.0);
}


// void main() {
//   vec2 st = gl_FragCoord.xy / u_resolution.xy;

//     float circleVal = circle(st, 0.10);

//   vec3 color = mix(vec3(1.0, 1.0, 1.0), vec3(0.5961, 0.5725, 0.5725), circleVal);

// 	gl_FragColor = vec4(color, 1.0);
// }



void main() {
  vec2 st = gl_FragCoord.xy / u_resolution.xy;
  float d = 0.0;

  vec2 offset = vec2(0.0, -0.1);
  vec2 offset2 = vec2(-0.18, 0.1);
    vec2 offset3 = vec2(0.18, 0.1);


  float circle1 = circle(st - vec2(0.2, 0.0) + offset2, 0.6);
  float circle2 = circle(st + vec2(0.2,-0.186)  + offset2, 0.28); 

    float circle1test = circle(st - vec2(-0.2, 0.0) + offset3, 0.6);
  float circle2test = circle(st + vec2(-0.2,-0.186)  + offset3, 0.28); 

  float circle3 = circle(st - vec2(0.09, 0.0)  + offset, 0.12);
  float circle4 = circle(st + vec2(0.09, 0.0)  + offset, 0.12); 
  

  float circles = min(circle1, circle2);

  float circlesTest =  min(circle1test, circle2test);

  float circles2 = max(circle3, circle4);

  st = st *2.-1.;

  int N = 3;

  float a = atan(st.x,st.y)+PI;
  float r = TWO_PI/float(N);  

  d = cos(floor(.5+a/r)*r-a)*length(st);

  // vec3 triangleColor = vec3(1.0-smoothstep(.4,.41,d));
  // float heart = min(circles, triangleColor);
  float heart = max(circles2, circles);

  float heart2 = max(heart, circlesTest );

  vec3 color3 = mix(vec3(1.0, 1.0, 1.0), vec3(0.8667, 0.1686, 0.1686), heart2);

	gl_FragColor = vec4(color3, 1.0);
}
