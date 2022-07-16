const Registro = require("../models/Registro");

exports.registroUsuario = function (req, res) {

    try {
        let registro;

        registro = new Registro(req.body);

        registro.save();
        res.send(registro);

    } catch (error) {
        console.log(error);
        res.status(500).send('Se produjo un error');

    }
}
    