{
    window.categories = window.categories || {};
  
    class matrix_category extends window.penPlusExtension {
      getInfo() {
        return {
          name: "Matrix",
          id: "matrix",
          color1: "#737fff",
          color2: "#636ed6",
          color3: "#5560cb",
          blocks: [
            {
              opcode: "setVertColor",
              type: "command",
              text: "set the vertice's colour to %1",
              tooltip: "Will be ran per vertex",
              arguments: [
                {
                  type: "input_value",
                  name: "COLOR",
                  check: "vec4",
                  shadow: {
                    type: "color_reporter",
                  },
                },
              ],
            },
            {
              opcode: "getVertColor",
              type: "reporter",
              text: "vertex colour",
              tooltip: "Will be ran per pixel",
            },
            "---",
            {
              opcode: "setPixColor",
              type: "command",
              text: "set the pixel's colour to %1",
              tooltip: "Will be ran per vertex",
              arguments: [
                {
                  type: "input_value",
                  name: "COLOR",
                  check: "vec4",
                  shadow: {
                    type: "color_reporter",
                  },
                },
              ],
            },
            {
              opcode: "getPixColor",
              type: "reporter",
              text: "pixel colour",
              tooltip: "Will be ran per pixel",
            },
            "---",
            {
              opcode: "pixX",
              type: "reporter",
              text: "pixel x",
              tooltip: "The pixel's X position",
            },
            {
              opcode: "pixY",
              type: "reporter",
              text: "pixel y",
              tooltip: "The pixel's Y position",
            },
            {
              opcode: "pixZ",
              type: "reporter",
              text: "pixel depth",
              tooltip: "The pixel's Y position",
            },
            "---",
            {
              opcode: "resX",
              type: "reporter",
              text: "resolution width",
              tooltip: "The render's width",
            },
            {
              opcode: "resY",
              type: "reporter",
              text: "resolution height",
              tooltip: "The render's height",
            },
          ],
        };
      }
  
      setPixColor(block, generator) {
        const colour = generator.valueToCode(block, "COLOR", Order.ATOMIC);
        return `gl_FragColor = ${colour};` + nextBlockToCode(block, generator);
      }
  
      getPixColor() {
        return [`gl_FragColor`, Order.ATOMIC];
      }
  
      setPixColor(block, generator) {
        const colour = generator.valueToCode(block, "COLOR", Order.ATOMIC);
        return `v_color = ${colour};` + nextBlockToCode(block, generator);
      }
  
      getPixColor() {
        return [`v_color`, Order.ATOMIC];
      }
  
      pixX() {
        return [`gl_FragCoord.x`, Order.ATOMIC];
      }
  
      pixY() {
        return [`gl_FragCoord.y`, Order.ATOMIC];
      }
  
      pixZ() {
        return [`gl_FragCoord.z`, Order.ATOMIC];
      }
  
      resX() {
        return [`u_res.x`, Order.ATOMIC];
      }
  
      resY() {
        return [`u_res.y`, Order.ATOMIC];
      }
    }
  
    window.categories.matrix = matrix_category;
  }
  