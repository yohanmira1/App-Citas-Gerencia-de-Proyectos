function index(req, res){
req.getConnection((err, conn) =>{
    conn.query('SELECT * FROM usuario', (err, tasks)=>{
        if(err) {
            res.json(err);
        }
        res.render('tasks/index', { tasks});
    });
});
}

function index1(req, res){
    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM especialista', (err, tasks1)=>{
            if(err) {
                res.json(err);
            }
            res.render('tasks/index1', { tasks1});
        });
    });
    
}

function index2(req, res){
    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM agendarcita INNER JOIN citasdisponibles ON agendarcita.cod_cita=citasdisponibles.cod_cita INNER JOIN especialista ON agendarcita.ID_medico=especialista.ID_medico INNER JOIN usuario ON agendarcita.ID=usuario.ID', (err, tasks2)=>{
            if(err) {
                res.json(err);
            }
            res.render('tasks/index2', { tasks2});
        });
    });
    
}

function create(req, res) {
    res.render('tasks/create');    

}

function especialista(req, res) {
    res.render('tasks/especialista');    

}



function store(req, res){
    const data = req.body;

    req.getConnection((err, conn) => {
        conn.query('INSERT INTO usuario SET ?', [data], (err, rows) => {
            res.redirect('/tasks');
        });
    });

}

function store1(req, res){
    const data = req.body;

    req.getConnection((err, conn) => {
        conn.query('INSERT INTO especialista SET ?', [data], (err, rows) => {
            res.redirect('/tasks1');
        });
    });

}



function destroy(req, res) {
    const id = req.body.id;
    
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM usuario WHERE ID= ?', [id], (err, rows) => {
            res.redirect('/tasks');
        });
    })
}

function destroy1(req, res) {
    const id1 = req.body.id1;
    
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM especialista WHERE ID_medico= ?', [id1], (err, rows) => {
            res.redirect('/tasks1');
        });
    })
}

function edit(req, res) {
    const id = req.params.id;
    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM usuario WHERE ID = ?', [id], (err, tasks)=>{
            if(err) {
                res.json(err);
            }
            res.render('tasks/edit', { tasks});
        });
    });            
}

function edit1(req, res) {
    const id1 = req.params.id1;
    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM especialista WHERE ID_medico = ?', [id1], (err, tasks1)=>{
            if(err) {
                res.json(err);
            }
            res.render('tasks/edit1', { tasks1});
        });
    });
              
}

function update(req, res) {
    const id = req.params.id;
    const data = req.body;

    req.getConnection((err, conn)=> {
        conn.query('UPDATE usuario SET ? WHERE ID = ?', [data, id], (err, rows)=> {
            res.redirect('/tasks');
        })
    })

    console.log(data);

}

function update1(req, res) {
    const id1 = req.params.id1;
    const data = req.body;

    req.getConnection((err, conn)=> {
        conn.query('UPDATE especialista SET ? WHERE ID_medico = ?', [data, id1], (err, rows)=> {
            res.redirect('/tasks1');
        })
    })

    console.log(data);

}

function update2(req, res) {
    const id1 = req.params.id2;
    const data = req.body;

    req.getConnection((err, conn)=> {
        conn.query('SELECT * FROM agendarcita INNER JOIN citasdisponibles ON agendarcita.cod_cita=citasdisponibles.cod_cita INNER JOIN especialista ON agendarcita.ID_medico=especialista.ID_medico INNER JOIN usuario ON agendarcita.ID=usuario.ID', [data, id2], (err, rows)=> {
            res.redirect('/tasks2');
        })
    })

    console.log(data);

}


module.exports = {
    index: index,
    create: create,
    store: store,
    destroy: destroy,
    destroy1: destroy1,
    edit: edit,
    edit1: edit1,
    update: update,
    update1: update1,
    store1: store1,
    index1: index1,
    index2: index2,
    especialista: especialista,
    update2: update2,

}