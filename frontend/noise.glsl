     #ifdef GL_ES
      precision mediump float;
      #endif
  
      uniform float iTime;
      uniform vec2 iResolution;
      uniform vec3 uColor;
  
      const mat2 m = mat2( 0.80,  0.60, -0.60,  0.80 );
  
      float noise( in vec2 p )
      {
          return sin(p.x)*sin(p.y);
      }
  
      float fbm4( vec2 p )
      {
          float f = 0.0;
          f += 0.5000 * noise( p ); p = m * p * 2.02;
          f += 0.2500 * noise( p ); p = m * p * 2.02;
          f += 0.1250 * noise( p ); p = m * p * 2.02;
          f += 0.0625 * noise( p );
          return f / 0.9375;
      }
  
      float fbm6( vec2 p )
      {
          float f = 0.0;
          f += 0.500000 * ( 0.4 + 0.3 * noise( p ) ); p = m * p * 2.02;
          f += 0.500000 * ( 0.4 + 0.3 * noise( p ) ); p = m * p * 2.02;
          f += 0.500000 * ( 0.4 + 0.3 * noise( p ) ); p = m * p * 2.02;
          f += 0.250000 * ( 0.4 + 0.3 * noise( p ) ); p = m * p * 2.02;
          return f / 0.96875;
      }
  
      vec2 fbm4_2( vec2 p )
      {
          return vec2(fbm4(p), fbm4(p + vec2(7.8)));
      }
  
      vec2 fbm6_2( vec2 p )
      {
          return vec2(fbm6(p + vec2(16.8)), fbm6(p + vec2(11.5)));
      }
  
      float func( vec2 q )
      {
          q += 0.03 * sin( vec2(0.2, 0.1) * iTime + length(q) * vec2(4.1, 4.3));
  
          vec2 o = fbm4_2( 0.6 * q );
          o += 0.04 * sin( vec2(0.12, 0.14) * iTime + length(o));
  
          vec2 n = fbm6_2( 3.0 * o );
  
          float f = 0.5 + 0.5 * fbm4( 1.8 * q + 6.0 * n );
          return mix( f, f * f * f * 3.5, f * abs(n.x) );
      }
  
      void main() 
      {
          vec2 uv = gl_FragCoord.xy / iResolution.xy;
          vec2 p = (2.0 * uv - 1.0) * (iResolution.x / iResolution.y);
  
          float f = func(p);
  
          f = clamp(f, 0.0, 1.0);
  
          gl_FragColor = vec4(f * uColor, 1.0);

      }