(function() {
    penPlus.defaultShader = `//replacement shader
//Base Variables
attribute highp vec4 a_position;
attribute highp vec4 a_color;
attribute highp vec2 a_texCoord;
 
varying highp vec4 v_color;
varying highp vec2 v_texCoord;

varying highp float v_depth;
uniform highp float u_timer;
uniform highp mat4 u_transform;

//Pen+ Textures
uniform mediump vec2 u_res;

//Base functions
highp float log10(highp float a) {
  return log(a)/log(10.0);
}

highp float eulernum(highp float a) {
    return 2.718 * a;
}

highp vec4 HSVToRGB(highp float hue, highp float saturation, highp float value, highp float a) {
  highp float huePrime = mod(hue,360.0);
  highp float c = (value/100.0) * (saturation/100.0);
  highp float x = c * (1.0 - abs(mod(huePrime/60.0, 2.0) - 1.0));
  highp float m = (value/100.0) - c;
  highp float r = 0.0;
  highp float g = 0.0;
  highp float b = 0.0;
  
  if (huePrime >= 0.0 && huePrime < 60.0) {
      r = c;
      g = x;
      b = 0.0;
  } else if (huePrime >= 60.0 && huePrime < 120.0) {
      r = x;
      g = c;
      b = 0.0;
  } else if (huePrime >= 120.0 && huePrime < 180.0) {
      r = 0.0;
      g = c;
      b = x;
  } else if (huePrime >= 180.0 && huePrime < 240.0) {
      r = 0.0;
      g = x;
      b = c;
  } else if (huePrime >= 240.0 && huePrime < 300.0) {
      r = x;
      g = 0.0;
      b = c;
  } else if (huePrime >= 300.0 && huePrime < 360.0) {
      r = c;
      g = 0.0;
      b = x;
  }
  r += m;
  g += m;
  b += m;
  return vec4(r, g, b, a);
}
    `

    penPlus.defaultVert = `//Vertex Shader
void vertex() {
gl_Position = a_position * vec4(u_transform[0][0],u_transform[0][1],1,1);
v_color = a_color;
}`;

    penPlus.defaultFrag = `//Fragment Shader
void fragment() {
gl_FragColor = v_color;
}`;
})();