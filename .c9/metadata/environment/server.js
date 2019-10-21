{"filter":false,"title":"server.js","tooltip":"/server.js","undoManager":{"mark":100,"position":100,"stack":[[{"start":{"row":13,"column":37},"end":{"row":13,"column":122},"action":"remove","lines":["EasyNotes application. Take notes quickly. Organize and keep track of all your notes."],"id":17},{"start":{"row":13,"column":37},"end":{"row":13,"column":38},"action":"insert","lines":["a"]},{"start":{"row":13,"column":38},"end":{"row":13,"column":39},"action":"insert","lines":["p"]},{"start":{"row":13,"column":39},"end":{"row":13,"column":40},"action":"insert","lines":["p"]}],[{"start":{"row":7,"column":50},"end":{"row":7,"column":51},"action":"insert","lines":[";"],"id":18}],[{"start":{"row":10,"column":26},"end":{"row":10,"column":27},"action":"insert","lines":[";"],"id":19}],[{"start":{"row":17,"column":11},"end":{"row":17,"column":15},"action":"remove","lines":["3000"],"id":20},{"start":{"row":17,"column":11},"end":{"row":17,"column":12},"action":"insert","lines":["8"]},{"start":{"row":17,"column":12},"end":{"row":17,"column":13},"action":"insert","lines":["0"]},{"start":{"row":17,"column":13},"end":{"row":17,"column":14},"action":"insert","lines":["8"]},{"start":{"row":17,"column":14},"end":{"row":17,"column":15},"action":"insert","lines":["0"]}],[{"start":{"row":19,"column":3},"end":{"row":20,"column":0},"action":"insert","lines":["",""],"id":21},{"start":{"row":20,"column":0},"end":{"row":21,"column":0},"action":"insert","lines":["",""]},{"start":{"row":21,"column":0},"end":{"row":21,"column":1},"action":"insert","lines":["a"]},{"start":{"row":21,"column":1},"end":{"row":21,"column":2},"action":"insert","lines":["p"]},{"start":{"row":21,"column":2},"end":{"row":21,"column":3},"action":"insert","lines":["p"]},{"start":{"row":21,"column":3},"end":{"row":21,"column":4},"action":"insert","lines":["."]},{"start":{"row":21,"column":4},"end":{"row":21,"column":5},"action":"insert","lines":["l"]},{"start":{"row":21,"column":5},"end":{"row":21,"column":6},"action":"insert","lines":["i"]},{"start":{"row":21,"column":6},"end":{"row":21,"column":7},"action":"insert","lines":["s"]},{"start":{"row":21,"column":7},"end":{"row":21,"column":8},"action":"insert","lines":["t"]}],[{"start":{"row":21,"column":8},"end":{"row":21,"column":9},"action":"insert","lines":["e"],"id":22},{"start":{"row":21,"column":9},"end":{"row":21,"column":10},"action":"insert","lines":["n"]}],[{"start":{"row":21,"column":10},"end":{"row":21,"column":12},"action":"insert","lines":["()"],"id":23}],[{"start":{"row":21,"column":11},"end":{"row":21,"column":35},"action":"insert","lines":["process.env.PORT || 8080"],"id":24}],[{"start":{"row":21,"column":35},"end":{"row":21,"column":36},"action":"insert","lines":[","],"id":25}],[{"start":{"row":21,"column":36},"end":{"row":21,"column":37},"action":"insert","lines":[" "],"id":26}],[{"start":{"row":21,"column":37},"end":{"row":21,"column":39},"action":"insert","lines":["()"],"id":27}],[{"start":{"row":21,"column":39},"end":{"row":21,"column":40},"action":"insert","lines":[" "],"id":28},{"start":{"row":21,"column":40},"end":{"row":21,"column":41},"action":"insert","lines":["="]},{"start":{"row":21,"column":41},"end":{"row":21,"column":42},"action":"insert","lines":[">"]}],[{"start":{"row":21,"column":42},"end":{"row":21,"column":43},"action":"insert","lines":[" "],"id":29}],[{"start":{"row":21,"column":43},"end":{"row":21,"column":45},"action":"insert","lines":["{}"],"id":30}],[{"start":{"row":21,"column":44},"end":{"row":23,"column":0},"action":"insert","lines":["","    ",""],"id":32}],[{"start":{"row":22,"column":4},"end":{"row":22,"column":52},"action":"insert","lines":["console.log(\"Server is listening on port 3000\");"],"id":33}],[{"start":{"row":22,"column":45},"end":{"row":22,"column":49},"action":"remove","lines":["3000"],"id":34},{"start":{"row":22,"column":45},"end":{"row":22,"column":46},"action":"insert","lines":["8"]},{"start":{"row":22,"column":46},"end":{"row":22,"column":47},"action":"insert","lines":["0"]},{"start":{"row":22,"column":47},"end":{"row":22,"column":48},"action":"insert","lines":["8"]},{"start":{"row":22,"column":48},"end":{"row":22,"column":49},"action":"insert","lines":["0"]}],[{"start":{"row":16,"column":22},"end":{"row":19,"column":3},"action":"remove","lines":["","app.listen(8080, () => {","    console.log(\"Server is listening on port 3000\");","});"],"id":35}],[{"start":{"row":16,"column":22},"end":{"row":17,"column":0},"action":"remove","lines":["",""],"id":36}],[{"start":{"row":11,"column":0},"end":{"row":12,"column":0},"action":"insert","lines":["",""],"id":37}],[{"start":{"row":12,"column":0},"end":{"row":25,"column":3},"action":"insert","lines":["const dbConfig = require('./config/database.config.js');","const mongoose = require('mongoose');","","mongoose.Promise = global.Promise;","","// Connecting to the database","mongoose.connect(dbConfig.url, {","    useNewUrlParser: true","}).then(() => {","    console.log(\"Successfully connected to the database\");    ","}).catch(err => {","    console.log('Could not connect to the database. Exiting now...', err);","    process.exit();","});"],"id":38}],[{"start":{"row":25,"column":3},"end":{"row":26,"column":0},"action":"insert","lines":["",""],"id":39}],[{"start":{"row":12,"column":0},"end":{"row":13,"column":37},"action":"remove","lines":["const dbConfig = require('./config/database.config.js');","const mongoose = require('mongoose');"],"id":40},{"start":{"row":11,"column":0},"end":{"row":12,"column":0},"action":"remove","lines":["",""]},{"start":{"row":10,"column":27},"end":{"row":11,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":2,"column":0},"end":{"row":3,"column":37},"action":"insert","lines":["const dbConfig = require('./config/database.config.js');","const mongoose = require('mongoose');"],"id":41}],[{"start":{"row":3,"column":37},"end":{"row":4,"column":0},"action":"insert","lines":["",""],"id":42}],[{"start":{"row":5,"column":0},"end":{"row":5,"column":25},"action":"remove","lines":["// initialize express app"],"id":43},{"start":{"row":4,"column":0},"end":{"row":5,"column":0},"action":"remove","lines":["",""]},{"start":{"row":3,"column":37},"end":{"row":4,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":27,"column":0},"end":{"row":28,"column":0},"action":"insert","lines":["",""],"id":46}],[{"start":{"row":28,"column":0},"end":{"row":28,"column":44},"action":"insert","lines":["require('./app/routes/note.routes.js')(app);"],"id":47}],[{"start":{"row":28,"column":44},"end":{"row":29,"column":0},"action":"insert","lines":["",""],"id":48}],[{"start":{"row":28,"column":22},"end":{"row":28,"column":26},"action":"remove","lines":["note"],"id":49},{"start":{"row":28,"column":22},"end":{"row":28,"column":23},"action":"insert","lines":["a"]},{"start":{"row":28,"column":23},"end":{"row":28,"column":24},"action":"insert","lines":["p"]},{"start":{"row":28,"column":24},"end":{"row":28,"column":25},"action":"insert","lines":["p"]}],[{"start":{"row":0,"column":35},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":50}],[{"start":{"row":1,"column":0},"end":{"row":1,"column":29},"action":"insert","lines":["const path = require('path');"],"id":51}],[{"start":{"row":5,"column":22},"end":{"row":6,"column":0},"action":"insert","lines":["",""],"id":52}],[{"start":{"row":6,"column":0},"end":{"row":6,"column":45},"action":"insert","lines":["app.use(express.static(__dirname + '/dist'));"],"id":53}],[{"start":{"row":5,"column":22},"end":{"row":6,"column":0},"action":"insert","lines":["",""],"id":54}],[{"start":{"row":11,"column":0},"end":{"row":12,"column":22},"action":"remove","lines":["","// parse json requests"],"id":56},{"start":{"row":10,"column":51},"end":{"row":11,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":9,"column":0},"end":{"row":9,"column":26},"action":"remove","lines":["// parse non-json requests"],"id":57},{"start":{"row":8,"column":0},"end":{"row":9,"column":0},"action":"remove","lines":["",""]},{"start":{"row":7,"column":45},"end":{"row":8,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":23,"column":9},"end":{"row":23,"column":10},"action":"remove","lines":["/"],"id":58},{"start":{"row":23,"column":9},"end":{"row":23,"column":11},"action":"insert","lines":["/*"]}],[{"start":{"row":24,"column":44},"end":{"row":25,"column":0},"action":"insert","lines":["",""],"id":59},{"start":{"row":25,"column":0},"end":{"row":25,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":25,"column":4},"end":{"row":25,"column":60},"action":"insert","lines":["res.sendFile(path.join(__dirname + '/dist/index.html'));"],"id":60}],[{"start":{"row":23,"column":29},"end":{"row":24,"column":44},"action":"remove","lines":["","    res.json({\"message\": \"Welcome to app\"});"],"id":61}],[{"start":{"row":27,"column":0},"end":{"row":27,"column":43},"action":"remove","lines":["require('./app/routes/app.routes.js')(app);"],"id":62},{"start":{"row":26,"column":0},"end":{"row":27,"column":0},"action":"remove","lines":["",""]},{"start":{"row":25,"column":3},"end":{"row":26,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":6,"column":0},"end":{"row":7,"column":0},"action":"insert","lines":["",""],"id":63}],[{"start":{"row":7,"column":0},"end":{"row":7,"column":43},"action":"insert","lines":["require('./app/routes/app.routes.js')(app);"],"id":64}],[{"start":{"row":25,"column":41},"end":{"row":25,"column":45},"action":"remove","lines":["dist"],"id":65},{"start":{"row":25,"column":41},"end":{"row":25,"column":42},"action":"insert","lines":["p"]},{"start":{"row":25,"column":42},"end":{"row":25,"column":43},"action":"insert","lines":["u"]},{"start":{"row":25,"column":43},"end":{"row":25,"column":44},"action":"insert","lines":["b"]},{"start":{"row":25,"column":44},"end":{"row":25,"column":45},"action":"insert","lines":["l"]},{"start":{"row":25,"column":45},"end":{"row":25,"column":46},"action":"insert","lines":["i"]},{"start":{"row":25,"column":46},"end":{"row":25,"column":47},"action":"insert","lines":["c"]}],[{"start":{"row":8,"column":0},"end":{"row":8,"column":45},"action":"remove","lines":["app.use(express.static(__dirname + '/dist'));"],"id":66},{"start":{"row":7,"column":43},"end":{"row":8,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":9,"column":27},"end":{"row":10,"column":0},"action":"insert","lines":["",""],"id":67}],[{"start":{"row":10,"column":0},"end":{"row":10,"column":45},"action":"insert","lines":["app.use(express.static(__dirname + '/dist'));"],"id":68}],[{"start":{"row":7,"column":43},"end":{"row":8,"column":0},"action":"insert","lines":["",""],"id":69}],[{"start":{"row":7,"column":0},"end":{"row":7,"column":43},"action":"remove","lines":["require('./app/routes/app.routes.js')(app);"],"id":70},{"start":{"row":6,"column":0},"end":{"row":7,"column":0},"action":"remove","lines":["",""]},{"start":{"row":5,"column":22},"end":{"row":6,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":26,"column":0},"end":{"row":27,"column":0},"action":"insert","lines":["",""],"id":71}],[{"start":{"row":27,"column":0},"end":{"row":27,"column":43},"action":"insert","lines":["require('./app/routes/app.routes.js')(app);"],"id":72}],[{"start":{"row":27,"column":43},"end":{"row":28,"column":0},"action":"insert","lines":["",""],"id":73}],[{"start":{"row":27,"column":0},"end":{"row":27,"column":43},"action":"remove","lines":["require('./app/routes/app.routes.js')(app);"],"id":74},{"start":{"row":26,"column":0},"end":{"row":27,"column":0},"action":"remove","lines":["",""]},{"start":{"row":25,"column":3},"end":{"row":26,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":22,"column":0},"end":{"row":23,"column":0},"action":"insert","lines":["",""],"id":75}],[{"start":{"row":23,"column":0},"end":{"row":23,"column":43},"action":"insert","lines":["require('./app/routes/app.routes.js')(app);"],"id":76}],[{"start":{"row":23,"column":43},"end":{"row":24,"column":0},"action":"insert","lines":["",""],"id":77}],[{"start":{"row":24,"column":0},"end":{"row":25,"column":0},"action":"insert","lines":["",""],"id":78}],[{"start":{"row":25,"column":0},"end":{"row":25,"column":27},"action":"insert","lines":["app.set('views', './views')"],"id":79}],[{"start":{"row":25,"column":27},"end":{"row":25,"column":28},"action":"insert","lines":[";"],"id":80}],[{"start":{"row":25,"column":28},"end":{"row":26,"column":0},"action":"insert","lines":["",""],"id":81}],[{"start":{"row":26,"column":0},"end":{"row":26,"column":27},"action":"insert","lines":["app.set('views', './views')"],"id":82}],[{"start":{"row":26,"column":27},"end":{"row":26,"column":28},"action":"insert","lines":[";"],"id":83}],[{"start":{"row":26,"column":13},"end":{"row":26,"column":14},"action":"remove","lines":["s"],"id":84}],[{"start":{"row":26,"column":13},"end":{"row":26,"column":14},"action":"insert","lines":[" "],"id":85},{"start":{"row":26,"column":14},"end":{"row":26,"column":15},"action":"insert","lines":["e"]},{"start":{"row":26,"column":15},"end":{"row":26,"column":16},"action":"insert","lines":["n"]},{"start":{"row":26,"column":16},"end":{"row":26,"column":17},"action":"insert","lines":["g"]},{"start":{"row":26,"column":17},"end":{"row":26,"column":18},"action":"insert","lines":["i"]},{"start":{"row":26,"column":18},"end":{"row":26,"column":19},"action":"insert","lines":["n"]},{"start":{"row":26,"column":19},"end":{"row":26,"column":20},"action":"insert","lines":["e"]}],[{"start":{"row":26,"column":24},"end":{"row":26,"column":31},"action":"remove","lines":["./views"],"id":86},{"start":{"row":26,"column":24},"end":{"row":26,"column":25},"action":"insert","lines":["p"]},{"start":{"row":26,"column":25},"end":{"row":26,"column":26},"action":"insert","lines":["u"]},{"start":{"row":26,"column":26},"end":{"row":26,"column":27},"action":"insert","lines":["g"]}],[{"start":{"row":27,"column":29},"end":{"row":28,"column":0},"action":"insert","lines":["",""],"id":87},{"start":{"row":28,"column":0},"end":{"row":28,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":28,"column":4},"end":{"row":28,"column":66},"action":"insert","lines":["res.render('index', { title: 'Hey', message: 'Hello there!' })"],"id":88}],[{"start":{"row":28,"column":34},"end":{"row":28,"column":37},"action":"remove","lines":["Hey"],"id":89},{"start":{"row":28,"column":34},"end":{"row":28,"column":35},"action":"insert","lines":["p"]}],[{"start":{"row":28,"column":34},"end":{"row":28,"column":35},"action":"remove","lines":["p"],"id":90}],[{"start":{"row":28,"column":34},"end":{"row":28,"column":35},"action":"insert","lines":["P"],"id":91},{"start":{"row":28,"column":35},"end":{"row":28,"column":36},"action":"insert","lines":["a"]},{"start":{"row":28,"column":36},"end":{"row":28,"column":37},"action":"insert","lines":["o"]}],[{"start":{"row":28,"column":36},"end":{"row":28,"column":37},"action":"remove","lines":["o"],"id":92}],[{"start":{"row":28,"column":36},"end":{"row":28,"column":37},"action":"insert","lines":["p"],"id":93},{"start":{"row":28,"column":37},"end":{"row":28,"column":38},"action":"insert","lines":["e"]},{"start":{"row":28,"column":38},"end":{"row":28,"column":39},"action":"insert","lines":["r"]},{"start":{"row":28,"column":39},"end":{"row":28,"column":40},"action":"insert","lines":["s"]},{"start":{"row":28,"column":40},"end":{"row":28,"column":41},"action":"insert","lines":["p"]},{"start":{"row":28,"column":41},"end":{"row":28,"column":42},"action":"insert","lines":["a"]},{"start":{"row":28,"column":42},"end":{"row":28,"column":43},"action":"insert","lines":["c"]},{"start":{"row":28,"column":43},"end":{"row":28,"column":44},"action":"insert","lines":["e"]}],[{"start":{"row":28,"column":44},"end":{"row":28,"column":45},"action":"insert","lines":[" "],"id":94},{"start":{"row":28,"column":45},"end":{"row":28,"column":46},"action":"insert","lines":["N"]},{"start":{"row":28,"column":46},"end":{"row":28,"column":47},"action":"insert","lines":["o"]},{"start":{"row":28,"column":47},"end":{"row":28,"column":48},"action":"insert","lines":["d"]},{"start":{"row":28,"column":48},"end":{"row":28,"column":49},"action":"insert","lines":["e"]}],[{"start":{"row":28,"column":62},"end":{"row":28,"column":74},"action":"remove","lines":["Hello there!"],"id":95},{"start":{"row":28,"column":62},"end":{"row":28,"column":63},"action":"insert","lines":["C"]},{"start":{"row":28,"column":63},"end":{"row":28,"column":64},"action":"insert","lines":["R"]},{"start":{"row":28,"column":64},"end":{"row":28,"column":65},"action":"insert","lines":["U"]},{"start":{"row":28,"column":65},"end":{"row":28,"column":66},"action":"insert","lines":["D"]}],[{"start":{"row":28,"column":66},"end":{"row":28,"column":67},"action":"insert","lines":[" "],"id":96},{"start":{"row":28,"column":67},"end":{"row":28,"column":68},"action":"insert","lines":["A"]}],[{"start":{"row":28,"column":67},"end":{"row":28,"column":68},"action":"remove","lines":["A"],"id":97}],[{"start":{"row":28,"column":67},"end":{"row":28,"column":68},"action":"insert","lines":["R"],"id":98},{"start":{"row":28,"column":68},"end":{"row":28,"column":69},"action":"insert","lines":["E"]},{"start":{"row":28,"column":69},"end":{"row":28,"column":70},"action":"insert","lines":["S"]},{"start":{"row":28,"column":70},"end":{"row":28,"column":71},"action":"insert","lines":["T"]},{"start":{"row":28,"column":71},"end":{"row":28,"column":72},"action":"insert","lines":["f"]},{"start":{"row":28,"column":72},"end":{"row":28,"column":73},"action":"insert","lines":["u"]},{"start":{"row":28,"column":73},"end":{"row":28,"column":74},"action":"insert","lines":["l"]}],[{"start":{"row":28,"column":74},"end":{"row":28,"column":75},"action":"insert","lines":[" "],"id":99},{"start":{"row":28,"column":75},"end":{"row":28,"column":76},"action":"insert","lines":["A"]},{"start":{"row":28,"column":76},"end":{"row":28,"column":77},"action":"insert","lines":["P"]},{"start":{"row":28,"column":77},"end":{"row":28,"column":78},"action":"insert","lines":["I"]}],[{"start":{"row":28,"column":78},"end":{"row":28,"column":79},"action":"insert","lines":[" "],"id":100},{"start":{"row":28,"column":79},"end":{"row":28,"column":80},"action":"insert","lines":["E"]},{"start":{"row":28,"column":80},"end":{"row":28,"column":81},"action":"insert","lines":["n"]},{"start":{"row":28,"column":81},"end":{"row":28,"column":82},"action":"insert","lines":["d"]},{"start":{"row":28,"column":82},"end":{"row":28,"column":83},"action":"insert","lines":["p"]},{"start":{"row":28,"column":83},"end":{"row":28,"column":84},"action":"insert","lines":["o"]},{"start":{"row":28,"column":84},"end":{"row":28,"column":85},"action":"insert","lines":["i"]},{"start":{"row":28,"column":85},"end":{"row":28,"column":86},"action":"insert","lines":["n"]},{"start":{"row":28,"column":86},"end":{"row":28,"column":87},"action":"insert","lines":["t"]},{"start":{"row":28,"column":87},"end":{"row":28,"column":88},"action":"insert","lines":["s"]}],[{"start":{"row":29,"column":4},"end":{"row":29,"column":7},"action":"insert","lines":["// "],"id":101}],[{"start":{"row":28,"column":50},"end":{"row":28,"column":90},"action":"remove","lines":[", message: 'CRUD RESTful API Endpoints' "],"id":102}],[{"start":{"row":28,"column":50},"end":{"row":28,"column":51},"action":"insert","lines":[" "],"id":103}],[{"start":{"row":28,"column":16},"end":{"row":28,"column":21},"action":"remove","lines":["index"],"id":104},{"start":{"row":28,"column":16},"end":{"row":28,"column":17},"action":"insert","lines":["h"]},{"start":{"row":28,"column":17},"end":{"row":28,"column":18},"action":"insert","lines":["o"]},{"start":{"row":28,"column":18},"end":{"row":28,"column":19},"action":"insert","lines":["m"]},{"start":{"row":28,"column":19},"end":{"row":28,"column":20},"action":"insert","lines":["e"]}],[{"start":{"row":15,"column":25},"end":{"row":15,"column":26},"action":"insert","lines":[","],"id":105}],[{"start":{"row":15,"column":26},"end":{"row":16,"column":0},"action":"insert","lines":["",""],"id":106},{"start":{"row":16,"column":0},"end":{"row":16,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":16,"column":4},"end":{"row":16,"column":28},"action":"insert","lines":["useUnifiedTopology: true"],"id":107}],[{"start":{"row":29,"column":52},"end":{"row":30,"column":65},"action":"remove","lines":["","    // res.sendFile(path.join(__dirname + '/public/index.html'));"],"id":108}],[{"start":{"row":8,"column":27},"end":{"row":9,"column":45},"action":"remove","lines":["","app.use(express.static(__dirname + '/dist'));"],"id":109}],[{"start":{"row":0,"column":35},"end":{"row":1,"column":29},"action":"remove","lines":["","const path = require('path');"],"id":110}],[{"start":{"row":27,"column":16},"end":{"row":27,"column":20},"action":"remove","lines":["home"],"id":111},{"start":{"row":27,"column":16},"end":{"row":27,"column":17},"action":"insert","lines":["i"]},{"start":{"row":27,"column":17},"end":{"row":27,"column":18},"action":"insert","lines":["n"]},{"start":{"row":27,"column":18},"end":{"row":27,"column":19},"action":"insert","lines":["d"]},{"start":{"row":27,"column":19},"end":{"row":27,"column":20},"action":"insert","lines":["e"]},{"start":{"row":27,"column":20},"end":{"row":27,"column":21},"action":"insert","lines":["x"]}],[{"start":{"row":27,"column":53},"end":{"row":28,"column":0},"action":"insert","lines":["",""],"id":112},{"start":{"row":28,"column":0},"end":{"row":28,"column":4},"action":"insert","lines":["    "]},{"start":{"row":28,"column":4},"end":{"row":28,"column":5},"action":"insert","lines":["r"]},{"start":{"row":28,"column":5},"end":{"row":28,"column":6},"action":"insert","lines":["e"]},{"start":{"row":28,"column":6},"end":{"row":28,"column":7},"action":"insert","lines":["s"]},{"start":{"row":28,"column":7},"end":{"row":28,"column":8},"action":"insert","lines":["."]},{"start":{"row":28,"column":8},"end":{"row":28,"column":9},"action":"insert","lines":["r"]},{"start":{"row":28,"column":9},"end":{"row":28,"column":10},"action":"insert","lines":["e"]},{"start":{"row":28,"column":10},"end":{"row":28,"column":11},"action":"insert","lines":["d"]},{"start":{"row":28,"column":11},"end":{"row":28,"column":12},"action":"insert","lines":["i"]},{"start":{"row":28,"column":12},"end":{"row":28,"column":13},"action":"insert","lines":["r"]},{"start":{"row":28,"column":13},"end":{"row":28,"column":14},"action":"insert","lines":["e"]}],[{"start":{"row":28,"column":14},"end":{"row":28,"column":15},"action":"insert","lines":["c"],"id":113},{"start":{"row":28,"column":15},"end":{"row":28,"column":16},"action":"insert","lines":["t"]}],[{"start":{"row":28,"column":16},"end":{"row":28,"column":18},"action":"insert","lines":["()"],"id":114}],[{"start":{"row":28,"column":17},"end":{"row":28,"column":19},"action":"insert","lines":["''"],"id":115}],[{"start":{"row":28,"column":18},"end":{"row":28,"column":19},"action":"insert","lines":["/"],"id":116},{"start":{"row":28,"column":19},"end":{"row":28,"column":20},"action":"insert","lines":["a"]},{"start":{"row":28,"column":20},"end":{"row":28,"column":21},"action":"insert","lines":["d"]},{"start":{"row":28,"column":21},"end":{"row":28,"column":22},"action":"insert","lines":["d"]},{"start":{"row":28,"column":22},"end":{"row":28,"column":23},"action":"insert","lines":["r"]},{"start":{"row":28,"column":23},"end":{"row":28,"column":24},"action":"insert","lines":["e"]},{"start":{"row":28,"column":24},"end":{"row":28,"column":25},"action":"insert","lines":["s"]},{"start":{"row":28,"column":25},"end":{"row":28,"column":26},"action":"insert","lines":["s"]},{"start":{"row":28,"column":26},"end":{"row":28,"column":27},"action":"insert","lines":["e"]},{"start":{"row":28,"column":27},"end":{"row":28,"column":28},"action":"insert","lines":["s"]}],[{"start":{"row":28,"column":30},"end":{"row":28,"column":31},"action":"insert","lines":[";"],"id":117}],[{"start":{"row":26,"column":29},"end":{"row":27,"column":53},"action":"remove","lines":["","    res.render('index', { title: 'Paperspace Node' })"],"id":118}],[{"start":{"row":31,"column":31},"end":{"row":31,"column":35},"action":"remove","lines":["8080"],"id":119},{"start":{"row":31,"column":31},"end":{"row":31,"column":32},"action":"insert","lines":["3"]},{"start":{"row":31,"column":32},"end":{"row":31,"column":33},"action":"insert","lines":["0"]},{"start":{"row":31,"column":33},"end":{"row":31,"column":34},"action":"insert","lines":["0"]},{"start":{"row":31,"column":34},"end":{"row":31,"column":35},"action":"insert","lines":["0"]}],[{"start":{"row":32,"column":45},"end":{"row":32,"column":49},"action":"remove","lines":["8080"],"id":133},{"start":{"row":32,"column":45},"end":{"row":32,"column":46},"action":"insert","lines":["3"]},{"start":{"row":32,"column":46},"end":{"row":32,"column":47},"action":"insert","lines":["0"]},{"start":{"row":32,"column":47},"end":{"row":32,"column":48},"action":"insert","lines":["0"]},{"start":{"row":32,"column":48},"end":{"row":32,"column":49},"action":"insert","lines":["0"]}],[{"start":{"row":33,"column":2},"end":{"row":33,"column":3},"action":"insert","lines":[";"],"id":134}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":24,"column":28},"end":{"row":24,"column":28},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1571678926687,"hash":"cc37f1454dca543abe25f4d5a61290734a5905eb"}