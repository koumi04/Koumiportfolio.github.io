var project = {
   compositions : [
   {
      id: '87',
      aspect: 1.333333,
      color: 'rgba(0, 0, 0, 255)',
      duration: 10000,
      objects : [
      {
         id: "111",
         type: 1001,
         start: 0,
         stop: 4000,
         opacity: [ { time:0, value: [ 1.000000] } ],
         transform: {
            anchor: [ { time:0, value: [ 0.000000, 0.000000] } ],
            position: [ { time:0, value: [ 0.000000, 0.000000] } ],
            scale: [ { time:0, value: [ 1.333333, 1.333333] } ],
            rotation: [ { time:0, value: [ 0.000000] } ],
         },
         sourceMatrix: [0.000781,0.000000,0.000000,0.000781,-0.500000,-0.375000],
      },
      {
         id: "106",
         type: 1001,
         start: 0,
         stop: 4000,
         opacity: [ { time:0, value: [ 1.000000] } ],
         transform: {
            anchor: [ { time:0, value: [ 0.000000, 0.000000] } ],
            position: [ { time:0, value: [ 0.002895, -0.000000] } ],
            scale: [ { time:0.000000, value:[ 0.100000, 0.100000], }, { time:50.000000, value:[ 1.200000, 1.200000], }, { time:100.000000, value:[ 0.900000, 0.900000], }, { time:125.000000, value:[ 1.000000, 1.000000], },  ],
            rotation: [ { time:0, value: [ 0.000000] } ],
         },
         sourceMatrix: [0.000868,0.000000,0.000000,0.000868,-0.500000,-0.375000],
      },
      {
         id: "101",
         type: 1001,
         start: 0,
         stop: 4000,
         opacity: [ { time:0, value: [ 1.000000] } ],
         transform: {
            anchor: [ { time:0, value: [ 0.000000, 0.000000] } ],
            position: [ { time:0.000000, value:[ 0.000000, 0.570056], cp2: { time: 119.333333, value: [ 0.002441, -0.294304] } }, { time:716.000000, value:[ 0.014643, -1.195769], cp1: { time: -119.333333, value: [ -0.002441, 0.294304] }, },  ],
            scale: [ { time:0, value: [ 1.333333, 1.333333] } ],
            rotation: [ { time:0, value: [ 0.000000] } ],
         },
         sourceMatrix: [0.000781,0.000000,0.000000,0.000781,-0.500000,-0.375000],
      },
      {
         id: "96",
         type: 1001,
         start: 0,
         stop: 4000,
         opacity: [ { time:0, value: [ 1.000000] } ],
         transform: {
            anchor: [ { time:0, value: [ 0.000000, 0.000000] } ],
            position: [ { time:0.000000, value:[ 0.000000, 1.300567], }, { time:266.000000, value:[ -0.083936, -1.014834], }, { time:400.000000, value:[ 0.002894, -1.715352], cp1: { time: -22.333333, value: [ -0.014472, 0.116753] }, },  ],
            scale: [ { time:0, value: [ 1.333333, 2.980222] } ],
            rotation: [ { time:0, value: [ 0.000000] } ],
         },
         sourceMatrix: [0.000500,0.000000,0.000000,0.000500,-0.500000,-0.375000],
      },
      {
         id: "91",
         type: 1001,
         start: 0,
         stop: 4000,
         opacity: [ { time:0, value: [ 1.000000] } ],
         transform: {
            anchor: [ { time:0, value: [ 0.000000, 0.000000] } ],
            position: [ { time:0.000000, value:[ -0.000000, 0.826959], cp2: { time: 58.333333, value: [ -0.008899, -0.317770] } }, { time:350.000000, value:[ -0.053391, -1.079662], cp1: { time: -58.333333, value: [ 0.000000, 0.152247] }, cp2: { time: 50.000000, value: [ 0.000000, -0.152247] } }, { time:650.000000, value:[ -0.000000, -1.000000], cp1: { time: -50.000000, value: [ -0.008899, -0.013277] }, },  ],
            scale: [ { time:0, value: [ 1.333333, 1.333333] } ],
            rotation: [ { time:0, value: [ 0.000000] } ],
         },
         sourceMatrix: [0.000781,0.000000,0.000000,0.000781,-0.500000,-0.375000],
      },
      ]
   },
   ],
   active: function() { return this.compositions[0]; },
   width: 1280,
   height: 960,
   loops: 0
}
