{"filter":false,"title":"app.routes.js","tooltip":"/app/routes/app.routes.js","undoManager":{"mark":43,"position":43,"stack":[[{"start":{"row":0,"column":0},"end":{"row":17,"column":1},"action":"insert","lines":["module.exports = (app) => {","    const notes = require('../controllers/note.controller.js');","","    // Create a new Note","    app.post('/notes', notes.create);","","    // Retrieve all Notes","    app.get('/notes', notes.findAll);","","    // Retrieve a single Note with noteId","    app.get('/notes/:noteId', notes.findOne);","","    // Update a Note with noteId","    app.put('/notes/:noteId', notes.update);","","    // Delete a Note with noteId","    app.delete('/notes/:noteId', notes.delete);","}"],"id":1}],[{"start":{"row":1,"column":10},"end":{"row":1,"column":14},"action":"remove","lines":["note"],"id":2},{"start":{"row":1,"column":10},"end":{"row":1,"column":17},"action":"insert","lines":["address"]},{"start":{"row":1,"column":45},"end":{"row":1,"column":49},"action":"remove","lines":["note"]},{"start":{"row":1,"column":45},"end":{"row":1,"column":52},"action":"insert","lines":["address"]},{"start":{"row":3,"column":20},"end":{"row":3,"column":24},"action":"remove","lines":["Note"]},{"start":{"row":3,"column":20},"end":{"row":3,"column":27},"action":"insert","lines":["address"]},{"start":{"row":4,"column":15},"end":{"row":4,"column":19},"action":"remove","lines":["note"]},{"start":{"row":4,"column":15},"end":{"row":4,"column":22},"action":"insert","lines":["address"]},{"start":{"row":4,"column":26},"end":{"row":4,"column":30},"action":"remove","lines":["note"]},{"start":{"row":4,"column":26},"end":{"row":4,"column":33},"action":"insert","lines":["address"]},{"start":{"row":6,"column":20},"end":{"row":6,"column":24},"action":"remove","lines":["Note"]},{"start":{"row":6,"column":20},"end":{"row":6,"column":27},"action":"insert","lines":["address"]},{"start":{"row":7,"column":14},"end":{"row":7,"column":18},"action":"remove","lines":["note"]},{"start":{"row":7,"column":14},"end":{"row":7,"column":21},"action":"insert","lines":["address"]},{"start":{"row":7,"column":25},"end":{"row":7,"column":29},"action":"remove","lines":["note"]},{"start":{"row":7,"column":25},"end":{"row":7,"column":32},"action":"insert","lines":["address"]},{"start":{"row":9,"column":25},"end":{"row":9,"column":29},"action":"remove","lines":["Note"]},{"start":{"row":9,"column":25},"end":{"row":9,"column":32},"action":"insert","lines":["address"]},{"start":{"row":9,"column":38},"end":{"row":9,"column":42},"action":"remove","lines":["note"]},{"start":{"row":9,"column":38},"end":{"row":9,"column":45},"action":"insert","lines":["address"]},{"start":{"row":10,"column":14},"end":{"row":10,"column":18},"action":"remove","lines":["note"]},{"start":{"row":10,"column":14},"end":{"row":10,"column":21},"action":"insert","lines":["address"]},{"start":{"row":10,"column":24},"end":{"row":10,"column":28},"action":"remove","lines":["note"]},{"start":{"row":10,"column":24},"end":{"row":10,"column":31},"action":"insert","lines":["address"]},{"start":{"row":10,"column":36},"end":{"row":10,"column":40},"action":"remove","lines":["note"]},{"start":{"row":10,"column":36},"end":{"row":10,"column":43},"action":"insert","lines":["address"]},{"start":{"row":12,"column":16},"end":{"row":12,"column":20},"action":"remove","lines":["Note"]},{"start":{"row":12,"column":16},"end":{"row":12,"column":23},"action":"insert","lines":["address"]},{"start":{"row":12,"column":29},"end":{"row":12,"column":33},"action":"remove","lines":["note"]},{"start":{"row":12,"column":29},"end":{"row":12,"column":36},"action":"insert","lines":["address"]},{"start":{"row":13,"column":14},"end":{"row":13,"column":18},"action":"remove","lines":["note"]},{"start":{"row":13,"column":14},"end":{"row":13,"column":21},"action":"insert","lines":["address"]},{"start":{"row":13,"column":24},"end":{"row":13,"column":28},"action":"remove","lines":["note"]},{"start":{"row":13,"column":24},"end":{"row":13,"column":31},"action":"insert","lines":["address"]},{"start":{"row":13,"column":36},"end":{"row":13,"column":40},"action":"remove","lines":["note"]},{"start":{"row":13,"column":36},"end":{"row":13,"column":43},"action":"insert","lines":["address"]},{"start":{"row":15,"column":16},"end":{"row":15,"column":20},"action":"remove","lines":["Note"]},{"start":{"row":15,"column":16},"end":{"row":15,"column":23},"action":"insert","lines":["address"]},{"start":{"row":15,"column":29},"end":{"row":15,"column":33},"action":"remove","lines":["note"]},{"start":{"row":15,"column":29},"end":{"row":15,"column":36},"action":"insert","lines":["address"]},{"start":{"row":16,"column":17},"end":{"row":16,"column":21},"action":"remove","lines":["note"]},{"start":{"row":16,"column":17},"end":{"row":16,"column":24},"action":"insert","lines":["address"]},{"start":{"row":16,"column":27},"end":{"row":16,"column":31},"action":"remove","lines":["note"]},{"start":{"row":16,"column":27},"end":{"row":16,"column":34},"action":"insert","lines":["address"]},{"start":{"row":16,"column":39},"end":{"row":16,"column":43},"action":"remove","lines":["note"]},{"start":{"row":16,"column":39},"end":{"row":16,"column":46},"action":"insert","lines":["address"]}],[{"start":{"row":1,"column":15},"end":{"row":1,"column":18},"action":"remove","lines":["sss"],"id":3},{"start":{"row":1,"column":15},"end":{"row":1,"column":19},"action":"insert","lines":["sses"]},{"start":{"row":4,"column":20},"end":{"row":4,"column":23},"action":"remove","lines":["sss"]},{"start":{"row":4,"column":20},"end":{"row":4,"column":24},"action":"insert","lines":["sses"]},{"start":{"row":4,"column":32},"end":{"row":4,"column":35},"action":"remove","lines":["sss"]},{"start":{"row":4,"column":32},"end":{"row":4,"column":36},"action":"insert","lines":["sses"]},{"start":{"row":6,"column":25},"end":{"row":6,"column":28},"action":"remove","lines":["sss"]},{"start":{"row":6,"column":25},"end":{"row":6,"column":29},"action":"insert","lines":["sses"]},{"start":{"row":7,"column":19},"end":{"row":7,"column":22},"action":"remove","lines":["sss"]},{"start":{"row":7,"column":19},"end":{"row":7,"column":23},"action":"insert","lines":["sses"]},{"start":{"row":7,"column":31},"end":{"row":7,"column":34},"action":"remove","lines":["sss"]},{"start":{"row":7,"column":31},"end":{"row":7,"column":35},"action":"insert","lines":["sses"]},{"start":{"row":10,"column":19},"end":{"row":10,"column":22},"action":"remove","lines":["sss"]},{"start":{"row":10,"column":19},"end":{"row":10,"column":23},"action":"insert","lines":["sses"]},{"start":{"row":10,"column":42},"end":{"row":10,"column":45},"action":"remove","lines":["sss"]},{"start":{"row":10,"column":42},"end":{"row":10,"column":46},"action":"insert","lines":["sses"]},{"start":{"row":13,"column":19},"end":{"row":13,"column":22},"action":"remove","lines":["sss"]},{"start":{"row":13,"column":19},"end":{"row":13,"column":23},"action":"insert","lines":["sses"]},{"start":{"row":13,"column":42},"end":{"row":13,"column":45},"action":"remove","lines":["sss"]},{"start":{"row":13,"column":42},"end":{"row":13,"column":46},"action":"insert","lines":["sses"]},{"start":{"row":16,"column":22},"end":{"row":16,"column":25},"action":"remove","lines":["sss"]},{"start":{"row":16,"column":22},"end":{"row":16,"column":26},"action":"insert","lines":["sses"]},{"start":{"row":16,"column":45},"end":{"row":16,"column":48},"action":"remove","lines":["sss"]},{"start":{"row":16,"column":45},"end":{"row":16,"column":49},"action":"insert","lines":["sses"]}],[{"start":{"row":17,"column":1},"end":{"row":17,"column":2},"action":"insert","lines":[";"],"id":4}],[{"start":{"row":1,"column":18},"end":{"row":1,"column":19},"action":"remove","lines":["s"],"id":5},{"start":{"row":1,"column":17},"end":{"row":1,"column":18},"action":"remove","lines":["e"]}],[{"start":{"row":1,"column":17},"end":{"row":1,"column":18},"action":"insert","lines":["C"],"id":6},{"start":{"row":1,"column":18},"end":{"row":1,"column":19},"action":"insert","lines":["o"]},{"start":{"row":1,"column":19},"end":{"row":1,"column":20},"action":"insert","lines":["n"]},{"start":{"row":1,"column":20},"end":{"row":1,"column":21},"action":"insert","lines":["t"]},{"start":{"row":1,"column":21},"end":{"row":1,"column":22},"action":"insert","lines":["r"]},{"start":{"row":1,"column":22},"end":{"row":1,"column":23},"action":"insert","lines":["o"]},{"start":{"row":1,"column":23},"end":{"row":1,"column":24},"action":"insert","lines":["l"]},{"start":{"row":1,"column":24},"end":{"row":1,"column":25},"action":"insert","lines":["l"]},{"start":{"row":1,"column":25},"end":{"row":1,"column":26},"action":"insert","lines":["e"]},{"start":{"row":1,"column":26},"end":{"row":1,"column":27},"action":"insert","lines":["r"]}],[{"start":{"row":4,"column":0},"end":{"row":4,"column":4},"action":"insert","lines":["    "],"id":7}],[{"start":{"row":4,"column":31},"end":{"row":4,"column":41},"action":"remove","lines":["addresses."],"id":8},{"start":{"row":4,"column":31},"end":{"row":4,"column":49},"action":"insert","lines":["addressController."]},{"start":{"row":7,"column":26},"end":{"row":7,"column":36},"action":"remove","lines":["addresses."]},{"start":{"row":7,"column":26},"end":{"row":7,"column":44},"action":"insert","lines":["addressController."]},{"start":{"row":10,"column":37},"end":{"row":10,"column":47},"action":"remove","lines":["addresses."]},{"start":{"row":10,"column":37},"end":{"row":10,"column":55},"action":"insert","lines":["addressController."]},{"start":{"row":13,"column":37},"end":{"row":13,"column":47},"action":"remove","lines":["addresses."]},{"start":{"row":13,"column":37},"end":{"row":13,"column":55},"action":"insert","lines":["addressController."]},{"start":{"row":16,"column":40},"end":{"row":16,"column":50},"action":"remove","lines":["addresses."]},{"start":{"row":16,"column":40},"end":{"row":16,"column":58},"action":"insert","lines":["addressController."]}],[{"start":{"row":4,"column":0},"end":{"row":4,"column":4},"action":"remove","lines":["    "],"id":10}],[{"start":{"row":4,"column":53},"end":{"row":5,"column":0},"action":"insert","lines":["",""],"id":11},{"start":{"row":5,"column":0},"end":{"row":5,"column":4},"action":"insert","lines":["    "]},{"start":{"row":5,"column":4},"end":{"row":6,"column":0},"action":"insert","lines":["",""]},{"start":{"row":6,"column":0},"end":{"row":6,"column":4},"action":"insert","lines":["    "]},{"start":{"row":6,"column":4},"end":{"row":6,"column":5},"action":"insert","lines":["a"]},{"start":{"row":6,"column":5},"end":{"row":6,"column":6},"action":"insert","lines":["p"]},{"start":{"row":6,"column":6},"end":{"row":6,"column":7},"action":"insert","lines":["p"]},{"start":{"row":6,"column":7},"end":{"row":6,"column":8},"action":"insert","lines":["."]},{"start":{"row":6,"column":8},"end":{"row":6,"column":9},"action":"insert","lines":["p"]},{"start":{"row":6,"column":9},"end":{"row":6,"column":10},"action":"insert","lines":["o"]}],[{"start":{"row":6,"column":10},"end":{"row":6,"column":11},"action":"insert","lines":["s"],"id":12},{"start":{"row":6,"column":11},"end":{"row":6,"column":12},"action":"insert","lines":["t"]}],[{"start":{"row":6,"column":12},"end":{"row":6,"column":14},"action":"insert","lines":["()"],"id":13}],[{"start":{"row":6,"column":13},"end":{"row":6,"column":15},"action":"insert","lines":["''"],"id":14}],[{"start":{"row":6,"column":14},"end":{"row":6,"column":15},"action":"insert","lines":["/"],"id":15}],[{"start":{"row":6,"column":15},"end":{"row":6,"column":16},"action":"insert","lines":["u"],"id":16},{"start":{"row":6,"column":16},"end":{"row":6,"column":17},"action":"insert","lines":["p"]},{"start":{"row":6,"column":17},"end":{"row":6,"column":18},"action":"insert","lines":["d"]},{"start":{"row":6,"column":18},"end":{"row":6,"column":19},"action":"insert","lines":["a"]},{"start":{"row":6,"column":19},"end":{"row":6,"column":20},"action":"insert","lines":["t"]},{"start":{"row":6,"column":20},"end":{"row":6,"column":21},"action":"insert","lines":["e"]},{"start":{"row":6,"column":21},"end":{"row":6,"column":22},"action":"insert","lines":["_"]},{"start":{"row":6,"column":22},"end":{"row":6,"column":23},"action":"insert","lines":["r"]},{"start":{"row":6,"column":23},"end":{"row":6,"column":24},"action":"insert","lines":["e"]},{"start":{"row":6,"column":24},"end":{"row":6,"column":25},"action":"insert","lines":["c"]},{"start":{"row":6,"column":25},"end":{"row":6,"column":26},"action":"insert","lines":["o"]}],[{"start":{"row":6,"column":25},"end":{"row":6,"column":26},"action":"remove","lines":["o"],"id":17},{"start":{"row":6,"column":24},"end":{"row":6,"column":25},"action":"remove","lines":["c"]},{"start":{"row":6,"column":23},"end":{"row":6,"column":24},"action":"remove","lines":["e"]},{"start":{"row":6,"column":22},"end":{"row":6,"column":23},"action":"remove","lines":["r"]}],[{"start":{"row":6,"column":22},"end":{"row":6,"column":23},"action":"insert","lines":["a"],"id":18},{"start":{"row":6,"column":23},"end":{"row":6,"column":24},"action":"insert","lines":["d"]},{"start":{"row":6,"column":24},"end":{"row":6,"column":25},"action":"insert","lines":["d"]},{"start":{"row":6,"column":25},"end":{"row":6,"column":26},"action":"insert","lines":["r"]},{"start":{"row":6,"column":26},"end":{"row":6,"column":27},"action":"insert","lines":["e"]},{"start":{"row":6,"column":27},"end":{"row":6,"column":28},"action":"insert","lines":["s"]},{"start":{"row":6,"column":28},"end":{"row":6,"column":29},"action":"insert","lines":["s"]}],[{"start":{"row":6,"column":30},"end":{"row":6,"column":31},"action":"insert","lines":[","],"id":19}],[{"start":{"row":6,"column":31},"end":{"row":6,"column":32},"action":"insert","lines":[" "],"id":20},{"start":{"row":6,"column":32},"end":{"row":6,"column":33},"action":"insert","lines":["a"]},{"start":{"row":6,"column":33},"end":{"row":6,"column":34},"action":"insert","lines":["d"]},{"start":{"row":6,"column":34},"end":{"row":6,"column":35},"action":"insert","lines":["d"]},{"start":{"row":6,"column":35},"end":{"row":6,"column":36},"action":"insert","lines":["r"]},{"start":{"row":6,"column":36},"end":{"row":6,"column":37},"action":"insert","lines":["e"]},{"start":{"row":6,"column":37},"end":{"row":6,"column":38},"action":"insert","lines":["s"]},{"start":{"row":6,"column":38},"end":{"row":6,"column":39},"action":"insert","lines":["s"]},{"start":{"row":6,"column":39},"end":{"row":6,"column":40},"action":"insert","lines":["C"]}],[{"start":{"row":6,"column":40},"end":{"row":6,"column":41},"action":"insert","lines":["o"],"id":21},{"start":{"row":6,"column":41},"end":{"row":6,"column":42},"action":"insert","lines":["n"]},{"start":{"row":6,"column":42},"end":{"row":6,"column":43},"action":"insert","lines":["t"]},{"start":{"row":6,"column":43},"end":{"row":6,"column":44},"action":"insert","lines":["r"]},{"start":{"row":6,"column":44},"end":{"row":6,"column":45},"action":"insert","lines":["o"]},{"start":{"row":6,"column":45},"end":{"row":6,"column":46},"action":"insert","lines":["l"]},{"start":{"row":6,"column":46},"end":{"row":6,"column":47},"action":"insert","lines":["l"]},{"start":{"row":6,"column":47},"end":{"row":6,"column":48},"action":"insert","lines":["e"]},{"start":{"row":6,"column":48},"end":{"row":6,"column":49},"action":"insert","lines":["r"]},{"start":{"row":6,"column":49},"end":{"row":6,"column":50},"action":"insert","lines":["."]},{"start":{"row":6,"column":50},"end":{"row":6,"column":51},"action":"insert","lines":["p"]},{"start":{"row":6,"column":51},"end":{"row":6,"column":52},"action":"insert","lines":["d"]},{"start":{"row":6,"column":52},"end":{"row":6,"column":53},"action":"insert","lines":["a"]},{"start":{"row":6,"column":53},"end":{"row":6,"column":54},"action":"insert","lines":["t"]}],[{"start":{"row":6,"column":53},"end":{"row":6,"column":54},"action":"remove","lines":["t"],"id":22},{"start":{"row":6,"column":52},"end":{"row":6,"column":53},"action":"remove","lines":["a"]},{"start":{"row":6,"column":51},"end":{"row":6,"column":52},"action":"remove","lines":["d"]},{"start":{"row":6,"column":50},"end":{"row":6,"column":51},"action":"remove","lines":["p"]}],[{"start":{"row":6,"column":50},"end":{"row":6,"column":51},"action":"insert","lines":["p"],"id":23},{"start":{"row":6,"column":51},"end":{"row":6,"column":52},"action":"insert","lines":["d"]},{"start":{"row":6,"column":52},"end":{"row":6,"column":53},"action":"insert","lines":["a"]},{"start":{"row":6,"column":53},"end":{"row":6,"column":54},"action":"insert","lines":["t"]}],[{"start":{"row":6,"column":53},"end":{"row":6,"column":54},"action":"remove","lines":["t"],"id":24},{"start":{"row":6,"column":52},"end":{"row":6,"column":53},"action":"remove","lines":["a"]},{"start":{"row":6,"column":51},"end":{"row":6,"column":52},"action":"remove","lines":["d"]},{"start":{"row":6,"column":50},"end":{"row":6,"column":51},"action":"remove","lines":["p"]}],[{"start":{"row":6,"column":50},"end":{"row":6,"column":51},"action":"insert","lines":["u"],"id":25},{"start":{"row":6,"column":51},"end":{"row":6,"column":52},"action":"insert","lines":["p"]},{"start":{"row":6,"column":52},"end":{"row":6,"column":53},"action":"insert","lines":["d"]},{"start":{"row":6,"column":53},"end":{"row":6,"column":54},"action":"insert","lines":["a"]},{"start":{"row":6,"column":54},"end":{"row":6,"column":55},"action":"insert","lines":["t"]},{"start":{"row":6,"column":55},"end":{"row":6,"column":56},"action":"insert","lines":["e"]}],[{"start":{"row":6,"column":56},"end":{"row":6,"column":57},"action":"insert","lines":["A"],"id":26},{"start":{"row":6,"column":57},"end":{"row":6,"column":58},"action":"insert","lines":["d"]},{"start":{"row":6,"column":58},"end":{"row":6,"column":59},"action":"insert","lines":["d"]},{"start":{"row":6,"column":59},"end":{"row":6,"column":60},"action":"insert","lines":["r"]},{"start":{"row":6,"column":60},"end":{"row":6,"column":61},"action":"insert","lines":["e"]},{"start":{"row":6,"column":61},"end":{"row":6,"column":62},"action":"insert","lines":["s"]},{"start":{"row":6,"column":62},"end":{"row":6,"column":63},"action":"insert","lines":["s"]}],[{"start":{"row":6,"column":64},"end":{"row":6,"column":65},"action":"insert","lines":[";"],"id":27}],[{"start":{"row":6,"column":29},"end":{"row":6,"column":30},"action":"insert","lines":["/"],"id":28},{"start":{"row":6,"column":30},"end":{"row":6,"column":31},"action":"insert","lines":[":"]},{"start":{"row":6,"column":31},"end":{"row":6,"column":32},"action":"insert","lines":["a"]},{"start":{"row":6,"column":32},"end":{"row":6,"column":33},"action":"insert","lines":["d"]},{"start":{"row":6,"column":33},"end":{"row":6,"column":34},"action":"insert","lines":["d"]},{"start":{"row":6,"column":34},"end":{"row":6,"column":35},"action":"insert","lines":["r"]},{"start":{"row":6,"column":35},"end":{"row":6,"column":36},"action":"insert","lines":["e"]},{"start":{"row":6,"column":36},"end":{"row":6,"column":37},"action":"insert","lines":["s"]},{"start":{"row":6,"column":37},"end":{"row":6,"column":38},"action":"insert","lines":["s"]},{"start":{"row":6,"column":38},"end":{"row":6,"column":39},"action":"insert","lines":["I"]}],[{"start":{"row":6,"column":39},"end":{"row":6,"column":40},"action":"insert","lines":["d"],"id":29}],[{"start":{"row":5,"column":4},"end":{"row":6,"column":0},"action":"insert","lines":["",""],"id":30},{"start":{"row":6,"column":0},"end":{"row":6,"column":4},"action":"insert","lines":["    "]},{"start":{"row":6,"column":4},"end":{"row":6,"column":5},"action":"insert","lines":["/"]},{"start":{"row":6,"column":5},"end":{"row":6,"column":6},"action":"insert","lines":["/"]}],[{"start":{"row":6,"column":6},"end":{"row":6,"column":7},"action":"insert","lines":[" "],"id":31},{"start":{"row":6,"column":7},"end":{"row":6,"column":8},"action":"insert","lines":["h"]},{"start":{"row":6,"column":8},"end":{"row":6,"column":9},"action":"insert","lines":["t"]},{"start":{"row":6,"column":9},"end":{"row":6,"column":10},"action":"insert","lines":["m"]},{"start":{"row":6,"column":10},"end":{"row":6,"column":11},"action":"insert","lines":["l"]}],[{"start":{"row":6,"column":11},"end":{"row":6,"column":12},"action":"insert","lines":[" "],"id":32},{"start":{"row":6,"column":12},"end":{"row":6,"column":13},"action":"insert","lines":["u"]},{"start":{"row":6,"column":13},"end":{"row":6,"column":14},"action":"insert","lines":["p"]},{"start":{"row":6,"column":14},"end":{"row":6,"column":15},"action":"insert","lines":["d"]},{"start":{"row":6,"column":15},"end":{"row":6,"column":16},"action":"insert","lines":["a"]},{"start":{"row":6,"column":16},"end":{"row":6,"column":17},"action":"insert","lines":["t"]},{"start":{"row":6,"column":17},"end":{"row":6,"column":18},"action":"insert","lines":["e"]}],[{"start":{"row":6,"column":4},"end":{"row":7,"column":76},"action":"remove","lines":["// html update","    app.post('/update_address/:addressId', addressController.updateAddress);"],"id":34},{"start":{"row":6,"column":0},"end":{"row":6,"column":4},"action":"remove","lines":["    "]},{"start":{"row":5,"column":4},"end":{"row":6,"column":0},"action":"remove","lines":["",""]},{"start":{"row":5,"column":0},"end":{"row":5,"column":4},"action":"remove","lines":["    "]},{"start":{"row":4,"column":53},"end":{"row":5,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":13,"column":63},"end":{"row":14,"column":0},"action":"insert","lines":["",""],"id":35},{"start":{"row":14,"column":0},"end":{"row":14,"column":4},"action":"insert","lines":["    "]},{"start":{"row":14,"column":4},"end":{"row":15,"column":0},"action":"insert","lines":["",""]},{"start":{"row":15,"column":0},"end":{"row":15,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":15,"column":4},"end":{"row":16,"column":76},"action":"insert","lines":["// html update","    app.post('/update_address/:addressId', addressController.updateAddress);"],"id":36}],[{"start":{"row":16,"column":76},"end":{"row":17,"column":0},"action":"insert","lines":["",""],"id":37},{"start":{"row":17,"column":0},"end":{"row":17,"column":4},"action":"insert","lines":["    "]},{"start":{"row":17,"column":4},"end":{"row":18,"column":0},"action":"insert","lines":["",""]},{"start":{"row":18,"column":0},"end":{"row":18,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":18,"column":4},"end":{"row":19,"column":76},"action":"insert","lines":["// html update","    app.post('/update_address/:addressId', addressController.updateAddress);"],"id":38}],[{"start":{"row":18,"column":12},"end":{"row":18,"column":18},"action":"remove","lines":["update"],"id":39},{"start":{"row":18,"column":12},"end":{"row":18,"column":13},"action":"insert","lines":["d"]},{"start":{"row":18,"column":13},"end":{"row":18,"column":14},"action":"insert","lines":["e"]},{"start":{"row":18,"column":14},"end":{"row":18,"column":15},"action":"insert","lines":["l"]},{"start":{"row":18,"column":15},"end":{"row":18,"column":16},"action":"insert","lines":["e"]},{"start":{"row":18,"column":16},"end":{"row":18,"column":17},"action":"insert","lines":["t"]},{"start":{"row":18,"column":17},"end":{"row":18,"column":18},"action":"insert","lines":["e"]}],[{"start":{"row":19,"column":8},"end":{"row":19,"column":12},"action":"remove","lines":["post"],"id":40},{"start":{"row":19,"column":8},"end":{"row":19,"column":9},"action":"insert","lines":["d"]},{"start":{"row":19,"column":9},"end":{"row":19,"column":10},"action":"insert","lines":["e"]},{"start":{"row":19,"column":10},"end":{"row":19,"column":11},"action":"insert","lines":["l"]},{"start":{"row":19,"column":11},"end":{"row":19,"column":12},"action":"insert","lines":["e"]},{"start":{"row":19,"column":12},"end":{"row":19,"column":13},"action":"insert","lines":["t"]},{"start":{"row":19,"column":13},"end":{"row":19,"column":14},"action":"insert","lines":["e"]}],[{"start":{"row":19,"column":17},"end":{"row":19,"column":23},"action":"remove","lines":["update"],"id":41},{"start":{"row":19,"column":17},"end":{"row":19,"column":18},"action":"insert","lines":["d"]},{"start":{"row":19,"column":18},"end":{"row":19,"column":19},"action":"insert","lines":["e"]},{"start":{"row":19,"column":19},"end":{"row":19,"column":20},"action":"insert","lines":["l"]},{"start":{"row":19,"column":20},"end":{"row":19,"column":21},"action":"insert","lines":["e"]},{"start":{"row":19,"column":21},"end":{"row":19,"column":22},"action":"insert","lines":["t"]},{"start":{"row":19,"column":22},"end":{"row":19,"column":23},"action":"insert","lines":["e"]}],[{"start":{"row":19,"column":63},"end":{"row":19,"column":69},"action":"remove","lines":["update"],"id":42},{"start":{"row":19,"column":63},"end":{"row":19,"column":64},"action":"insert","lines":["d"]},{"start":{"row":19,"column":64},"end":{"row":19,"column":65},"action":"insert","lines":["e"]},{"start":{"row":19,"column":65},"end":{"row":19,"column":66},"action":"insert","lines":["l"]},{"start":{"row":19,"column":66},"end":{"row":19,"column":67},"action":"insert","lines":["e"]},{"start":{"row":19,"column":67},"end":{"row":19,"column":68},"action":"insert","lines":["t"]},{"start":{"row":19,"column":68},"end":{"row":19,"column":69},"action":"insert","lines":["e"]}],[{"start":{"row":19,"column":8},"end":{"row":19,"column":14},"action":"remove","lines":["delete"],"id":43},{"start":{"row":19,"column":8},"end":{"row":19,"column":9},"action":"insert","lines":["g"]},{"start":{"row":19,"column":9},"end":{"row":19,"column":10},"action":"insert","lines":["e"]},{"start":{"row":19,"column":10},"end":{"row":19,"column":11},"action":"insert","lines":["t"]}],[{"start":{"row":19,"column":8},"end":{"row":19,"column":11},"action":"remove","lines":["get"],"id":44},{"start":{"row":19,"column":8},"end":{"row":19,"column":9},"action":"insert","lines":["p"]},{"start":{"row":19,"column":9},"end":{"row":19,"column":10},"action":"insert","lines":["o"]},{"start":{"row":19,"column":10},"end":{"row":19,"column":11},"action":"insert","lines":["s"]},{"start":{"row":19,"column":11},"end":{"row":19,"column":12},"action":"insert","lines":["t"]}],[{"start":{"row":19,"column":8},"end":{"row":19,"column":12},"action":"remove","lines":["post"],"id":45},{"start":{"row":19,"column":8},"end":{"row":19,"column":9},"action":"insert","lines":["g"]},{"start":{"row":19,"column":9},"end":{"row":19,"column":10},"action":"insert","lines":["e"]},{"start":{"row":19,"column":10},"end":{"row":19,"column":11},"action":"insert","lines":["t"]}],[{"start":{"row":19,"column":8},"end":{"row":19,"column":11},"action":"remove","lines":["get"],"id":47},{"start":{"row":19,"column":8},"end":{"row":19,"column":9},"action":"insert","lines":["p"]},{"start":{"row":19,"column":9},"end":{"row":19,"column":10},"action":"insert","lines":["o"]},{"start":{"row":19,"column":10},"end":{"row":19,"column":11},"action":"insert","lines":["s"]},{"start":{"row":19,"column":11},"end":{"row":19,"column":12},"action":"insert","lines":["t"]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":19,"column":12},"end":{"row":19,"column":12},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":93,"mode":"ace/mode/javascript"}},"timestamp":1571532264738,"hash":"0a8e2e6f28a4819a9458ec20af8abb59ed9f6aab"}